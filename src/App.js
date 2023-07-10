import './App.css';
import RouteTile from './RouteTile.js';

function App() {
  const routes = [
    {
      name: 'Georgetown Waterfront Bridges',
      thumbnailSRC: './Assets/KeyBridgeEast.jpg',
      distance: 3.4,
      extendable: false,
      location: 'N Arlington',
      surface: ['Paved Path', 'Sidewalk'],
      features: ['Flat'],
      type: 'Loop',
    },
    {
      name: 'Teddy Roosevelt Island',
      thumbnailSrc: './Assets/TeddyRooseveltInteriorLushDeer.jpeg',
      distance: 2.0,
      extendable: false,
      location: 'N Arlington',
      surface: ['Trail', 'Boardwalk'],
      features: ['Flat'],
      type: 'Loop',
    },
    {
      name: 'Windy Run',
      thumbnailSRC: './Assets/WindyRunPotomacEastSunriseFinn.jpeg',
      distance: 1.5,
      extendable: true,
      location: 'N Arlington',
      surface: ['Trail'],
      features: ['Rocky', 'Stairs'],
      type: 'Out & Back',
    },
    {
      name: 'Hains Point',
      thumbnailSRC: './Assets/HainsPointSWSunset.jpeg',
      distance: 2.9,
      extendable: false,
      location: 'SW D.C.',
      surface: ['Road', 'Sidewalk'],
      features: ['Flat'],
      type: 'Loop',
    },
    {
      name: 'National Arboretum',
      thumbnailSRC: './Assets/ArboretumCreek.jpeg',
      distance: 3.0,
      extendable: true,
      location: 'NE D.C.',
      surface: ['Road'],
      features: ['Big Hills'],
      type: 'Loop',
    },
    {
      name: 'Old Town Waterfront',
      thumbnailSRC: './Assets/OldTownWaterfrontTownhouses.jpeg',
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
      <header className="App-header">
        <h1 className="page-title">DC Run Routes</h1>
      </header>
      <div className="page-intro">
        <p className="page-description">
          Welcome to DC Run Routes, v1! This site showcases beautiful running
          routes in and around DC. There's some info about each route, including
          distance, location, and surface type, to help you find a great run for
          you. There are also a number of photos taken along each route to
          highlight the scenary you can expect to enjoy. Happy running!
        </p>
        <p className="page-signature">-Kevin</p>
      </div>
      <div className="content">
        <RouteTile {...routes[0]} />
        <RouteTile {...routes[1]} />
        <RouteTile {...routes[2]} />
        <RouteTile {...routes[3]} />
        <RouteTile {...routes[4]} />
        <RouteTile {...routes[5]} />
      </div>
    </div>
  );
}

export default App;
