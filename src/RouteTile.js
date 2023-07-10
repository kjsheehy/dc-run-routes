import './RouteTile.css';

function RouteTile({
  name,
  thumbnailSrc,
  distance,
  location,
  surface,
  features,
  type,
}) {
  return (
    <div className="route-tile">
      <h2 className="route-name">{name}</h2>
      <img
        className="route-thumbnail landscape"
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

export default RouteTile;
