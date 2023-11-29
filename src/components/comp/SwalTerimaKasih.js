import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function SwalTerimaKasih() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "TerimaKasih",
    showConfirmButton: false,
    timer: 1500,
    // confirmButtonText: "close",
  }).then(function () {
    window.location.href = "/";
  });
  // function () {
  //   window.location.href = "../screens/TestLandingPage.js";
  // };
}

export default SwalTerimaKasih;
