import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const url =
  (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
  "/process/save-drop-package";

function kirim() {
  Cookies.get("pengirim");
  Cookies.get("nomerpengirim");
  Cookies.get("penerima");
  Cookies.get("nomerpenerima");
  Cookies.get("alamattujuan");
  Cookies.get("dimensi");
  Cookies.get("idpaket");
  Cookies.get("overduetime");
  Cookies.get("weight");
  Cookies.get("storetime");
  Cookies.get("takeuserid");
  Cookies.get("storeuserid");
  Cookies.get("kuririd");
  Cookies.get("alamatawal");
  Cookies.get("validatecode");
  axios
    .post(url, {
      id: Cookies.get("idpaket"),
      logistics_id: Cookies.get("logisticsid"),
      store_user_name: Cookies.get("pengirim"),
      store_user_phone_number: Cookies.get("nomerpengirim"),
      recipient_name: Cookies.get("penerima"),
      recipient_user_phone_number: Cookies.get("nomerpenerima"),
      end_address: Cookies.get("alamattujuan"),
      boxes_id: Cookies.get("dimensi"),
      lockers_id: "3961f75f-b98b-4bb6-8f9b-081dc8b0d91e",
      id: Cookies.get("idpaket"),
      overdue_time: Cookies.get("overduetime"),
      weight: Cookies.get("weight"),
      store_time: Cookies.get("storetime"),
      store_user_id: Cookies.get("storeuserid"),
      courier_id: Cookies.get("kuririd"),
      start_address: Cookies.get("alamatawal"),
      validate_code: Cookies.get("validatecode"),
      package_number: Cookies.get("packagenumber"),
      customer_store_number: Cookies.get("customerstorenumber"),
    })
    .then((res) => {
      console.log("iojs");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "TerimaKasih",
        showConfirmButton: false,
        timer: 1500,
        // confirmButtonText: "close",
      }).then(function () {
        Cookies.remove("pengirim");
        Cookies.remove("nomerpengirim");
        Cookies.remove("penerima");
        Cookies.remove("nomerpenerima");
        Cookies.remove("alamattujuan");
        Cookies.remove("dimensi");
        Cookies.remove("data");
        Cookies.remove("idpaket");
        Cookies.remove("overduetime");
        Cookies.remove("weight");
        Cookies.remove("storetime");
        Cookies.remove("takeuserid");
        Cookies.remove("storeuserid");
        Cookies.remove("kuririd");
        Cookies.remove("alamatawal");
        Cookies.remove("validatecode");
        Cookies.remove("packagenumber");
        Cookies.remove("customerstorenumber");
        Cookies.remove("logisticsid");
        Cookies.remove("ekspedisi");

        window.location.href = "/";
      });
    });
}

function ButtonLanjutSwalKurirDrop() {
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
          backgroundColor: "#CD2028",
          borderColor: "#CD2028",
          marginRight: "-10rem",
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
          <h3 style={{ margin: "auto" }}>Lanjut</h3>
          <FaArrowRight
            style={{ margin: "auto", height: "2rem", width: "3rem" }}
          />
        </div>
      </Button>
    </div>
  );
}

export default ButtonLanjutSwalKurirDrop;
