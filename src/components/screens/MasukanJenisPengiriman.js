import React, { useState, useRef, useEffect } from "react";
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
import ButtonJenisPengiriman from "../comp/ButtonJenisPengiriman";
import InputAsuransi from "../comp/InputAsuransi";
import axios from "axios";

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function back() {
  window.location.href = "/MasukanDimensi";
}

function lanjut() {
  if (
   (typeof Cookies.get("packagecategory") === "undefined" || Cookies.get("packagecategory") === "" )||
    (typeof Cookies.get("deliverytype") === "undefined" || Cookies.get("deliverytype") ===  "") ||
   (typeof Cookies.get("packagecontent") === "undefined" ||  Cookies.get("packagecontent") === "")
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

const MasukanJenisPengiriman = () => {
  
  disableRightClick();

  return (
    <div className="">
      <NavbarMenu2 />

      <Container>
        <h3
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
            // marginRight: "3rem",
          }}
        >
          Informasi Paket
        </h3>
        {/* <div
          style={{
            // margin: "auto",
            width: "100%",
            marginTop: "3rem",
            textAlign: "center",
            // backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {/* <ButtonJenisPengiriman /> */}
        {/* <div style={{ width: "50%" }}> */}
        <InputAsuransi />
        {/* </div>
        </div> */}
      </Container>

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
          zIndex: "1",
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

export default MasukanJenisPengiriman;
