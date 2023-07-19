import './Modal.css';

function Modal(props) {
  // const classes = 'modal ' + props.className;
  return (
    <div>
      <div classname="modal">{props.children}</div>
      <div classname="overlay"></div>
    </div>
  );
}

export default Modal;
