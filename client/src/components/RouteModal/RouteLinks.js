import './RouteLinks.css';

export default function RouteLinks(props) {
  return (
    <div className="route-links">
      <a href={props.maps}>
        Directions
        <br />
        to start
      </a>
      <a href={props.strava}>
        Strava
        <br />
        route
      </a>
      <a href={props.mapMyRun}>
        MapMyRun
        <br />
        route
      </a>
      <a href={props.garmin}>
        Garmin
        <br />
        route
      </a>
    </div>
  );
}
