import React from "react";
import { Navbar, Container, Row, Button, Col, Image } from "react-bootstrap";
import "../screens/style.css";
import { Link } from "react-router-dom";
import thank from "../image/thank.svg";
import { ImEnter } from "react-icons/im";
import { FaCheck } from "react-icons/fa";

const ScanBarcode = () => {
  return (
    <div className="">
      <Navbar class="navbar navbar-light">
        <Container
          style={{
            paddingBottom: "10px",
          }}
        >
          <Navbar.Brand className="logo">
            <p className="text">Sibox</p>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div>
        <h3
          style={{
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "3rem",
            verticalAlign: "baseline",
          }}
        >
          Terima Kasih !!!
        </h3>

        <Container
          style={{
            textAlign: "center",
          }}
        >
          <Image
            src={thank}
            style={{
              width: "300px",
            }}
          />
        </Container>
      </div>

      <Container
        fluid
        style={{
          position: "absolute",
          bottom: "0",
          marginBottom: "3rem",
          flex: "1",
        }}
      >
        <Row
          style={{
            flex: "1",
          }}
        >
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* <Link to="/MasukanDimensi">
              <Button
                variant="primary"
                size="lg"
                style={{
                  width: "20rem",
                  borderRadius: "50px",
                  backgroundColor: "#ffff",
                  borderColor: "#CD2028",
                  color: "#CD2028",

                  //   marginLeft: "-10rem",
                }}
              >
                Buka Loker Kembali
                <ImEnter
                  style={{
                    marginLeft: "3rem",
                  }}
                />
              </Button>
            </Link> */}
          </Col>

          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Container
              style={{
                backgroundColor: "none",
                height: "3rem",
              }}
            ></Container>
          </Col>
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Button
              href="/"
              variant="primary"
              size="lg"
              style={{
                width: "20rem",
                borderRadius: "50px",
                backgroundColor: "#CD2028",
                borderColor: "#CD2028",
              }}
            >
              Selesai
              <FaCheck
                style={{
                  marginLeft: "8rem",
                  textAlign: "center",
                  marginBottom: "5px",
                  marginRight: "-2rem",
                }}
              />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ScanBarcode;
