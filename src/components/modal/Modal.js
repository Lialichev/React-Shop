import ReactModal from 'react-modal';

ReactModal.setAppElement('#app');

const Modal = ({ isOpen, close, success, text }) => {
  const onOk = () => {
    success();
    close();
  };

  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="Example"
    >
      <h1>Warning</h1>
      <span className="close" onClick={close}>x</span>
      <p>{text}</p>
      <div className="buttons">
        <button onClick={onOk}>Ok</button>
        <button onClick={close}>Cancel</button>
      </div>
    </ReactModal>
  )
};

export default Modal;
