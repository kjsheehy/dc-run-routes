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

  return (
    <div className="route-filter">
      <div className="route-distance">
        <h3>Route Distance (mi)</h3>
        <RangeSlider setParams={props.setParams} />
      </div>
      <div className="route-location">
        <MultipleSelectCheckmarks
          values={locations}
          params={props.params.locations}
          paramKey="locations"
          label="Location"
          setParams={props.setParams}
        />
      </div>
      <div className="route-surface">
        <MultipleSelectCheckmarks
          values={surfaces}
          params={props.params.surfaces}
          paramKey="surfaces"
          label="Surface"
          setParams={props.setParams}
        />
      </div>
    </div>
  );
}

export default RouteFilter;
