import './RouteTile.css';
import RouteModal from '../Routes/RouteModal';
import { useState } from 'react';

function RouteTile(props) {
  const thumbnailOrientation = props.thumbnailIsPortrait
    ? 'portrait'
    : 'landscape';
  const [selected, setSelected] = useState();

  function clickHandler() {
    document.body.style.position = 'fixed';
    document.body.style.top = 
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
        className={'route-thumbnail ' + thumbnailOrientation}
        src={props.thumbnailSrc}
        alt={props.name + ' photo'}
      />
      <div className="route-info">
        <div className="route-distance">{props.distance.toFixed(1)} mi</div>
        <div className="route-location">{props.location}</div>
        <div className="route-surface">{props.surface.join(', ')}</div>
        <div className="route-features">{props.features.join(', ')}</div>
        <div className="route-type">{props.type}</div>
      </div>
    </div>
  );
}

export default RouteTile;
