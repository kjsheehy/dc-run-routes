import RouteTile from './RouteTile.js';
import './RouteTileContainer.css';

function RouteTileContainer(props) {
  const matchingRoutes = props.routes.filter(
    (route) =>
      route.distance >= props.params.distance[0] &&
      route.distance <= props.params.distance[1] &&
      props.params.locations.includes(route.location)
  );

  const routeTiles = matchingRoutes.map((route) => (
    <RouteTile {...route} key={route.id} />
  ));
  let routeTileContent = <p>No routes found.</p>;
  if (routeTiles.length) routeTileContent = routeTiles;

  return <div className="route-tile-container">{routeTileContent}</div>;
}

export default RouteTileContainer;
