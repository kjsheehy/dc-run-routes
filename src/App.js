import './App.css';
import RouteTile from './RouteTile.js';

function App() {
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
        <div className="route-tile">
          <h2 className="route-name">Georgetown Waterfront Bridges</h2>
          <img
            className="route-thumbnail landscape"
            src="Assets/KeyBridgeEast.jpg"
          />
          <div className="route-info">
            <div className="route-distance">3.4 mi</div>
            <div className="route-location">N Arlington</div>
            <div className="route-surface">Paved Path, Sidewalk</div>
            <div className="route-features">Flat</div>
            <div className="route-type">Loop</div>
          </div>
        </div>
        <RouteTile />
        <div className="route-tile">
          <h2 className="route-name">Windy Run</h2>
          <img
            className="route-thumbnail landscape"
            src="Assets/WindyRunPotomacEastSunriseFinn.jpeg"
          />
          <div className="route-info">
            <div className="route-distance">1.5+ mi</div>
            <div className="route-location">N Arlington</div>
            <div className="route-surface">Trail</div>
            <div className="route-features">Rocky, Stairs</div>
            <div className="route-type">Out & Back</div>
          </div>
        </div>
        <div className="route-tile">
          <h2 className="route-name">Hains Point</h2>
          <img
            className="route-thumbnail landscape"
            src="Assets/HainsPointSWSunset.jpeg"
          />
          <div className="route-info">
            <div className="route-distance">4.0 mi</div>
            <div className="route-location">SW D.C.</div>
            <div className="route-surface">Road</div>
            <div className="route-features">Flat</div>
            <div className="route-type">Loop</div>
          </div>
        </div>
        <div className="route-tile">
          <h2 className="route-name">National Arboretum</h2>
          <img
            className="route-thumbnail portrait"
            src="Assets/ArboretumCreek.jpeg"
          />
          <div className="route-info">
            <div className="route-distance">3.0+ mi</div>
            <div className="route-location">NE D.C.</div>
            <div className="route-surface">Road</div>
            <div className="route-features">Big Hills</div>
            <div className="route-type">Loop</div>
          </div>
        </div>
        <div className="route-tile">
          <h2 className="route-name">Old Town Waterfront</h2>
          <img
            className="route-thumbnail landscape"
            src="Assets/OldTownWaterfrontTownhouses.jpeg"
          />
          <div className="route-info">
            <div className="route-distance">1.0-4.0 mi</div>
            <div className="route-location">Alexandria</div>
            <div className="route-surface">Paved Path</div>
            <div className="route-features">Flat</div>
            <div className="route-type">Out & Back</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
