import React from "react";
import { Image, Button } from "react-bootstrap";
import ambil from "../image/ambil.svg";
import kirim from "../image/kirim.svg";
import sicepatbg from "../image/sicepatbg.jpg";
import { BsBoxSeam } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import video from "../video/iklan.mp4";
import NavbarMenuHome from "../comp/NavbarMenuHome";

function ReworkLandingPage() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${sicepatbg})`,
          backgroundSize: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "100vh",

              // backgroundImage: `url(${sicepatbg})`,
              // backgroundSize: "auto",
              // backgroundImage: `url(${sicepat})`,
              // backgroundSize: "100% 100vh",
              // backgroundRepeat: "no-repeat",
            }}
          >
            <NavbarMenuHome />
            <div
              style={{
                textAlign: "center",
                marginTop: "3rem",
                // color: "white",
              }}
            >
              <h1 style={{ color: "white" }}>
                Hallo !!! Kirim dan Ambil Paket Anda Disini
              </h1>
              <h2>Selamat Datang di Sibox - Suppermall Karawaci</h2>

              <div
                style={{
                  // backgroundColor: "white",
                  height: "50vh",
                  marginTop: "3rem",
                  // alignItems: "center",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    // backgroundColor: "#ffff",
                    height: "100%",
                    width: "20%",
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                    float: "left",
                    marginLeft: "auto",
                    marginRight: "-3rem",
                    // border: "10px",
                    // borderColor: "#CD2028",
                    // boxShadow: "10px 10px 10px 5px #000000cc",
                    // borderRadius: "50px",
                    fontSize: "20px",
                    flexDirection: "column",
                  }}
                >
                  <Button
                    href="/Loginkurir"
                    style={{
                      backgroundColor: "white",
                      width: "90%",
                      height: "30%",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "50px 50px 0px 0px",
                      justifyContent: "space-evenly",
                      top: "0",
                      color: "black",
                      flexDirection: "column",
                      boxShadow: "5px 10px 10px 5px #000000cc",
                    }}
                  >
                    <FaUser style={{ height: "50px", width: "50px" }} />
                    <h4 s>Login kurir</h4>
                  </Button>
                  <div
                    style={{
                      backgroundColor: "white",
                      width: "90%",
                      height: "65%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "0px 0px 50px 50px",
                      boxShadow: "5px 10px 10px 5px #000000cc",
                    }}
                  >
                    <p>Loker Tersedia :</p>
                    <p style={{ fontSize: "25px" }}>
                      <BsBoxSeam /> S = 3
                    </p>
                    <p style={{ fontSize: "30px" }}>
                      <BsBoxSeam /> M = 4
                    </p>
                    <p style={{ fontSize: "40px" }}>
                      <BsBoxSeam /> L = 1
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    backgroundColor: "#CD2028aa",
                    height: "100%",
                    width: "60%",
                    justifyContent: "center",
                    display: "flex",
                    alignItems: "center",
                    float: "left",
                    marginLeft: "150px",
                    marginRight: "100px",
                    border: "10px",
                    borderColor: "#CD2028",
                    boxShadow: "10px 10px 10px 5px #000000cc",
                    borderRadius: "25px",
                    fontSize: "30px",
                  }}
                >
                  <video
                    width="100%"
                    height="100%"
                    controls
                    autoPlay
                    muted
                    loop
                    style={{
                      objectFit: "cover",
                      borderRadius: "25px",
                      pointerEvents: "none",
                    }}
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* <div
              style={{
                justifyContent: "space-between",
                fontSize: "20px",
                width: "65%",
                flexDirection: "column",
                bottom: "0",
                position: "fixed",
                marginBottom: "20px",
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
                    backgroundColor: "white",
                    borderRadius: "20px",
                    textAlign: "center",
                    marginLeft: "40px",
                    color: "black",
                    marginLeft: "5rem",
                  }}
                >
                  #SSK | Sibox - Suppermall Karawaci
                </Col>
                <Col></Col>
                <Col></Col>
                <Col>
                  <button
                    style={{
                      backgroundColor: "#ffff",
                      borderRadius: "20px",
                      marginRight: "20px",
                      textAlign: "center",
                      justifyContent: "space-evenly",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <FaUser />
                    <h4>Login kurir</h4>
                  </button>
                </Col>
              </Row>
            </div> */}
            </div>
          </div>
          <div
            style={{
              right: "0",
              float: "right",
              width: "40%",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.1)",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Button
              href="/InputPinAmbil"
              style={{
                backgroundColor: "#ffff",
                height: "400px",
                width: "400px",
                boxShadow: "10px 10px 10px #000000cc",
                borderRadius: "50px 50px 50px 50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                flexDirection: "column",
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
              <h2 style={{ color: "black" }}>AMBIL</h2>
            </Button>
            <Button
              href="/PelangganKirimScaninput"
              style={{
                backgroundColor: "#ffff",
                height: "400px",
                width: "400px",
                boxShadow: "10px 10px 10px  #000000cc",
                borderRadius: "50px 50px 50px 50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                flexDirection: "column",
              }}
            >
              <Image
                src={kirim}
                style={{
                  width: "300px",
                  height: "300px",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              />
              <h2 style={{ color: "black" }}>KIRIM</h2>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReworkLandingPage;
