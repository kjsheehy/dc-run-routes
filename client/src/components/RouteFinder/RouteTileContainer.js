import RouteTile from './RouteTile.js';
import './RouteTileContainer.css';

function RouteTileContainer(props) {
  let routeTileContent = <p>No routes found.</p>;
  if (props.routes) {
    const routeTiles = props.routes.map((route) => (
      <RouteTile {...route} key={route.id} />
    ));
    if (routeTiles.length) routeTileContent = routeTiles;
  }

  return <div className="route-tile-container">{routeTileContent}</div>;
}

export default RouteTileContainer;
