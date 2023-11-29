import React, { useState, useRef } from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import ButtonDimensi from "../comp/ButtonDimensi";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import InputBeratPaket from "../comp/InputBeratPaket";

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function back() {
  window.location.href = "/MasukanDetailPenerima";
}

function lanjut() {
  if (
    typeof Cookies.get("dimensi") === "undefined" ||
    Cookies.get("dimensi") === ""
    // typeof Cookies.get("beratpaket") === "undefined" ||
    // Cookies.get("beratpaket") === ""
  ) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Silahkan Mengisi Data Terlebih Dahulu",
      showConfirmButton: false,
      // timer: 1500,
      // confirmButtonText: "close",
    });
  } else {
    window.location.href = "/DetailPengiriman";
    // console.log(Cookies.get("penerima"));
  }
}

const MasukanDimensi = () => {
  disableRightClick();
  return (
    <div className="">
      <NavbarMenu2 />

      <Container fluid>
        <h3
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
            // marginRight: "3rem",
          }}
        >
          Pilih Ukuran Dimensi Paket
        </h3>
        <div
          fluid
          style={{
            // margin: "auto",
            width: "100%",
            marginTop: "3rem",
            textAlign: "center",
            // backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonDimensi />
        </div>
      </Container>
      <div
        // class="form-group row"
        style={{
          // backgroundColor: "yellow",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          marginTop: "3rem",
          fontSize: "25px",
        }}
      >
        <Container
          style={{
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* <InputBeratPaket /> */}
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
        <div onClick={back}>
          <ButtonBack />
        </div>

        <div onClick={lanjut}>
          <ButtonLanjut />
        </div>
      </div>
    </div>
  );
};

export default MasukanDimensi;
