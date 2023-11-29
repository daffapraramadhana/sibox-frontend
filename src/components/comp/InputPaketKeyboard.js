import React, { Component } from "react";
import { Button, Form, FormCheck } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";
import Cookies from "js-cookie";
import Select from "react-select";
import Swal from "sweetalert2";

class InputPaketkeyboard extends Component {
  state = {
    layoutName: "ip",
    inputName: "inputValuePaket",
    input: {},
    submittedData: "",
    keyboardOpen: "",
    status: 0,
    selecetedOptions: [],
    kategori: "",
  };

  getOptions = () => {
    const options = [
      { value: "paket", label: "Paket" },
      { value: "lain2", label: "lain-lain" },
    ];

    this.setState({ selectOptions: options });
  };

  handleChange(e) {
    console.log(e.value);
    Cookies.set("packagecategory", e.value);
  }

  componentDidMount() {
    this.getOptions();
  }

  changeStatus = () => {
    if (this.state.status == 0) {
      this.setState({ status: 1 });
    } else {
      this.setState({ status: 0 });
    }
  };
  //   radioHandler = () => {
  //     this.setState({ status });
  //   };

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

  //   asuransi = (status) => {
  //     status == 1;
  //   };

  render() {
    // const { status } = this.state;
    let { input, keyboardOpen } = this.state;
    Cookies.set("packagevalue", input.inputValuePackage);
    Cookies.set("packagecontent", input.inputDetailPaket);

    // const kategori = [
    //   { value: "paket", label: "Paket" },
    //   { value: "lain-lain", label: "Lain-lain" },
    // ];

    // console.log(kategori.value);

    // const [showResults, setShowResults] = useState(false);
    // const onClick = () => (status = 1);

    return (
      <div>
        <Form style={{ fontSize: "25px" }}>
          <Form.Group controlId="formName">
            <Form.Label>Detail Paket :</Form.Label>
            <Form.Control
              onFocus={() => {
                this.setActiveInput("inputDetailPaket");
                this.setState({ layoutName: "key" });
              }}
              value={input["inputDetailPaket"] || ""}
              onChange={(e) => this.onChangeInput(e)}
              type="text"
              placeholder="Masukan Detail Isi Paket Anda "
              style={{ fontSize: "30px" }}
            />
          </Form.Group>

          <Form.Group controlId="formName" style={{ marginTop: "20px" }}>
            <Form.Label>Kategori Paket :</Form.Label>
            <Select
              label="Single select"
              options={this.state.selectOptions}
              onChange={this.handleChange.bind(this)}

              // styles={colourStyles}
            />
          </Form.Group>

          <Button
            // showResults="false"
            onClick={this.changeStatus}
            style={{
              width: "300px",
              height: "5rem",
              marginTop: "20px",
              fontSize: "25px",
              backgroundColor: "#AF2322",
              borderColor: "#AF2322",
              borderRadius: "50px",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              display: "flex",
              padding: "auto",
            }}
          >
            {this.state.status == 0 && (
              <p style={{ marginTop: "1rem" }}>Asuransikan Paket</p>
            )}
            {this.state.status == 1 && (
              <p style={{ marginTop: "1rem" }}>Batalkan</p>
            )}
          </Button>
          {this.state.status == 1 && (
            <div style={{ marginTop: "20px" }}>
              Masukan Estimasi Value Paket Anda :
              <Form.Control
                onFocus={() => {
                  this.setActiveInput("inputValuePackage");
                  this.setState({ layoutName: "ip" });
                }}
                value={input["inputValuePackage"] || ""}
                onChange={(e) => this.onChangeInput(e)}
                type="text"
                placeholder="Estimasi Value Paket "
                style={{ fontSize: "30px" }}
              />
            </div>
          )}
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
                ip: ["1 2 3", "4 5 6", "7 8 9", "{clear} 0 {bksp}", " {close}"],
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
              ]}
            />
            {/* <button className="submitBtn" onClick={this.submit}>
                Submit
              </button>
              <button className="closeBtn" onClick={this.closeKeyboard}>
                Close Keyboard
              </button> */}
          </div>

          {/* <div
            style={{
              display: "flex",
              flexDirection: "column",
              left: "0",
              marginTop: "3rem",
            }}
          >
            <Form.Label>Asuransi Paket :</Form.Label>
            <FormCheck
              type="radio"
              label="Iya"
              checked={status === 1}
              onClick={(e) => this.radioHandler(1)}
            />
            {status === 1 && (
              <div>
                Masukan Estimasi Value Paket Anda :
                <Form.Control
                  onFocus={() => {
                    this.setActiveInput("inputValuePackage");
                    this.setState({ layoutName: "ip" });
                  }}
                  value={input["inputValuePackage"] || ""}
                  onChange={(e) => this.onChangeInput(e)}
                  type="text"
                  placeholder="Estimasi Value Paket "
                  style={{ fontSize: "30px" }}
                />
              </div>
            )}
            <FormCheck
              type="radio"
              label="Tidak"
              checked={status === 2}
              onClick={(e) => this.radioHandler(2)}
            />

            {status === 2 && <div></div>}
          </div> */}
        </Form>
      </div>
    );
  }
}

export default InputPaketkeyboard;
