import './Modal.css';

function Modal(props) {
  const classes = 'modal ' + props.className;
  return <div classname={classes}>{props.children}</div>;
}

export default Modal;
