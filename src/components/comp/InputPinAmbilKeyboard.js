import Cookies from "js-cookie";
import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";
import PinField from "react-pin-field";
import axios from "axios";
import InputPhoneNumber from "../comp/InputPhoneNumber";

class InputPinAmbilKeyboard extends Component {
  constructor() {
    super();
    this.state = {
      layoutName: "key",
      inputName: "inputPinAmbil",
      input: " ",
      submittedData: "",
      keyboardOpen: "",
    };
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
  }

  render() {
    let { input, keyboardOpen } = this.state;

    return (
      <div>
        <Form style={{ fontSize: "25px" }}>
          <Form.Group controlId="formPinAmbil">
            <PinField
              onFocus={() => {
                this.setActiveInput("inputPinAmbil");
                this.setState({ layoutName: "key" });
              }}
              value={input["inputPinAmbil"] || ""}
              onChange={(e) => this.onChangeInput(e)}
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

            {/* <Form.Control
              onFocus={() => {
                this.setActiveInput("inputPinAmbil");
                this.setState({ layoutName: "key" });
              }}
              value={input["inputPinAmbil"] || ""}
              onChange={(e) => this.onChangeInput(e)}
              type="text"
              placeholder="Masukan Kode Pemesanan "
              style={{
                width: "50rem",
                height: "6rem",
                borderRadius: "50px",
                marginTop: "3rem",
                textAlign: "center",
                fontSize: "30px",
                backgroundColor: "#CED4D3CC",
                marginBottom: "50px",
              }}
            /> */}
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
                ip: [
                  "1 2 3",
                  "4 5 6",
                  "7 8 9",
                  ". 0 {bksp}",
                  "{clear} {close}",
                ],
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
            />
          </div>
        </Form>
      </div>
    );
  }
}

export default InputPinAmbilKeyboard;
