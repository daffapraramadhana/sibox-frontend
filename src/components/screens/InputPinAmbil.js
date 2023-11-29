import React, { useState, useRef } from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
// import PinField from "../comp/PinFields.js";
import PinField from "react-pin-field";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import ButtonHome from "../comp/ButtonHome";
import axios from "axios";
import Swal from "sweetalert2";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import InputPinAmbilKeyboard from "../comp/InputPinAmbilKeyboard";

function disableBackButton() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

const InputPinAmbil = () => {
  const url =
    (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
    "/process/get-package";
  const [code] = useState("");
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();
  const ref = useRef();
  const [completed, setCompleted] = useState(false);
  disableBackButton();
  // console.log(ref[0]);
  if (completed) {
    axios
      .post(url, {
        validate_code: input.toString().substring(0, 6).toUpperCase(),
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.code == 200) {
          axios({
            method: "POST",
            url: "http://127.0.0.1:5000" + "/unlock",
            data: {
              locker: "8",
            },
          })
            .then((res) => {
              console.log(res);
              window.location.href = "/LokerTerbukaAmbil";
            })
            .catch((error) => {
              console.error(error);
            });

          // window.location.href = "/LokerTerbukaAmbil";
        } else {
          Swal.fire({
            text: "Kode Yang Anda Masukan Salah",
            icon: "error",
            timer: 1000,
          });
          setInput("");
        }
      });
  }

  // function kirim() {
  //   console.log(code);
  //   // preventDefault();
  //   // console.log(input);
  //   // axios
  //   //   .post(url, {
  //   //     validate_code: code,
  //   //   })
  //   //   .then((res) => {
  //   //     console.log(res.data);
  //   //     if (res.data.response.code == 200) {
  //   //       window.location.href = "/LokerTerbukaKurir";
  //   //     } else {
  //   //       Swal.fire({
  //   //         text: "Kode Yang Anda Masukan Salah",
  //   //         icon: "error",
  //   //       });
  //   //     }
  //   //   });
  // }

  // var Exception = {};

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    setCompleted(false);
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    // if (button === "{bksp}")
    if (button === "{shift}" || button === "{lock}") handleShift();

    if (button !== "{shift}" && button !== "{lock}" && button !== "{bksp}")
      button = button.toUpperCase();
    if (ref.current[5].value && button === "{bksp}") {
      ref.current[5].value = "";
      return;
    }
    if (ref.current[4].value) {
      if (button !== "{bksp}") {
        ref.current[5].value = button;
        setCompleted(true);
      } else {
        ref.current[4].value = "";
      }
      return;
    }
    if (ref.current[3].value) {
      if (button !== "{bksp}") {
        ref.current[4].value = button;
      } else {
        ref.current[3].value = "";
      }
      return;
    }
    if (ref.current[2].value) {
      if (button !== "{bksp}") {
        ref.current[3].value = button;
      } else {
        ref.current[2].value = "";
      }
      return;
    }
    if (ref.current[1].value) {
      if (button !== "{bksp}") {
        ref.current[2].value = button;
      } else {
        ref.current[1].value = "";
      }
      return;
    }
    if (ref.current[0].value) {
      if (button !== "{bksp}") {
        ref.current[1].value = button;
      } else {
        ref.current[0].value = "";
      }
      return;
    }
    if (button === "{bksp}") return;

    ref.current[0].value = button;
    // setInput(button);
    // var inputed = false;
    // ref.current.forEach((input) => {
    //   if (input.value != "" || inputed) return;

    //   try {
    //     // return;
    //     input.value = button;
    //     inputed = false;
    //     return;
    //     throw Exception;
    //   } catch (e) {}
    // });
  };

  // const onKeyDown = ()

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

  console.log(code);
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

        {/* <InputPinAmbilKeyboard /> */}

        <div className="pin">
          <PinField
            autoFocus
            ref={ref}
            className="field-a"
            length={6}
            // value={input}
            // onChange={input}
            // onKeyDown={setInput}
            validate={/^[a-zA-Z0-9]$/}
            // onComplete={() => setCompleted(true)}
            // format={(k) => k.toUpperCase()}
            style={{
              backgroundColor: "#ebeffc",
              borderRadius: "50px",
              fontSize: "2rem",
              textAlign: "center",
              width: "6rem",
              margin: "0.25rem",
              height: "5rem",
              borderColor: "#ebeffc",
              outline: "none",
            }}
          />

          <div
            style={{
              display: "flex",
              // backgroundColor: "rgba(0, 0, 0, 0.1)",
              justifyContent: "center",
              width: "1000px",
              // height: "1000px",
              margin: "0 auto",
              borderRadius: "100px",
              marginTop: "3rem",
            }}
          >
            <Keyboard
              keyboardRef={(r) => (keyboard.current = r)}
              layout={{
                default: [
                  "1 2 3 4 5 6 7 8 9 0 {bksp}",
                  "q w e r t y u i o p",
                  "a s d f g h j k l",
                  "z x c v b n m",
                ],
              }}
              display={{
                "{clear}": "Clear",
                "{bksp}": "&#129044",
                "{close}": "tutup",
                "{lock}": "CapsLock",
                "{shift}": "shift",
                "{space}": "   space   ",
              }}
              buttonTheme={[
                {
                  class: "hg-red",
                  buttons: "{close}",
                },
                {
                  class: "hg-green",
                  buttons: "{clear}",
                },
              ]}
              layoutName={layout}
              onChange={onChange}
              onKeyPress={onKeyPress}
              theme={"hg-theme-default myTheme1"}
            />
          </div>
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
            <Link to="/">
              <ButtonHome />
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
            {/* <Link to="/LokerTerbukaAmbil">
              <ButtonLanjut />
            </Link> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InputPinAmbil;
