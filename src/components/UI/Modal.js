import './Modal.css';

function Modal(props) {
  const classes = 'modal ' + props.className;
  return (
    <div>
      <div className={classes}>{props.children}</div>
      <div className="overlay"></div>
    </div>
  );
}

export default Modal;
