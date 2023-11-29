import React from "react";
import { Button } from "react-bootstrap";
import SwalTerimaKasih from "../comp/SwalTerimaKasih";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function kirim() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "TerimaKasih",
    showConfirmButton: false,
    timer: 1500,
    // confirmButtonText: "close",
  })
    .then(function () {
      Cookies.remove("pengirim");
      Cookies.remove("notelppengirim");
      Cookies.remove("penerima");
      Cookies.remove("notelppenerima");
      Cookies.remove("alamatpenerima");
      Cookies.remove("provinsi");
      Cookies.remove("kabupaten");
      Cookies.remove("kecamatan");
      Cookies.remove("dimensi");
      Cookies.remove("packagecontent");
      Cookies.remove("beratpaket");
      Cookies.remove("packagevalue");
      Cookies.remove("kelurahan");
      Cookies.remove("zipcode");
      Cookies.remove("tarif");
      Cookies.remove("destinationcode");
      Cookies.remove("deliverytype");
      Cookies.remove("packagecategory");
      Cookies.remove("asuransi");
      Cookies.remove("kirim");
      Cookies.remove("qrimg");
      Cookies.remove("tid");
      Cookies.remove("mid");
      Cookies.remove("trxid");
      Cookies.remove("amount");
      Cookies.remove("token");
      Cookies.remove("packagecategory");
      Cookies.remove("packagecategorylabel");
      Cookies.remove("ekspedisi");
    })
    .then(function () {
      window.location.href = "/";
    });
}

function ButtonLanjutSwal() {
  return (
    <div>
      <Button
        onClick={kirim}
        variant="primary"
        size="lg"
        style={{
          width: "15rem",
          height: "5rem",
          // marginLeft: "30rem",
          // // marginRight: "-50rem",
          borderRadius: "50px",
          backgroundColor: "		#2db83d",
          borderColor: "		#2db83d",
          // marginRight: "-10rem",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "black",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: "auto" }}>Selesai</h3>
          <FaCheckCircle
            style={{ margin: "auto", height: "2rem", width: "3rem" }}
          />
        </div>
      </Button>
    </div>
  );
}

export default ButtonLanjutSwal;
