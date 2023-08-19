import './RouteModal.css';
import Modal from '../UI/Modal';
import ReactCarousel from '../OpenSourceUI/ReactCarousel';

function RouteModal(props) {
  const thumbnailOrientation = props.thumbnailIsPortrait
    ? 'portrait'
    : 'landscape';

  return (
    <Modal className="route-modal" close={props.close}>
      <h2 className="route-name">{props.name}</h2>
      <ReactCarousel />
      <div className="route-modal-info">
        <div className="route-modal-distance">
          {props.distance.toFixed(1)} mi
        </div>
        <div className="route-modal-location">{props.location}</div>
        <div className="route-modal-surface">{props.surface.join(', ')}</div>
        <div className="route-modal-features">{props.features.join(', ')}</div>
        <div className="route-modal-type">{props.type}</div>
      </div>
    </Modal>
  );
}

export default RouteModal;
