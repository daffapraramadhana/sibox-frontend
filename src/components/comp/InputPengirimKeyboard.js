import Cookies from "js-cookie";
import React, { Component, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";
import axios from "axios";
import InputPhoneNumber from "../comp/InputPhoneNumber";

class InputPengirimKeyboard extends Component {
  constructor() {
    super();
    this.state = {
      layoutName: "key",
      inputName: "inputPengirim",
      input: {
        inputPengirim:
          (typeof Cookies.get("pengirim") === "undefined"
            ? ""
            : Cookies.get("pengirim")) || "",
        inputNoPengirim:
          (typeof Cookies.get("notelppengirim") === "undefined"
            ? ""
            : Cookies.get("notelppengirim")) || "",
      },
      submittedData: "",
      keyboardOpen: "",
      maxLength: "14",
      lockername: "",
      phone: "",
      isvalid: false,
      message: "",
    };
    this.onChangeNomer = this.onChangeNomer.bind(this);
  }

  onChangeAll = (inputObj) => {
    this.setState({
      input: inputObj,
    });

    console.log("Input changed", inputObj);
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();

    if (button === "{clear}") this.clearScreen();

    if (button === "{close}") this.closeKeyboard();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "key" ? "shift" : "key",
    });
  };

  onChangeInput = (event) => {
    let inputVal = event.target.value;

    let updatedInputObj = {
      ...this.state.input,
      [this.state.inputName]: inputVal,
    };

    this.setState(
      {
        input: updatedInputObj,
      },
      () => {
        this.keyboard.setInput(inputVal);
      }
    );
    const isPhoneValid = this.phoneValidation();
    this.setState(
      {
        isvalid: isPhoneValid,
        message: isPhoneValid
          ? "Phone Number is Valid!"
          : "Phone Number not valid!",
      }

      //   () => this.props.onPhoneSubmit(this.state)
    );
    // console.log("ini event", event);
  };

  onChangeInputNomer = (event) => {
    let inputVal = event.target.value;

    let updatedInputObj = {
      ...this.state.input,
      [this.state.inputName]: inputVal,
    };

    this.setState(
      {
        input: updatedInputObj,
      },
      () => {
        this.keyboard.setInput(inputVal);
      }
    );
    // console.log("ini event", event);
    // this.onChangeNomer();
  };

  setActiveInput = (inputName) => {
    this.setState(
      {
        inputName: inputName,
        keyboardOpen: true,
      },
      () => {
        console.log("Active input", inputName);
      }
    );
  };

  closeKeyboard = () => {
    this.setState({
      keyboardOpen: false,
    });
  };

  // submit = () => {
  //   this.setState({
  //     submittedData: JSON.stringify(this.state.input),
  //   });
  //   console.log(this.state.input);
  // };

  clearScreen = () => {
    let input = { ...this.state.input };
    let inputName = this.state.inputName;
    input[inputName] = "";

    this.setState({ input }, () => {
      this.keyboard.clearInput(inputName);
      console.log(
        "cleared",
        input,
        this.keyboard.options.inputName,
        this.keyboard.input,
        this.keyboard.getInput()
      );
    });
  };

  phoneValidation() {
    const regex = /^^(\+62|62|0)8[1-9][0-9]{6,9}$/i;
    return !(!this.state.phone || regex.test(this.state.phone) === false);
  }

  onChangeNomer(e) {
    this.setState({
      phone: e.target.value,
    });
    const isPhoneValid = this.phoneValidation();
    this.setState(
      {
        isvalid: isPhoneValid,
        message: isPhoneValid
          ? "Phone Number is Valid!"
          : "Phone Number not valid!",
      }

      //   () => this.props.onPhoneSubmit(this.state)
    );
    console.log(e.target.value);
    Cookies.set("tes", e.target.value);
  }

  componentDidMount() {
    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/locker-identity",
      data: {},
    }).then((res) => {
      console.log(res.data.data);
      // setLockercode(res.data.data.locker_code);
      // setLockername(res.data.data.name);
      this.setState({
        lockername: res.data.data.name,
      });
    });
  }

  render() {
    let { input, keyboardOpen } = this.state;

    // if (sdfghjkhgfd == "undefined") {
    //   input.inputPengirim = Cookies.get("pengirim").toString();
    //   var sdfghjkhgfd = "wkowkowkowk";
    // } else {
    //   var sdfghjkhgfd = "wkowkowkowk";
    // }

    // aman
    Cookies.set("pengirim", input.inputPengirim);
    Cookies.set("notelppengirim", input.inputNoPengirim);

    console.log(Cookies.get("pengirim"));

    const messageTemplate = this.state.message ? (
      <div
        className={"alert alert-" + (this.state.isvalid ? "success" : "danger")}
        role="alert"
      >
        {this.state.message}
      </div>
    ) : (
      ""
    );

    return (
      <div>
        <Form style={{ fontSize: "25px" }}>
          <Form.Group controlId="formPengirim">
            <Form.Label>Pengirim :</Form.Label>
            <Form.Control
              onFocus={() => {
                this.setActiveInput("inputPengirim");
                this.setState({ layoutName: "key" });
              }}
              value={input["inputPengirim"] || ""}
              onChange={(e) => this.onChangeInput(e)}
              type="text"
              placeholder="Masukan Nama Pengirim "
              style={{ fontSize: "30px" }}
            />
          </Form.Group>

          <Form.Group
            controlId="form.TelpPengirim"
            style={{
              marginTop: "1.5rem",
            }}
          >
            <Form.Label>No Telp Pengirim :</Form.Label>
            {/* <div className="child-component">
              <div className="form-group mb-3">
                <input
                  placeholder="Masukan Nomer Telepon "
                  type="phone"
                  name="phone"
                  onFocus={() => {
                    this.setActiveInput("inputNoPengirim");
                    this.setState({ layoutName: "ip" });
                  }}
                  value={input["inputNoPengirim"] || ""}
                  // onChange={this.onChangeNomer}
                  className="form-control"
                  style={{ height: "4rem", fontSize: "25px" }}
                />
              </div>

              <br />
              {messageTemplate}
            </div> */}

            <Form.Control
              onFocus={() => {
                this.setActiveInput("inputNoPengirim");
                this.setState({ layoutName: "ip" });
              }}
              value={input["inputNoPengirim"] || ""}
              onChange={(e) => this.onChangeInput(e)}
              type="text"
              placeholder="Masukan No Telpon Pengirim "
              style={{ fontSize: "30px" }}
              maxLength={14}
              minLength={12}
            />
            {/* <InputPhoneNumber /> */}
          </Form.Group>
          <div className={`keyboardContainer ${!keyboardOpen ? "hidden" : ""}`}>
            <Keyboard
              keyboardRef={(r) => (this.keyboard = r)}
              inputName={this.state.inputName}
              layoutName={this.state.layoutName}
              onChangeAll={(inputObj) => this.onChangeAll(inputObj)}
              onKeyPress={(button) => this.onKeyPress(button)}
              theme={"hg-theme-default myTheme1"}
              layout={{
                ip: ["1 2 3", "4 5 6", "7 8 9", "{clear} 0 {bksp}", "{close}"],
                key: [
                  "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                  "q w e r t y u i o p [ ] \\ {clear}",
                  "{lock} a s d f g h j k l ; '",
                  "{shift} z x c v b n m , . / {shift}",
                  "{space} {close}",
                ],
                shift: [
                  "~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}",
                  "Q W E R T Y U I O P { } | {clear}",
                  '{lock} A S D F G H J K L : "',
                  "{shift} Z X C V B N M &lt; &gt; ? {shift}",
                  "{space} {close}",
                  // "{close}",
                ],
              }}
              display={{
                "{clear}": "hapus",
                "{bksp}": "&#129044",
                "{close}": "tutup",
                "{lock}": "CapsLock",
                "{shift}": "shift",
                "{space}": "   spasi   ",
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
            />
          </div>
          {/* <Form.Group
            controlId="formAlamat"
            style={{
              marginTop: "1.5rem",
            }}
          >
            <Form.Label>Alamat :</Form.Label>
            <Form.Control
              type="text"
              value={this.state.lockername}
              disabled
              style={{ fontSize: "30px" }}
            />
          </Form.Group> */}
        </Form>
      </div>
    );
  }
}

export default InputPengirimKeyboard;
