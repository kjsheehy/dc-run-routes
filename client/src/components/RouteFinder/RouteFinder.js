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

  const [routes, setRoutes] = useState(false);

  async function fetchRoutes() {
    const response = await fetch(
      //In development: `http://localhost:3006/dc-run-routes/api/routes`
      // In prod: `./api/routes`
      `http://localhost:3006/dc-run-routes/api/routes`,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(params),
      }
    );
    const returnedRoutes = await response.json();
    if (routes !== returnedRoutes) setRoutes(returnedRoutes);
  }

  //Fetch routes only on initial render. Subsequent fetches will be called by the filter components on each change in their values.
  if (!routes) fetchRoutes();

  return (
    <div>
      <RouteFilter
        setParams={setParams}
        params={params}
        fetchRoutes={fetchRoutes}
      />
      <RouteTileContainer routes={routes} />
    </div>
  );
}

export default RouteFinder;
