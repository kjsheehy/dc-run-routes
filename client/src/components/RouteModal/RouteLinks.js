import './RouteLinks.css';

export default function RouteLinks(props) {
  return (
    <div className="route-links">
      <a href={props.maps}>Directions to Start</a>
      <div className="route-apps">
        <a href={props.strava}>Strava</a>
        <a href={props.mapMyRun}>MapMyRun</a>
        <a href={props.garmin}>Garmin</a>
      </div>
    </div>
  );
}
