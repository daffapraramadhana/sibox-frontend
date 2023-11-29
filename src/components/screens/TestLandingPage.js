import React, { useState } from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import "../screens/style.css";
import ambil from "../image/ambil.svg";
import kirim from "../image/kirim.svg";
import {} from "react-router-dom";
import sicepat from "../image/sicepat.png";
import Clock from "../comp/Clock";
import { FaUser } from "react-icons/fa";

const TestLandingPage = () => {
  return (
    <div
      style={{
        // backgroundColor: "#cd2028",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${sicepat})`,
        backgroundSize: "auto",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,.4)",
        }}
      >
        <div
          style={{
            fontSize: "20px",
            margin: "50px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            size="lg"
            style={{
              width: "15rem",
              // marginLeft: "30rem",
              // // marginRight: "-50rem",
              borderRadius: "15px",
              backgroundColor: "rgb(255, 100, 100, 0.2)",
              borderColor: "#000",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              fontWeight: "500",
              fontSize: "25px",
            }}
          >
            <Clock />
          </div>
          <Button
            href="/LoginKurir"
            variant="primary"
            size="lg"
            style={{
              width: "15rem",
              height: "5rem",
              // marginLeft: "30rem",
              // // marginRight: "-50rem",
              borderRadius: "50px",
              backgroundColor: "#ffff",
              borderColor: "#CD2028",
              display: "flex",
              flexDirection: "row",
              justifyContent: "Space-evenly",
              alignItems: "center",
            }}
          >
            <FaUser style={{ color: "#CD2028" }} />
            <h4 style={{ color: "#CD2028" }}>Login Kurir</h4>
          </Button>
        </div>
        <div
          style={{
            fontSize: "40px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            bottom: 0,
            position: "absolute",
          }}
        >
          <div
            style={{
              width: "100vw",
              height: "70px",
              // // marginRight: "-50rem",
              backgroundColor: "rgb(255, 100, 100, 0.2)",
              borderColor: "#000",
              alignItems: "center",
              //   justifyContent: "space-between",
              display: "flex",
              fontWeight: "100px",
            }}
          >
            <div
              style={{
                margin: "20px",
                justifyContent: "space-between",
                fontSize: "20px",
                width: "100%",
                flexDirection: "column",
              }}
            >
              <Row
                // fluid
                style={{
                  //   backgroundColor: "white",
                  display: "flex",
                }}
              >
                <Col
                  style={{
                    backgroundColor: "rgb(255, 100, 100, 0.1)",
                    borderRadius: "20px",
                    textAlign: "center",
                    marginLeft: "20px",
                    color: "white",
                  }}
                >
                  #SSK | Sibox - Suppermall Karawaci
                </Col>
                <Col></Col>
                <Col></Col>
                <Col
                  style={{
                    backgroundColor: "#ffff",
                    borderRadius: "20px",
                    marginRight: "20px",
                    textAlign: "center",
                  }}
                >
                  Loker Tersedia : S = 1 | M = 4 | L = 3
                </Col>
              </Row>
            </div>
          </div>
          {/* <Button
            href="/LoginKurir"
            variant="primary"
            size="lg"
            style={{
              width: "15rem",
              height: "5rem",
              // marginLeft: "30rem",
              // // marginRight: "-50rem",
              borderRadius: "50px",
              backgroundColor: "#ffff",
              borderColor: "#CD2028",
              display: "flex",
              flexDirection: "row",
              justifyContent: "Space-evenly",
              alignItems: "center",
            }}
          >
            <FaUser style={{ color: "#CD2028" }} />
            <h4 style={{ color: "#CD2028" }}>Login Kurir</h4>
          </Button> */}
        </div>
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <Row>
            <Col>
              <Button
                href="/InputPinAmbil"
                style={{
                  backgroundColor: "#ffff",
                  height: "400px",
                  width: "400px",
                  boxShadow: "10px 10px 10px #000000cc",
                  borderRadius: "100%",
                  marginRight: "10rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Container
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Row
                    style={{
                      // backgroundColor: "green",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={ambil}
                      style={{
                        width: "200px",
                        height: "200px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    />
                  </Row>
                  <Row style={{ textAlign: "center" }}>
                    <h3 style={{ color: "black" }}>AMBIL</h3>
                  </Row>
                </Container>
              </Button>
            </Col>
            <Col>
              <Button
                href="/PelangganKirimScaninput"
                style={{
                  backgroundColor: "#ffff",
                  height: "400px",
                  width: "400px",
                  boxShadow: "10px 10px 10px #000000cc",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Container
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Row
                    style={{
                      // backgroundColor: "green",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image
                      src={kirim}
                      style={{
                        width: "300px",
                        height: "300px",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "-50px",
                      }}
                    />
                  </Row>
                  <Row style={{ textAlign: "center", marginTop: "-50px" }}>
                    <h3 style={{ color: "black" }}>KIRIM</h3>
                  </Row>
                  <Container
                    style={{
                      bottom: "0",
                      width: "100px",
                      backgroundColor: "white",
                    }}
                  ></Container>
                </Container>
              </Button>
            </Col>
          </Row>
        </Container>
        ;
      </div>
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></div>
    </div>
  );
};

export default TestLandingPage;
