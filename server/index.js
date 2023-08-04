const express = require('express');
const cors = require('cors');
const app = express();
const port = 3006;

app.use(cors());

const homepage = './dc-run-routes';

const routes = [
  {
    id: 0,
    name: 'Georgetown Waterfront Bridges',
    thumbnailSrc: `${homepage}/Assets/KeyBridgeEast.jpg`,
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
    thumbnailSrc: `${homepage}/Assets/TeddyRooseveltInteriorLushDeer.jpeg`,
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
    thumbnailSrc: `${homepage}/Assets/WindyRunPotomacEastSunriseFinn.jpeg`,
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
    thumbnailSrc: `${homepage}/Assets/HainsPointSWSunset.jpeg`,
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
    thumbnailSrc: `${homepage}/Assets/ArboretumCreek.jpeg`,
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
    thumbnailSrc: `${homepage}/Assets/OldTownWaterfrontTownhouses.jpeg`,
    distance: 1.0,
    extendable: true,
    location: 'Alexandria',
    surface: ['Paved Path'],
    features: ['Flat'],
    type: 'Out & Back',
  },
];

app.get('/routes', (req, res) => {
  res.send(routes);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
