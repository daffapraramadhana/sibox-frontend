import React from "react";
import {
  Navbar,
  Container,
  Row,
  Button,
  Col,
  FormControl,
  Image,
} from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import kurirdrop from "../image/kurirdrop.svg";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import Cookies from "js-cookie";

const DashboardKurir = () => {
  function logout() {
    window.location.href = "/";
  }

  return (
    <div className="">
      <NavbarMenu2 />
      <body
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          margin: "auto",
          marginTop: "3rem",
        }}
      >
        <div
          style={{
            display: "flex",
            // position: "position",
            alignItems: "center",
            // bottom: 0,
            // marginLeft: "10rem",
            // marginRight: "10rem",
            width: "100%",
            height: "100%",
            // height: "91vh",
            flexDirection: "row",
            justifyContent: "Space-around",
            marginTop: "1rem",
            // marginTop: "2rem",
            // padding: "50px",
          }}
        >
          <div
            style={{
              // height: "100vh",
              width: "45%",
              // marginTop: "-10rem",
              // padding: "30px",
              marginLeft: "7rem",
            }}
          >
            <Container
              style={{
                backgroundColor: "#D9D9D9",
                height: "30vh",
                width: "90%",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                borderColor: "black",
              }}
            >
              <Col>
                <FaUser
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "-5vh",
                  }}
                />
                <form style={{ fontSize: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <label class="col-sm-3 col-form-label">Nama :</label>
                    <div class="col-sm-5">
                      <input
                        type="text"
                        disabled
                        value="Akmal Fauzan"
                        class="form-control-plaintext"
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <label class="col-sm-3 col-form-label">Logistik :</label>
                    <div class="col-sm-5">
                      <input
                        type="text"
                        disabled
                        value="Sicepat"
                        class="form-control-plaintext"
                      />
                    </div>
                  </div>
                  <div>
                    <Button
                      onClick={logout}
                      style={{
                        width: "100px",
                        height: "50px",
                        borderRadius: "25px",
                      }}
                    >
                      Logout
                    </Button>
                  </div>
                </form>
              </Col>
            </Container>
            <Button
              href="/InputKodeKurir"
              style={{
                backgroundColor: "white",
                height: "40vh",
                width: "90%",
                marginTop: "5vh",
                border: "1px solid #CD2028",
                backgroundColor: "#ffff",
                marginLeft: "3.5vh",
                borderRadius: "50px",
              }}
            >
              <Container>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={kurirdrop}
                    style={{
                      width: "300px",
                      marginTop: "50px",
                      marginBottom: "30px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "3rem",
                    color: "black",
                  }}
                >
                  Drop
                </h3>
              </Container>
            </Button>
          </div>
          <Container
            style={{
              // height: "100vh",
              width: "30%",
              height: "75vh",
              // marginTop: "7vh",
              border: "1px solid #CD2028",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginTop: "5vh" }}>Paket Tersedia</h3>
            <div style={{ marginTop: "3vh" }}>
              <button
                fluid
                style={{
                  height: "10vh",
                  width: "100%",
                  top: 0,
                  border: "1px solid #CD2028",
                  borderRadius: "20px",
                }}
              ></button>
              <button
                fluid
                style={{
                  height: "10vh",
                  width: "100%",
                  top: 0,
                  border: "1px solid #CD2028",
                  marginTop: "20px",
                  borderRadius: "20px",
                }}
              ></button>
              <button
                fluid
                style={{
                  height: "10vh",
                  width: "100%",
                  top: 0,
                  border: "1px solid #CD2028",
                  marginTop: "20px",
                  borderRadius: "20px",
                }}
              ></button>
              <button
                fluid
                style={{
                  height: "10vh",
                  width: "100%",
                  top: 0,
                  border: "1px solid #CD2028",
                  marginTop: "20px",
                  borderRadius: "20px",
                }}
              ></button>
            </div>
          </Container>
        </div>
      </body>

      {/*  */}
      {/* </Container> */}
      {/* <Container
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
            <Link to="/TestLandingPage">
              <Button
                variant="primary"
                size="lg"
                style={{
                  width: "5rem",
                  borderRadius: "50px",
                  backgroundColor: "#CD2028",
                  borderColor: "#CD2028",
                  marginLeft: "-10rem",
                }}
              >
                <FaArrowLeft
                  style={{
                    marginBottom: "5px",
                  }}
                />
              </Button>
            </Link>
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
              href="/ScanBarcode"
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
              Next
              <FaArrowRight style={{ marginLeft: "3rem" }} />
            </Button>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default DashboardKurir;
