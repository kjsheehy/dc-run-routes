import './RouteFilter.css';
import RangeSlider from '../OpenSourceUI/RangeSlider';
import MultipleSelectCheckmarks from '../OpenSourceUI/MultipleSelectCheckmarks';

function RouteFilter(props) {
  const locations = [
    'NE D.C.',
    'SE D.C.',
    'SW D.C.',
    'NW D.C.',
    'N Arlington',
    'Alexandria',
  ];

  const surfaces = ['Paved', 'Trail'];

  const types = ['Loop', 'Out & Back'];

  const features = ['Flat', 'Rocky', 'Big Hills', 'Rolling'];

  return (
    <div className="route-filter">
      <div className="route-distance filter-item">
        <label htmlFor="distance-slider">Distance</label>
        <RangeSlider
          name="distance-slider"
          fetchRoutes={props.fetchRoutes}
          params={props.params}
        />
      </div>
      <div className="route-location filter-item">
        <MultipleSelectCheckmarks
          values={locations}
          params={props.params}
          paramKey="locations"
          label="Location"
          fetchRoutes={props.fetchRoutes}
        />
      </div>
      <div className="route-surface filter-item">
        <MultipleSelectCheckmarks
          values={surfaces}
          params={props.params}
          paramKey="surfaces"
          label="Surface"
          fetchRoutes={props.fetchRoutes}
        />
      </div>
      <div className="route-type filter-item">
        <MultipleSelectCheckmarks
          values={types}
          params={props.params}
          paramKey="types"
          label="Route Type"
          fetchRoutes={props.fetchRoutes}
        />
      </div>
      <div className="route-features filter-item">
        <MultipleSelectCheckmarks
          values={features}
          params={props.params}
          paramKey="features"
          label="Features"
          fetchRoutes={props.fetchRoutes}
        />
      </div>
    </div>
  );
}

export default RouteFilter;
