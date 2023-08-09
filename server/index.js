const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3006;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(path.join(__dirname, 'Assets')));
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

const urlBase = '/dc-run-routes/api';
const assetURLBase = '.';

const routes = [
  {
    id: 0,
    name: 'Georgetown Waterfront Bridges',
    thumbnailSrc: `${assetURLBase}/KeyBridgeEast.jpg`,
    thumbnailIsPortrait: false,
    distance: 3.4,
    extendable: false,
    location: 'N Arlington',
    surface: ['Paved Path', 'Sidewalk'],
    features: ['Flat'],
    type: 'Loop',
  },
  {
    id: 1,
    name: 'Teddy Roosevelt Island',
    thumbnailSrc: `${assetURLBase}/TeddyRooseveltInteriorLushDeer.jpeg`,
    distance: 2.0,
    extendable: false,
    location: 'N Arlington',
    surface: ['Trail', 'Boardwalk'],
    features: ['Flat'],
    type: 'Loop',
  },
  {
    id: 2,
    name: 'Windy Run',
    thumbnailSrc: `${assetURLBase}/WindyRunPotomacEastSunriseFinn.jpeg`,
    distance: 1.5,
    extendable: true,
    location: 'N Arlington',
    surface: ['Trail'],
    features: ['Rocky'],
    type: 'Out & Back',
  },
  {
    id: 3,
    name: 'Hains Point',
    thumbnailSrc: `${assetURLBase}/HainsPointSWSunset.jpeg`,
    distance: 2.9,
    extendable: false,
    location: 'SW D.C.',
    surface: ['Road', 'Sidewalk'],
    features: ['Flat'],
    type: 'Loop',
  },
  {
    id: 4,
    name: 'National Arboretum',
    thumbnailSrc: `${assetURLBase}/ArboretumCreek.jpeg`,
    thumbnailIsPortrait: true,
    distance: 3.0,
    extendable: true,
    location: 'NE D.C.',
    surface: ['Road'],
    features: ['Big Hills'],
    type: 'Loop',
  },
  {
    id: 5,
    name: 'Old Town Waterfront',
    thumbnailSrc: `${assetURLBase}/OldTownWaterfrontTownhouses.jpeg`,
    distance: 1.0,
    extendable: true,
    location: 'Alexandria',
    surface: ['Paved Path'],
    features: ['Flat'],
    type: 'Out & Back',
  },
];

app.get('/dc-run-routes', (req, res) => {
  console.log(path.join(__dirname, '..', 'client', 'build', 'index.html'));
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
