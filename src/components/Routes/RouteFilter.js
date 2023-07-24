import './RouteFilter.css';
import RangeSlider from '../MUI-Libary/RangeSlider';

function RouteFilter(props) {
  return (
    <div className="route-filter">
      <RangeSlider updateParams={props.updateParams} />
    </div>
  );
}

export default RouteFilter;
