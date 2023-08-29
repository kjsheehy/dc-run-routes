const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3006;
const { MongoClient, ServerApiVersion } = require('mongodb');
const { match } = require('assert');

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

const mongoUri =
  'mongodb+srv://kjsheehy:Punch93Seventeen@dc-run-routes.jp0qhli.mongodb.net/?retryWrites=true&w=majority';

const mongoClient = new MongoClient(mongoUri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function runMongo() {
  try {
    await mongoClient.connect();
    await mongoClient.db('dc-run-routes').command({ ping: 1 });
    console.log('Pinged your deployment. Successfully connected to MongoDB!');
  } finally {
    await mongoClient.close();
  }
}
runMongo().catch(console.dir);

// const result = await db.collection('routes').insertMany(routes);
//db.collection('routes').insertMany(routes);

async function createRoutes(newRoutes) {
  const result = await mongoClient
    .db('dc-run-routes')
    .collection('routes')
    .insertMany(newRoutes);
  console.log(`${result.insertedCount} new listings created`);
}

const urlBase = '/dc-run-routes/api';

const routes = [
  {
    id: 0,
    name: 'Georgetown Waterfront Bridges',
    photos: [
      `./KeyBridgeEast.jpg`,
      `./KeyBridgeSunrise.jpeg`,
      './GeorgetownWaterfrontParkPath.jpeg',
      './RooseveltBridgeRosslyn.jpeg',
      './TheReach.jpeg',
      './GeorgetownWaterfrontRosslyn.jpeg',
      './RockCreekTrailGeorgetownSunset.jpeg',
      './RockCreekTrailRosslyn.jpeg',
    ],
    distance: 3.4,
    location: 'N Arlington',
    surface: ['Paved Path', 'Sidewalk'],
    features: ['Flat'],
    type: 'Loop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 1,
    name: 'Teddy Roosevelt Island',
    distance: 2.0,
    location: 'N Arlington',
    surface: ['Trail', 'Boardwalk'],
    features: ['Flat'],
    type: 'Loop',
    photos: [
      './TeddyRooseveltInteriorLushDeer.jpeg',
      './KeyBridgeEast.jpg',
      './WindyRunPotomacEastSunriseFinn.jpeg',
      './HainsPointSWSunset.jpeg',
      './ArboretumCreek.jpeg',
      './OldTownWaterfrontTownhouses.jpeg',
      './KeyBridgeEast.jpg',
    ],
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 2,
    name: 'Windy Run',
    distance: 1.5,
    location: 'N Arlington',
    surface: ['Trail'],
    features: ['Rocky'],
    photos: [
      './WindyRunPotomacEastSunriseFinn.jpeg',
      './KeyBridgeEast.jpg',
      './TeddyRooseveltInteriorLushDeer.jpeg',
      './HainsPointSWSunset.jpeg',
      './ArboretumCreek.jpeg',
      './OldTownWaterfrontTownhouses.jpeg',
      './KeyBridgeEast.jpg',
    ],
    type: 'Out & Back',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 3,
    name: 'Hains Point',
    thumbnailSrc: `./HainsPointSWSunset.jpeg`,
    distance: 2.9,
    photos: [
      './HainsPointSWSunset.jpeg',
      './KeyBridgeEast.jpg',
      './TeddyRooseveltInteriorLushDeer.jpeg',
      './WindyRunPotomacEastSunriseFinn.jpeg',
      './ArboretumCreek.jpeg',
      './OldTownWaterfrontTownhouses.jpeg',
      './KeyBridgeEast.jpg',
    ],
    location: 'SW D.C.',
    surface: ['Road', 'Sidewalk'],
    features: ['Flat'],
    type: 'Loop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 4,
    name: 'National Arboretum',
    distance: 3.0,
    location: 'NE D.C.',
    surface: ['Road'],
    photos: [
      './ArboretumCreek.jpeg',
      './KeyBridgeEast.jpg',
      './TeddyRooseveltInteriorLushDeer.jpeg',
      './WindyRunPotomacEastSunriseFinn.jpeg',
      './HainsPointSWSunset.jpeg',
      './OldTownWaterfrontTownhouses.jpeg',
      './KeyBridgeEast.jpg',
    ],
    features: ['Big Hills'],
    type: 'Loop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 5,
    name: 'Old Town Waterfront',
    thumbnailSrc: `./OldTownWaterfrontTownhouses.jpeg`,
    distance: 1.0,
    location: 'Alexandria',
    surface: ['Paved Path'],
    features: ['Flat'],
    photos: [
      './OldTownWaterfrontTownhouses.jpeg',
      './KeyBridgeEast.jpg',
      './TeddyRooseveltInteriorLushDeer.jpeg',
      './WindyRunPotomacEastSunriseFinn.jpeg',
      './HainsPointSWSunset.jpeg',
      './ArboretumCreek.jpeg',
      './KeyBridgeEast.jpg',
    ],
    type: 'Out & Back',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    id: 6,
    name: 'Key + Memorial Bridges Loop',
    distance: 4.4,
    photos: [
      './KeyBridgeSunrise.jpeg',
      './TeddyRooseveltInteriorLushDeer.jpeg',
      './WindyRunPotomacEastSunriseFinn.jpeg',
      './HainsPointSWSunset.jpeg',
      './ArboretumCreek.jpeg',
      './OldTownWaterfrontTownhouses.jpeg',
      './KeyBridgeEast.jpg',
    ],
    location: 'N Arlington',
    surface: ['Paved Path', 'Sidewalk'],
    features: ['Flat'],
    type: 'Loop',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const testImages = [
  './KeyBridgeEast.jpg',
  './TeddyRooseveltInteriorLushDeer.jpeg',
  './WindyRunPotomacEastSunriseFinn.jpeg',
  './HainsPointSWSunset.jpeg',
  './ArboretumCreek.jpeg',
  './OldTownWaterfrontTownhouses.jpeg',
  './KeyBridgeEast.jpg',
];

app.get(`/dc-run-routes/`, (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.post(`${urlBase}/routes`, (req, res) => {
  const params = req.body;
  const matchingRoutes = routes.filter(
    (route) =>
      route.distance >= params.distance[0] &&
      route.distance <= params.distance[1] &&
      params.locations.includes(route.location) &&
      params.surfaces.some((surface) => route.surface.includes(surface)) &&
      params.types.some((type) => route.type.includes(type)) &&
      params.features.some((feature) => route.features.includes(feature))
  );
  res.send(matchingRoutes);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
