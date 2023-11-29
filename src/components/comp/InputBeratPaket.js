import Cookies from "js-cookie";
import React, { Component, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";
import Swal from "sweetalert2";

class InputBeratPaket extends Component {
  state = {
    layoutName: "key",
    inputName: "inputBeratPaket",
    input: {
      inputBeratPaket : (typeof Cookies.get("beratpaket") === "undefined" ? ""
      : Cookies.get("beratpaket")
      ) || "",
    },
    submittedData: "",
    keyboardOpen: "",
  };

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
      layoutName: layoutName === "default" ? "shift" : "default",
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

  submit = () => {
    this.setState({
      submittedData: JSON.stringify(this.state.input),
    });
    console.log(this.state.input);
  };

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

  render() {
    let { input, keyboardOpen } = this.state;
    Cookies.set("beratpaket", input.inputBeratPaket);
    console.log(Cookies.get("beratpaket"));

    function alert() {
      Swal.fire({
        position: "center",
        icon: "warning",
        title:
          "Paket Anda Akan Di Lakukan Pengecekan Berat Kembali Oleh Pihak Logistik",
        showConfirmButton: false,
        timer: 1500,
      });
    }

    return (
      <div style={{ display: "flex", flexDirection: "row", zIndex: "5" }}>
        <Form style={{ fontSize: "25px" }}>
          <Form.Group controlId="formName">
            <Form.Label>Berat Paket :</Form.Label>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Form.Control
                onFocus={() => {
                  this.setActiveInput("inputBeratPaket");
                  this.setState({ layoutName: "ip" });
                }}
                value={`${input["inputBeratPaket"] || ""} ${"kg"}`}
                onChange={(e) => this.onChangeInput(e)}
                type="text"
                placeholder="Estimasi Berat Paket "
                style={{ fontSize: "30px", textAlign: "center" }}
              />
              <div
                style={{
                  widht: "1px",
                  // backgroundColor: "yellow",
                  marginTop: "10px",
                }}
              >
                <p>Paket Akan dicek Kembali Oleh Kurir</p>
              </div>

              {/* <Button
                onClick={alert}
                style={{
                  marginLeft: "20px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#CD2028",
                  borderColor: "#CD2028",
                  fontSize: "25px",
                }}
              >
                i
              </Button> */}
            </div>
          </Form.Group>

          <div
            className={`keyboardContainerBeratPaket ${
              !keyboardOpen ? "hidden" : ""
            }`}
          >
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
                  "q w e r t y u i o p {bksp}",
                  "a s d f g h j k l",
                  "z x c v b n m",
                  "{clear} {close}",
                ],
              }}
              display={{
                "{clear}": "hapus",
                "{bksp}": "&#129044",
                "{close}": "tutup",
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

export default InputBeratPaket;
