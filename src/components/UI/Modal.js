import './Modal.css';

function Modal(props) {
  return (
    <div>
      <div className="modal">
        <div className="close">&times;</div>
        <div className={props.className}>{props.children}</div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Modal;
