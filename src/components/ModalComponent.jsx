import React from "react";
import { Modal, Button } from "react-bootstrap";
import { handleShowModal } from "../redux/actions";
import { connect } from "react-redux";

const ModalComponent = ({ body: Component, ...props }) => {
  return (
    <>
      <Button
        disabled={props.loading === true}
        variant={props.modalData.variantButtom}
        onClick={() => props.handleShowModal(true)}
      >
        {props.modalData.title}
      </Button>

      <Modal
        show={props.show}
        onHide={() => props.handleShowModal(false)}
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
              <Button variant={index.variant} type={index.type} onClick={index.onClick}>
                {index.content}
              </Button>
            ))}
          </Modal.Footer>
        ) : null}
      </Modal>
    </>
  );
};

function mapStateToProps(state) {
  return {
    show: state.show,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleShowModal: (bool) => dispatch(handleShowModal(bool)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalComponent);
