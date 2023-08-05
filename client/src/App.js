import './App.css';
import RouteTileContainer from './components/RouteTiles/RouteTileContainer';
import Intro from './components/Intro';
import Header from './components/Header';
import RouteFilter from './components/Routes/RouteFilter';
import { useState } from 'react';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  function closeIntro() {
    setShowIntro(false);
  }

  const [params, setParams] = useState({
    distance: [1, 10],
    locations: [
      'NE D.C.',
      'SE D.C.',
      'SW D.C.',
      'NW D.C.',
      'N Arlington',
      'Alexandria',
    ],
    surfaces: ['Road', 'Trail', 'Paved Path', 'Sidewalk', 'Boardwalk'],
    types: ['Loop', 'Out & Back'],
    features: ['Flat', 'Rocky', 'Big Hills', 'Rolling'],
  });

  // const [routes, setRoutes] = useState([]);

  // async function fetchRoutes() {
  //   const response = await fetch(`http://localhost:3006/routes`);
  //   const data = await response.json();
  //   console.log(data);
  //   setRoutes(data);
  // }
  // fetch(`http://localhost:3006/routes`, {
  //   method: 'POST',
  //   headers: { 'content-type': 'application/json' },
  //   body: JSON.stringify(params),
  // });
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));

  // async function postRouteParams(params) {
  //   const response = await fetch('http://localhost:3006/routes', {
  //     method: 'POST',
  //     headers: { 'content-type': 'application/json' },
  //     body: JSON.stringify(params),
  //   });
  //   const receivedParams = await response.json();
  //   console.log(receivedParams);
  // }

  // postRouteParams(params);

  // fetchRoutes();

  return (
    <div className="App">
      {showIntro && <Intro close={closeIntro} />}
      <Header />
      <RouteFilter setParams={setParams} params={params} />
      <RouteTileContainer params={params} />
    </div>
  );
}

export default App;
