import './Modal.css';

function Modal(props) {
  return (
    <div>
      <div className={'modal'}>
        <div className="close" onClick={props.close}>
          &times;
        </div>
        <div className={props.className}>{props.children}</div>
      </div>
      <div className="overlay" onClick={props.close}></div>
    </div>
  );
}

export default Modal;
