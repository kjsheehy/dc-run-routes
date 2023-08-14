import './RouteFilter.css';
import RangeSlider from '../MUI-Libary/RangeSlider';
import MultipleSelectCheckmarks from '../MUI-Libary/MultipleSelectCheckmarks';

function RouteFilter(props) {
  const locations = [
    'NE D.C.',
    'SE D.C.',
    'SW D.C.',
    'NW D.C.',
    'N Arlington',
    'Alexandria',
  ];

  const surfaces = ['Road', 'Trail', 'Paved Path', 'Sidewalk', 'Boardwalk'];

  const types = ['Loop', 'Out & Back'];

  const features = ['Flat', 'Rocky', 'Big Hills', 'Rolling'];

  return (
    <div className="route-filter">
      <div className="route-distance filter-item">
        <label htmlFor="distance-slider">Distance</label>
        <RangeSlider
          name="distance-slider"
          setParams={props.setParams}
          fetchRoutes={props.fetchRoutes}
        />
      </div>
      <div className="route-location filter-item">
        <MultipleSelectCheckmarks
          values={locations}
          params={props.params.locations}
          paramKey="locations"
          label="Location"
          setParams={props.setParams}
          fetchRoutes={props.fetchRoutes}
        />
      </div>
      <div className="route-surface filter-item">
        <MultipleSelectCheckmarks
          values={surfaces}
          params={props.params.surfaces}
          paramKey="surfaces"
          label="Surface"
          setParams={props.setParams}
          fetchRoutes={props.fetchRoutes}
        />
      </div>
      <div className="route-type filter-item">
        <MultipleSelectCheckmarks
          values={types}
          params={props.params.types}
          paramKey="types"
          label="Route Type"
          setParams={props.setParams}
          fetchRoutes={props.fetchRoutes}
        />
      </div>
      <div className="route-features filter-item">
        <MultipleSelectCheckmarks
          values={features}
          params={props.params.features}
          paramKey="features"
          label="Features"
          setParams={props.setParams}
          fetchRoutes={props.fetchRoutes}
        />
      </div>
    </div>
  );
}

export default RouteFilter;
