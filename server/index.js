const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3006;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { match } = require('assert');
const { create } = require('domain');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/dc-run-routes', express.static(path.join(__dirname, 'Assets')));
app.use(
  '/dc-run-routes',
  express.static(path.join(__dirname, '..', 'client', 'build'))
);

const mongoClient = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

console.log(process.env);

async function queryDB(params) {
  try {
    await mongoClient.connect();
    const result = await mongoClient
      .db('dc-run-routes')
      .collection('routes')
      .find(params)
      .toArray();
    return result;
  } catch (err) {
    console.log('Mongoose Connection error', err);
  }
}

const urlBase = '/dc-run-routes/api';

app.get(`/dc-run-routes/`, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.post(`${urlBase}/routes`, async (req, res) => {
  try {
    const params = req.body;
    const query = {
      distance: { $gte: params.distance[0], $lte: params.distance[1] },
      location: { $in: params.locations },
      surface: { $elemMatch: { $in: params.surfaces } },
      difficulty: { $in: params.difficulty },
    };

    const routesFromDB = await queryDB(query);

    res.send(routesFromDB);
  } catch (err) {
    console.log(
      'error connecting to mongodb or with submitted parameters',
      err
    );
    res.status(404).send(err);
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
