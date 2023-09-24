import './RouteModal.css';
import Modal from '../UI/Modal';
import ReactCarousel from '../OpenSourceUI/ReactCarousel';
import RouteInfo from './RouteInfo';
import RouteLinks from './RouteLinks';

function RouteModal(props) {
  return (
    <Modal className="route-modal" close={props.close} title={props.name}>
      <ReactCarousel photos={props.photos} id={props.id} />
      <RouteInfo {...props} />
      {/* <p className="route-description">{props.description}</p> */}
      <img className="route-map" src={props.routeMap} alt="Route Map" />
      <RouteLinks {...props.links} />
    </Modal>
  );
}

export default RouteModal;
