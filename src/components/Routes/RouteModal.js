import './RouteModal.css';

function RouteModal(props) {
  const thumbnailOrientation = props.thumbnailIsPortrait
    ? 'portrait'
    : 'landscape';

  return (
    <div className="route-tile">
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

export default RouteModal;
