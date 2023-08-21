import './RouteLinks.css';

export default function RouteLinks(props) {
  return (
    <div className="route-links">
      <a href="http://google.com/maps">Google Maps</a>
      <div className="route-apps">
        <a href="http://strava.com">Strava</a>
        <a href="http://mapmyrun.com">MapMyRun</a>
        <a href="http://garmin.com">Garmin</a>
      </div>
    </div>
  );
}
