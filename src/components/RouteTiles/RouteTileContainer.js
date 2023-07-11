import RouteTile from './RouteTile.js';
import './RouteTileContainer.css';

function RouteTileContainer(props) {
  return (
    <div className="route-tile-container">
      <RouteTile {...props.routes[0]} />
      <RouteTile {...props.routes[1]} />
      <RouteTile {...props.routes[2]} />
      <RouteTile {...props.routes[3]} />
      <RouteTile {...props.routes[4]} />
      <RouteTile {...props.routes[5]} />
    </div>
  );
}

export default RouteTileContainer;
