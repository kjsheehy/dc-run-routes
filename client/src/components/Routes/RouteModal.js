import './RouteModal.css';
import Modal from '../UI/Modal';
import ReactCarousel from '../OpenSourceUI/ReactCarousel';
import RouteInfo from './RouteInfo';

function RouteModal(props) {
  const thumbnailOrientation = props.thumbnailIsPortrait
    ? 'portrait'
    : 'landscape';

  console.log(props);

  return (
    <Modal className="route-modal" close={props.close}>
      <h2 className="route-name">{props.name}</h2>
      <ReactCarousel thumbnailSrc={props.thumbnailSrc} />
      <RouteInfo {...props} />
    </Modal>
  );
}

export default RouteModal;
