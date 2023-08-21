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
app.use('/dc-run-routes', express.static(path.join(__dirname, 'Assets')));
app.use(
  '/dc-run-routes',
  express.static(path.join(__dirname, '..', 'client', 'build'))
);

const urlBase = '/dc-run-routes/api';

// In local dev: 'http://localhost:3006/dc-run-routes'
// In prod: '.'
const assetURLBase = 'http://localhost:3006/dc-run-routes';

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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
];

const testImages = routes.map((route) => route.thumbnailSrc);

app.get('/dc-run-routes/', (req, res) => {
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

app.get(`${urlBase}/route`, (req, res) => {
  console.log(testImages);
  res.send(testImages);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
