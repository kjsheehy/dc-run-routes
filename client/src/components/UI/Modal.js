import './Modal.css';

function Modal(props) {
  document.body.style.overflow = 'hidden';
  function closeModal() {
    document.body.style.overflow = 'auto';
    props.close();
  }

  return (
    <div>
      <div className={'modal'}>
        <div className="modal-header">
          <h3 className="modal-title">{props.title}</h3>
          <div className="close" onClick={closeModal}>
            &times;
          </div>
        </div>
        <div className={props.className}>{props.children}</div>
      </div>
      <div className="overlay" onClick={closeModal}></div>
    </div>
  );
}

export default Modal;
