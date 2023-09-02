import './RouteTile.css';
import RouteModal from '../RouteModal/RouteModal';
import { useState } from 'react';

function RouteTile(props) {
  const [selected, setSelected] = useState();

  function clickHandler() {
    if (!selected) setSelected(true);
  }

  function closeRouteModal() {
    setSelected(false);
  }

  return (
    <div className="route-tile" onClick={clickHandler}>
      {selected && <RouteModal {...props} close={closeRouteModal} />}
      <h2 className="route-name">{props.name}</h2>
      <img
        className={'route-thumbnail'}
        src={props.photos[0]}
        alt={props.name + ' photo'}
      />
      <div className="route-info">
        <div className="route-tile-distance">
          {props.distance.toFixed(1)} mi
        </div>
        <div className="route-tile-location">{props.location}</div>
        <div className="route-tile-surface">{props.surface.join(', ')}</div>
        <div className="route-tile-features">{props.features.join(', ')}</div>
        <div className="route-tile-type">{props.type}</div>
      </div>
    </div>
  );
}

export default RouteTile;
