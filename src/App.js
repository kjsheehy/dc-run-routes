import './App.css';
import RouteTileContainer from './components/RouteTiles/RouteTileContainer.js';
import Intro from './components/Intro.js';
import Header from './components/Header.js';
const homepage = './dc-run-routes';

function App() {
  const routes = [
    {
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
      name: 'Windy Run',
      thumbnailSrc: `${homepage}/Assets/WindyRunPotomacEastSunriseFinn.jpeg`,
      distance: 1.5,
      extendable: true,
      location: 'N Arlington',
      surface: ['Trail'],
      features: ['Rocky', 'Stairs'],
      type: 'Out & Back',
    },
    {
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

  return (
    <div className="App">
      <Header />
      <Intro />
      <RouteTileContainer routes={routes} />
    </div>
  );
}

export default App;
