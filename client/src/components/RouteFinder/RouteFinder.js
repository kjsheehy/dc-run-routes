import RouteTileContainer from './RouteTileContainer';
import RouteFilter from './RouteFilter';
import { useState } from 'react';
import './RouteFinder.css';

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
    surfaces: ['Paved', 'Trail'],
    difficulty: ['Easy', 'Medium', 'Hard'],
  });

  const [routes, setRoutes] = useState(false);

  async function fetchRoutes(newParams) {
    if (params !== newParams) setParams(newParams);
    const response = await fetch(`./api/routes`, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newParams),
    });
    if (response.status >= 400) {
      console.log('Error while fetching routes:');
      console.dir(response);
    } else {
      const returnedRoutes = await response.json();
      if (routes !== returnedRoutes) setRoutes(returnedRoutes);
    }
  }

  //Fetch routes only on initial render. Subsequent fetches will be called by the filter components on each change in their values.
  if (!routes) fetchRoutes(params);

  return (
    <div className="route-finder">
      <RouteFilter params={params} fetchRoutes={fetchRoutes} />
      <RouteTileContainer routes={routes} />
    </div>
  );
}

export default RouteFinder;
