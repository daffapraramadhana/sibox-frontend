import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import { Button, Image } from "react-bootstrap";
import thank from "../image/thank.svg";

function ModalTerimaKasih() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button
        onClick={handleShow}
        variant="primary"
        size="lg"
        style={{
          width: "10rem",
          // marginLeft: "30rem",
          // // marginRight: "-50rem",
          borderRadius: "50px",
          backgroundColor: "#CD2028",
          borderColor: "#CD2028",
          marginRight: "-10rem",
        }}
      >
        Lanjut
        <FaArrowRight style={{ marginLeft: "3rem" }} />
      </Button>

      <Modal
        size="lg"
        // aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
        style={{ borderRadius: "50%" }}
      >
        <Modal.Header
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
            backgroundColor: "#CD2028",
            display: "flex",
            width: "100%",
          }}
        >
          <Modal.Title style={{ color: "white" }}>Terima Kasih</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Image src={thank} style={{ width: "30rem" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button href="/">Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalTerimaKasih;
