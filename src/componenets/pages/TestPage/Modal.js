import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Input from "../../UI/Input";

/**
 * @author: Sohag babu
 * @function Modal
 **/

const RenderModal = (props) => {
  const { text, setText, onSubmit, show } = props;

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} onSubmit={onSubmit}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Text</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            value={text}
            placeholder={`text`}
            onChange={(e) => setText(e.target.value)}
            className="form-control-sm"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default RenderModal;
