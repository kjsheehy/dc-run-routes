import './RouteModal.css';
import Modal from '../UI/Modal';
import ReactCarousel from '../OpenSourceUI/ReactCarousel';
import RouteInfo from './RouteInfo';
import RouteLinks from './RouteLinks';

function RouteModal(props) {
  return (
    <Modal className="route-modal" close={props.close} title={props.name}>
      <ReactCarousel thumbnailSrc={props.thumbnailSrc} id={props.id} />
      <RouteInfo {...props} />
      <p className="route-description">{props.description}</p>
      <img className="route-map" src="./test-route-map.png" alt="Route Map" />
      <RouteLinks {...props} />
    </Modal>
  );
}

export default RouteModal;
