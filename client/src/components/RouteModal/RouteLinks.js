import './RouteLinks.css';

export default function RouteLinks(props) {
  return (
    <div className="route-links">
      <a href={props.maps} target="_blank" rel="noopener noreferrer">
        Directions
        <br />
        to start
      </a>
      <a href={props.strava} target="_blank" rel="noopener noreferrer">
        Strava
        <br />
        route
      </a>
      <a href={props.mapMyRun} target="_blank" rel="noopener noreferrer">
        MapMyRun
        <br />
        route
      </a>
      <a href={props.garmin} target="_blank" rel="noopener noreferrer">
        Garmin
        <br />
        route
      </a>
    </div>
  );
}
