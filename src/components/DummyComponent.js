import { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

const DummyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    console.log("Click the open modal button");
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <h3>Header of the dummy component</h3>
      <p>
        <strong>We will learn how to use react portals &amp; refs.</strong>
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
        facere cupiditate sunt placeat tempore. Repellendus ab voluptatum ad
        doloribus. Dicta aperiam accusantium odio natus mollitia libero dolorem
        perspiciatis? Porro, ex.
      </p>
      <button type="button" onClick={openModal}>
        Open modal
      </button>
      {showModal &&
        ReactDOM.createPortal(
          <Modal
            closeModal={closeModal}
            title="Rendered from Dummy component"
          />,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default DummyComponent;
