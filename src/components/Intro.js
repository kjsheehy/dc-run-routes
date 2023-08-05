import './Intro.css';
import Modal from './UI/Modal';

function Intro(props) {
  return (
    <Modal close={props.close} className="page-intro">
      <p className="page-description">
        Welcome to DC Run Routes, v1! This site showcases beautiful running
        routes in and around DC. There's some info about each route, including
        distance, location, and surface type, to help you find a great run for
        you. There are also a number of photos I took along each route to
        highlight the scenary you can expect to enjoy. Happy running!
      </p>
      <p className="page-signature">-Kevin</p>
    </Modal>
  );
}

export default Intro;
