import RouteTile from './RouteTile.js';
import './RouteTileContainer.css';
import { useState } from 'react';

function RouteTileContainer(props) {
  const routeTiles = props.routes.map((route) => (
    <RouteTile {...route} key={route.id} />
  ));
  let routeTileContent = <p>No routes found.</p>;
  if (routeTiles.length) routeTileContent = routeTiles;

  return <div className="route-tile-container">{routeTileContent}</div>;
}

export default RouteTileContainer;
