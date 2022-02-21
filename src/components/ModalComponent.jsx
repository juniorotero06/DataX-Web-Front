import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = (props) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  return (
    <>
      <Button
        disabled={props.loading === true}
        variant={props.modalData.variant}
        onClick={handleShow}
      >
       {props.modalData.title}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Modal
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalComponent;
