import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalComponent = ({ body: Component, state, setState, ...props }) => {
  return (
    <>
      <Modal
        show={state}
        onHide={() => setState(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Component {...props} />
        </Modal.Body>
        {props.modalData.showFooter === true ? (
          <Modal.Footer>
            {props.modalData.footer.map((index) => (
              <Button
                variant={index.variant}
                type={index.type}
                onClick={index.onClick}
              >
                {index.content}
              </Button>
            ))}
          </Modal.Footer>
        ) : null}
      </Modal>
    </>
  );
};

export default ModalComponent;
