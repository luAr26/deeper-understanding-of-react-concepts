import classes from "./Modal.module.scss";

const Modal = ({ closeModal, title }) => {
  return (
    <div className={classes["modal-container"]}>
      <h4 className={classes["modal-heading"]}>{title}</h4>
      <p>This is the modal content. You can put anything you want in here.</p>
      <div className={classes["modal-footer"]}>
        <button type="button" onClick={() => closeModal()}>
          Close modal
        </button>
      </div>
    </div>
  );
};

export default Modal;
