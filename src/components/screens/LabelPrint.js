import React, { useEffect, useState } from "react";
import { Navbar, Container, Row, Button, Col, Image } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import printlabel from "../image/printlabel.svg";
import box from "../image/box.svg";
import { ImEnter } from "react-icons/im";
import checkbox from "../image/checkbox.svg";
import ModalTerimaKasih from "../comp/ModalTerimaKasih";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import ButtonBukaLokerKembali from "../comp/ButtonBukaLokerKembali";
import ButtonLanjutSwal from "../comp/ButtonLanjutSwal";
import Cookies from "js-cookie";
import disableBrowserBackButton from "disable-browser-back-navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

const LabelPrint = () => {
  // if (Cookies.get("kirim") == undefined || "") {
  //   // console.log("detectvookie");
  //   window.location.href = "/";
  // }
  console.log("cookienya ", Cookies.get("kirim"));

  disableRightClick();

  return (
    <div className="">
      <NavbarMenu2 />

      <div>
        <Container style={{ marginTop: "5rem" }}>
          <Row>
            <Col>
              <Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  1
                </h3>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={printlabel}
                    style={{
                      width: "200px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "3rem",
                  }}
                >
                  Label Telah diprint Silahkan Tempel Pada Paket
                  <FontAwesomeIcon
                    style={{ width: "100px", height: "100px", color: "black" }}
                    icon="coffee"
                    spin
                  />
                </h3>
              </Container>
            </Col>
            <Col>
              <Container>
                {" "}
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  2
                </h3>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={box}
                    style={{
                      width: "120px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2.85rem",
                  }}
                >
                  Loker Nomer 3 Telah Terbuka Silahkan Masukan paket dan
                  Pastikan Label Telah Tertempel
                </h3>
              </Container>
            </Col>
            <Col>
              {" "}
              <Container>
                {" "}
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  3
                </h3>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={checkbox}
                    style={{
                      width: "200px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "3rem",
                  }}
                >
                  Silahkan Tutup Loker
                </h3>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        style={{
          width: "100vw",
          position: "absolute",
          bottom: "0",
          // marginBottom: "3rem",
          flex: "1",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "50px",
          // backgroundColor: "yellow",
          // marginLeft: "1rem",
        }}
      >
        <div>
          <ButtonBukaLokerKembali />
        </div>

        <div>
          <ButtonLanjutSwal />
        </div>
      </div>
    </div>
  );
};

export default LabelPrint;
