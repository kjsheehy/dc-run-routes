import { useState } from 'react';
import './RouteModal.css';

function RouteModal({
  name,
  thumbnailSrc,
  thumbnailIsPortrait,
  distance,
  location,
  surface,
  features,
  type,
}) {
  return (
    <div className="route-modal">
      <h2 className="route-name">{name}</h2>
      <img
        className={'route-thumbnail ' + thumbnailOrientation}
        src={thumbnailSrc}
        alt={name + ' photo'}
      />
      <div className="route-info">
        <div className="route-distance">{distance.toFixed(1)} mi</div>
        <div className="route-location">{location}</div>
        <div className="route-surface">{surface.join(', ')}</div>
        <div className="route-features">{features.join(', ')}</div>
        <div className="route-type">{type}</div>
      </div>
    </div>
  );
}

export default RouteModal;
