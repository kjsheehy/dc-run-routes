import RouteTile from './RouteTile.js';
import './RouteTileContainer.css';
import { useState } from 'react';

function RouteTileContainer(props) {
  const [routes, setRoutes] = useState([]);

  async function fetchRoutes() {
    const response = await fetch(`http://localhost:3006/routes`);
    const returnedRoutes = await response.json();
    console.log(returnedRoutes);
    const matchingRoutes = returnedRoutes.filter(
      (route) =>
        route.distance >= props.params.distance[0] &&
        route.distance <= props.params.distance[1] &&
        props.params.locations.includes(route.location) &&
        props.params.surfaces.some((surface) =>
          route.surface.includes(surface)
        ) &&
        props.params.types.some((type) => route.type.includes(type)) &&
        props.params.features.some((feature) =>
          route.features.includes(feature)
        )
    );
    setRoutes(matchingRoutes);
  }

  fetchRoutes();

  const routeTiles = routes.map((route) => (
    <RouteTile {...route} key={route.id} />
  ));
  let routeTileContent = <p>No routes found.</p>;
  if (routeTiles.length) routeTileContent = routeTiles;

  return <div className="route-tile-container">{routeTileContent}</div>;
}

export default RouteTileContainer;
