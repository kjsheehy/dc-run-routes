import './RouteInfo.css';

export default function RouteInfo(props) {
  return (
    <div className="route-modal-info-container">
      <div className="route-modal-info">
        <div className="route-info-label">Distance</div>
        <div className="route-info-value">{props.distance.toFixed(1)} mi</div>
      </div>
      <div className="route-modal-info">
        <div className="route-info-label">Location</div>
        <div className="route-info-value">{props.location}</div>
      </div>
      <div className="route-modal-info">
        <div className="route-info-label">Surface</div>
        <div className="route-info-value">{props.surface.join(', ')}</div>
      </div>
      <div className="route-modal-info">
        <div className="route-info-label">Features</div>
        <div className="route-info-value">{props.features.join(', ')}</div>
      </div>
    </div>
  );
}
