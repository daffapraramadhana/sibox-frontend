import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";
import Cookies from "js-cookie";

class InputPenerimaKeyboard extends Component {
  state = {
    layoutName: "key",
    inputName: "inputPenerima",
    input: {
      inputPenerima:
        (typeof Cookies.get("penerima") === "undefined"
          ? ""
          : Cookies.get("penerima")) || "",
      inputNomorPenerima:
        (typeof Cookies.get("nomorPenerima") === "undefined"
          ? ""
          : Cookies.get("nomorPenerima")) || "",
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
    Cookies.set("penerima", input.inputPenerima);
    Cookies.set("nomorPenerima", input.inputNomorPenerima);

    return (
      <div>
        <Form style={{ fontSize: "25px" }}>
          <Form.Group controlId="formPenerima">
            <Form.Label>Penerima :</Form.Label>
            <Form.Control
              onFocus={() => {
                this.setActiveInput("inputPenerima");
                this.setState({ layoutName: "key" });
              }}
              value={input["inputPenerima"] || ""}
              onChange={(e) => this.onChangeInput(e)}
              type="text"
              placeholder="Masukan Nama Penerima "
              style={{ fontSize: "30px" }}
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group
            controlId="form.NomorPenerima"
            style={{
              marginTop: "1.5rem",
            }}
          >
            <Form.Label>Nomor Penerima :</Form.Label>
            <Form.Control
              onFocus={() => {
                this.setActiveInput("inputNomorPenerima");
                this.setState({ layoutName: "ip" });
              }}
              value={input["inputNomorPenerima"] || ""}
              onChange={(e) => this.onChangeInput(e)}
              type="text"
              placeholder="Masukan No Telpon Penerima "
              style={{ fontSize: "30px" }}
              autoComplete="off"
            />
            <Form.Text className="text-muted">
              Pastikan Nomor Yang Anda Masukan Benar, Kode Pengambilan Akan
              dikirim Ke Nomor diatas
            </Form.Text>
          </Form.Group>

          <div
            className={`keyboardContainerPenerima ${
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
                  "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                  "q w e r t y u i o p [ ] \\ {clear}",
                  "{lock} a s d f g h j k l ; '",
                  "{shift} z x c v b n m , . / {shift}",
                  "{space} {close}",
                ],
                shift: [
                  "~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}",
                  "{clear} Q W E R T Y U I O P { } |",
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
        </Form>
      </div>
    );
  }
}

export default InputPenerimaKeyboard;
