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
import axios from "axios";

class InputPaketkeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutName: "ip",
      inputName: "inputValuePaket",
      input: {
        inputDetailPaket:
          (Cookies.get("packagecontent") == "undefined"
            ? ""
            : Cookies.get("packagecontent")) || "",

        inputValuePackage:
          (Cookies.get("packagevalue") == "undefined" || 0
            ? ""
            : Cookies.get("packagevalue")) || 0,
      },
      submittedData: "",
      keyboardOpen: "",
      status: 0,
      statusasuransi: false,
      selectOptions: [],
      kategori: "",
      asuransi: "",
      selectOptionsJenis: [],
      selectOptionsAsuransi: [],
      labelasuransi: "",
      default: {
        kategoriPaket: {
          label: "Pilih Kategori Paket Anda",
          value: "",
        },
        tipePengiriman: {
          label: "Pilih Tipe Pengiriman Anda",
          value: "",
        },
        labelasuransi: {
          label: "Tidak",
          value: "Tidak",
        },
      },
    };
  }

  getOptionsJenis = () => {
    console.log("jalan");
    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/cek-tarif",
      data: {
        city_destination: Cookies.get("kabupaten"),
        province_destination: Cookies.get("provinsi"),
        weight: Cookies.get("beratpaket"),
      },
    }).then((res) => {
      console.log("data", res.data.data);
      Cookies.set("destinationcode", res.data.data.destination_code);
      const options = res.data.data.tarif.map((jenis) => ({
        value: jenis.delivery_type,
        label: `${jenis.delivery_type} - etd:${jenis.etd} - Rp.${jenis.tarif} `,
        tarif: jenis.tarif,
      }));

      this.setState({ selectOptionsJenis: options });
    });
    // this.setState({ selectOptions: options });
  };

  getOptions = () => {
    const options = [
      { value: "paket", label: "Paket" },
      { value: "lain2", label: "lain-lain" },
    ];

    this.setState({ selectOptions: options });
  };

  getOptionsAsuransi = () => {
    const options = [
      { value: "Iya", label: "Iya" },
      { value: "Tidak", label: "Tidak" },
    ];

    this.setState({ selectOptionsAsuransi: options });
  };

  handleChange(a) {
    console.log(a.value);
    Cookies.set("packagecategory", a.value);
    Cookies.set("packagecategorylabel", a.label);
  }

  handleChangeJenis(b) {
    console.log(b.value);
    Cookies.set("deliverytype", b.value);
    Cookies.set("tarif", b.tarif);
  }

  handleChangeAsuransi(c) {
    console.log("value", c.value);
    this.setState({ labelasuransi: c.value });
    Cookies.set("labelasuransi", c.value);
    Cookies.set("valueasuransi", c.label);
    // console.log(this.state.labelasuransi);
    // Cookies.set("packagecategory", c.value);
  }

  componentDidMount() {
    this.getOptions();
    this.getOptionsJenis();
    this.getOptionsAsuransi();
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

  //   asuransi = (status) => {
  //     status == 1;
  //   };

  cekasuransi = () => {
    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/cek-asuransi",
      data: {
        parcel_value: Cookies.get("packagevalue"),
      },
    }).then((res) => {
      console.log(res.data.data);
      this.setState({ asuransi: res.data.data.insurance_value });
      Cookies.set("asuransi", res.data.data.insurance_value);
    });
    this.setState({ statusasuransi: true });
  };

  render() {
    // const { status } = this.state;
    let { input, keyboardOpen } = this.state;
    Cookies.set("packagevalue", input.inputValuePackage);
    Cookies.set("packagecontent", input.inputDetailPaket);
    if (this.state.labelasuransi == "Tidak") {
      Cookies.set("asuransi", "0");
      Cookies.set("packagevalue", "0");
    }
    if (
      typeof Cookies.get("packagecategory") !== "undefined" ||
      typeof Cookies.get("deliverytype") !== "undefined"
    ) {
      // this.state.default.kategoriPaket.value = Cookies.get("packagecategory");
      // this.state.default.kategoriPaket.label = Cookies.get(
      //   "packagecategorylabel"
      // );
      // this.state.default.labelasuransi.label = Cookies.get("labelasuransi");
      // this.state.default.labelasuransi.value = Cookies.get("valueasuransi");
      // this.state.default.tipePengiriman.label = Cookies.get("deliverytype");
      // this.state.default.tipePengiriman.value = Cookies.get("tarif");
      this.setState({
        default: {
          kategoriPaket: {
            value: Cookies.get("packagecategory"),
            label: Cookies.get("packagecategorylabel"),
          },
          labelasuransi: {
            label: Cookies.get("labelasuransi"),
            value: Cookies.get("valueasuransi"),
          },
          tipePengiriman: {
            label: Cookies.get("deliverytype"),
            value: Cookies.get("tarif"),
          },
        },
      });
    }
    // const kategori = [
    //   { value: "paket", label: "Paket" },
    //   { value: "lain-lain", label: "Lain-lain" },
    // ];

    // console.log(kategori.value);

    // const [showResults, setShowResults] = useState(false);
    // const onClick = () => (status = 1);
    console.log("ini paket", this.state.default.kategoriPaket);

    return (
      <div style={{ zIndex: "5" }}>
        <Form style={{ fontSize: "25px", textAlign: "left" }}>
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
          <div
            className={`keyboardContainerAsuransi ${
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

          <Form.Group controlId="formName" style={{ marginTop: "20px" }}>
            <Form.Label>Kategori Paket :</Form.Label>
            <Select
              label="Single select"
              options={this.state.selectOptions}
              onChange={this.handleChange.bind(this)}
              defaultValue={{
                label: this.state.default.kategoriPaket.label,
                value: this.state.default.kategoriPaket.value,
              }}
              // styles={colourStyles}
            />
          </Form.Group>
          <Form.Group controlId="formName" style={{ marginTop: "20px" }}>
            <Form.Label>Tipe Pengiriman :</Form.Label>
            <Select
              label="Single select"
              options={this.state.selectOptionsJenis}
              onChange={this.handleChangeJenis.bind(this)}
              defaultValue={{
                label: this.state.default.tipePengiriman.label,
                value: this.state.default.tipePengiriman.value,
              }}
              // styles={colourStyles}
            />
          </Form.Group>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  left: "0",
                  //   backgroundColor: "yellow",
                  textAlign: "left",
                  marginTop: "20px",
                  zIndex: "5",
                }}
              >
                Asuransikan Paket Anda :
              </p>

              <Select
                label="Single select"
                options={this.state.selectOptionsAsuransi}
                onChange={this.handleChangeAsuransi.bind(this)}
                defaultValue={{
                  label: this.state.default.labelasuransi.label,
                  value: this.state.default.labelasuransi.value,
                }}
                // styles={colourStyles}
              />

              {/* <Button
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
                  <p style={{ marginTop: "1rem" }}>Ya</p>
                )}
                {this.state.status == 1 && (
                  <p style={{ marginTop: "1rem" }}>Tidak</p>
                )}
              </Button> */}
            </div>
            <div style={{ zindex: "5" }}>
              {this.state.default.labelasuransi.value == "Iya" && (
                <div style={{ marginTop: "50px", width: "50rem" }}>
                  Masukan Estimasi Value Paket Anda :
                  <div style={{ display: "flex", flexDirection: "row" }}>
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
                    <Button onClick={this.cekasuransi}>Cek Asuransi </Button>
                  </div>
                  {this.state.statusasuransi == true && (
                    <p>Biaya Asuransi : {this.state.asuransi} </p>
                  )}
                </div>
              )}
            </div>
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
