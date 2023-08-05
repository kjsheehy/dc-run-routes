import RouteTileContainer from './RouteTileContainer';
import RouteFilter from '../Routes/RouteFilter';
import { useState } from 'react';

function RouteFinder(props) {
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

  const [routes, setRoutes] = useState([]);

  async function fetchRoutes() {
    const response = await fetch(`http://localhost:3006/routes`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(params),
    });
    const returnedRoutes = await response.json();
    setRoutes(returnedRoutes);
  }

  fetchRoutes();

  return (
    <div>
      <RouteFilter setParams={setParams} params={params} />
      <RouteTileContainer routes={routes} />
    </div>
  );
}

export default RouteFinder;
