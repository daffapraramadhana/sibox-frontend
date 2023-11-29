import React, { useState, useRef } from "react";
import {
  Navbar,
  Container,
  Row,
  Button,
  Col,
  FormControl,
} from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const LoginKurir = () => {
  const url =
    (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
    "/process/courier-login";
  // const [data, setData] = useState({
  //   username: "",
  //   password: "",
  // });

  // function handle(e) {
  //   const newdata = { ...data };
  //   newdata[e.target.id] = e.target.value;
  //   setData(newdata);
  //   console.log(newdata);
  // }

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState("default");
  const keyboard = useRef();

  const onChangeAll = (inputs) => {
    /**
     * Here we spread the inputs into a new object
     * If we modify the same object, react will not trigger a re-render
     */
    setInputs({ ...inputs });
    console.log("Inputs changed", inputs);
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const inputVal = event.target.value;

    setInputs({
      ...inputs,
      [inputName]: inputVal,
    });

    keyboard.current.setInput(inputVal);
  };

  const getInputValue = (inputName) => {
    return inputs[inputName] || "";
  };

  function kirim() {
    // preventDefault();
    console.log(inputs);
    axios
      .post(url, {
        username: inputs.username,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res.data.response.code);
        if (res.data.response.code == 200) {
          // simpen Cookies
          window.location.href = "/DashboardKurir";
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
          LOGIN KURIR
        </h3>
        <Container
          style={{
            marginTop: "5rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
          }}
        >
          <Row style={{ marginLeft: "5rem" }}>
            <Col>
              <input
                autoFocus
                id="username"
                value={getInputValue("username")}
                onFocus={() => setInputName("username")}
                placeholder={"username"}
                onChange={onChangeInput}
                style={{
                  width: "30rem",
                  height: "5rem",
                  borderRadius: "50px",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              />
            </Col>
            <Col>
              <input
                id="password"
                type="password"
                value={getInputValue("password")}
                onFocus={() => setInputName("password")}
                placeholder={"password"}
                onChange={onChangeInput}
                style={{
                  width: "30rem",
                  height: "5rem",
                  borderRadius: "50px",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              />
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
            inputName={inputName}
            layoutName={layoutName}
            onChangeAll={onChangeAll}
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
            <Link to="/">
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
            {/* <Link to="/DashboardKurir">
              <ButtonLanjut />
            </Link> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginKurir;
