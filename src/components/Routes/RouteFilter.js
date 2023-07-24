import './RouteFilter.css';
import RangeSlider from '../MUI-Libary/RangeSlider';
import MultipleSelectCheckmarks from '../MUI-Libary/MultipleSelectCheckmarks';

function RouteFilter(props) {
  return (
    <div className="route-filter">
      <div className="route-distance">
        <h3>Route Distance (mi)</h3>
        <RangeSlider updateParams={props.updateParams} />
      </div>
      <div className="route-location">
        <div>Route Location</div>
        <MultipleSelectCheckmarks />
      </div>
    </div>
  );
}

export default RouteFilter;
