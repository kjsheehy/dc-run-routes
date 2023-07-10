import './RouteTile.css';

function RouteTile() {
  return (
    <div className="route-tile">
      <h2 className="route-name">Teddy Roosevelt Island</h2>
      <img
        className="route-thumbnail landscape"
        src="Assets/TeddyRooseveltInteriorLushDeer.jpeg"
      />
      <div className="route-info">
        <div className="route-distance">2.0 mi</div>
        <div className="route-location">N Alington</div>
        <div className="route-surface">Trail, Boardwalk</div>
        <div className="route-features">Flat</div>
        <div className="route-type">Loop</div>
      </div>
    </div>
  );
}

export default RouteTile;
