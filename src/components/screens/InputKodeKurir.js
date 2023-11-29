import React, { useState, useRef } from "react";
import { Navbar, Container, Row, Button, Col, Form } from "react-bootstrap";
import "../screens/style.css";
// import PinField from "../comp/PinFields.js";
import PinField from "react-pin-field";
import { FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import Keyboard from "react-simple-keyboard";

const InputKodeKurir = () => {
  const url =
    (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
    "/process/courier-check-package";
  const [input, setInput] = useState("");
  console.log(input);

  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  function kirim() {
    // preventDefault();
    // console.log(input);
    axios
      .post(url, {
        package_id: input,
      })
      .then((res) => {
        console.log(res.data.response.code);
        Cookies.set("pengirim", res.data.data.store_user_name);
        Cookies.set("nomerpengirim", res.data.data.store_user_phone_number);
        Cookies.set("penerima", res.data.data.recipient_name);
        Cookies.set("nomerpenerima", res.data.data.recipient_user_phone_number);
        Cookies.set("alamattujuan", res.data.data.end_address);
        Cookies.set("idpaket", res.data.data.id);
        Cookies.set("overduetime", res.data.data.overude_time);
        Cookies.set("weight", res.data.data.weight);
        Cookies.set("storetime", res.data.data.store_time);
        Cookies.set("takeuserid", res.data.data.take_user_id);
        Cookies.set("storeuserid", res.data.data.store_user_id);
        Cookies.set("kuririd", res.data.data.courier_id);
        Cookies.set("alamatawal", res.data.data.start_address);
        Cookies.set("validatecode", res.data.data.validate_code);
        Cookies.set("customerstorenumber", res.data.data.customer_store_number);
        Cookies.set("logisticsid", res.data.data.logistics_id);
        Cookies.set("packagenumber", res.data.data.package_number);
        Cookies.set("logisticsid", res.data.data.logistics_id);

        if (
          res.data.response.code == 200 &&
          res.data.data.end_address == "Si Box Stasiun Kemayoran"
        ) {
          window.location.href = "/DetailPengirimanKurir";
          // console.log(res.data.data);
        } else {
          Swal.fire({
            text: res.data.response.message,
            icon: "error",
          });
        }
      });
  }

  return (
    <div className="">
      <NavbarMenu2 />

      <div>
        <h3
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          SCAN BARCODE ATAU INPUT KODE PEMESANAN
        </h3>

        <Container
          style={{
            textAlign: "center",
            marginTop: "5rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Row style={{ marginLeft: "5rem" }}>
            <Col>
              <form>
                <input
                  autoFocus
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  style={{
                    width: "50rem",
                    height: "6rem",
                    borderRadius: "50px",
                    textAlign: "center",
                    fontSize: "30px",
                    backgroundColor: "#CED4D3CC",
                  }}
                  placeholder="Masukan kode Pemesanan"
                />
              </form>
            </Col>
            <Col>
              <button
                onClick={kirim}
                style={{
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50px",
                  // fontSize: "20px",
                  backgroundColor: "#CD2028",
                  borderColor: "#CD2028",
                  marginTop: "10px",
                }}
              >
                <FaArrowRight
                  style={{
                    margin: "auto",
                    height: "2rem",
                    width: "3rem",
                    color: "white",
                  }}
                />
              </button>
            </Col>
          </Row>
        </Container>
        <div
          style={{
            display: "flex",
            // backgroundColor: "rgba(0, 0, 0, 0.1)",
            justifyContent: "center",
            width: "1000px",
            // height: "1000px",
            margin: "0 auto",
            borderRadius: "100px",
            marginTop: "5rem",
          }}
        >
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)}
            layoutName={layout}
            onChange={onChange}
            onKeyPress={onKeyPress}
            theme={"hg-theme-default myTheme1"}
          />
        </div>
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
            <Link to="/DashboardKurir">
              <ButtonBack />
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
            {/* <Link onClick={submit}>
              <ButtonLanjut />
            </Link> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InputKodeKurir;
