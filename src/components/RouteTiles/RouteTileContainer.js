import RouteTile from './RouteTile.js';
import './RouteTileContainer.css';

function RouteTileContainer(props) {
  const matchingRoutes = props.routes.filter(
    (route) =>
      route.distance >= props.params.distance[0] &&
      route.distance <= props.params.distance[1] &&
      props.params.locations.includes(route.location) &&
      props.params.surfaces.some((surface) =>
        route.surface.includes(surface)
      ) &&
      props.params.types.some((type) => route.type.includes(type))
  );

  const routeTiles = matchingRoutes.map((route) => (
    <RouteTile {...route} key={route.id} />
  ));
  let routeTileContent = <p>No routes found.</p>;
  if (routeTiles.length) routeTileContent = routeTiles;

  return <div className="route-tile-container">{routeTileContent}</div>;
}

export default RouteTileContainer;
