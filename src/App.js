import './App.css';
import RouteTileContainer from './components/RouteTiles/RouteTileContainer';
import Intro from './components/Intro';
import Header from './components/Header';
import RouteFilter from './components/Routes/RouteFilter';
import { useState } from 'react';

const homepage = './dc-run-routes';

function App() {
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
      features: ['Rocky', 'Stairs'],
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

  const [showIntro, setShowIntro] = useState(true);
  function closeIntro() {
    setShowIntro(false);
  }

  const [params, setParams] = useState({
    distance: [0, 10],
    locations: [
      'NE D.C.',
      'SE D.C.',
      'SW D.C.',
      'NW D.C.',
      'N Arlington',
      'Alexandria',
    ],
    surfaces: ['Road', 'Trail', 'Paved Path', 'Sidewalk', 'Boardwalk'],
  });

  return (
    <div className="App">
      {showIntro && <Intro close={closeIntro} />}
      <Header />
      <RouteFilter setParams={setParams} params={params} />
      <RouteTileContainer routes={routes} params={params} />
    </div>
  );
}

export default App;
