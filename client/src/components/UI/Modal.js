import './Modal.css';

function Modal(props) {
  return (
    <div>
      <div className={'modal'}>
        <div className="modal-header">
          <h3 className="modal-title">{props.title}</h3>
          <div className="close" onClick={props.close}>
            &times;
          </div>
        </div>
        <div className={props.className + ' modal-content'}>
          {props.children}
        </div>
      </div>
      <div className="overlay" onClick={props.close}></div>
    </div>
  );
}

export default Modal;
