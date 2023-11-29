import React, { Component, createRef } from "react";
import { Form } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";
import FormProvinsi from "./FormProvinsi";
import FormProvinsi2 from "./FormProvinsi2";
import Cookies from "js-cookie";
import Autocomplete from "react-google-autocomplete";
import Swal from "sweetalert2";

class InputPengirimKeyboard extends Component {

  addressInput = createRef();

  state = {
    layoutName: "key",
    inputName: "inputAlamatPenerima",
    input: {
      inputAlamatPenerima:
        (typeof Cookies.get("alamatpenerima") === "undefined"
          ? ""
          : Cookies.get("alamatpenerima")) || "",
    },
    submittedData: "",
    keyboardOpen: "",
  };

  focusInput = () => {
    this.addressInput.current.blur();
    this.addressInput.current.focus();
  };

  onChangeAll = (inputObj) => {
    this.setState({
      input: inputObj,
    });

    this.focusInput()
  };

  onKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") return this.handleShift();

    if (button === "{clear}") return this.clearScreen();

    if (button === "{close}") return this.closeKeyboard();

    this.focusInput()
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

    this.focusInput()
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

  inArray = (array, el) => {
    for (let i = 0; i < array.length; i++) if (array[i] === el) return true;
    return false;
  };

  render() {
    let { input, keyboardOpen, submittedData } = this.state;
    Cookies.set("alamatpenerima", input.inputAlamatPenerima);

    return (
      <div>
        <Form style={{ fontSize: "25px" }}>
          <Form.Group controlId="formAlamatPenerima">
            <Form.Label>
              Alamat Penerima :
            </Form.Label>
            <Autocomplete
              apiKey={process.env.REACT_APP_GOOGLE_API_KEY || "AIzaSyDxmLyj5mXULv8zZak5_aWy_ZqxigubKe0"}
              onPlaceSelected={(place) => {
                const mapped = place.address_components.map((item) => item.types[0])

                // if (!this.inArray(mapped, "administrative_area_level_7")) return Swal.fire({
                //   title: 'Alamat tidak mengandung nomor RT !',
                //   text: 'Silahkan masukkan alamat dengan lengkap dan memasukkan nomor RT',
                //   icon: 'error',
                //   confirmButtonText: 'OK'
                // })

                // if (!this.inArray(mapped, "administrative_area_level_6")) return Swal.fire({
                //   title: 'Alamat tidak mengandung nomor RW !',
                //   text: 'Silahkan masukkan alamat dengan lengkap dan memasukkan nomor RW',
                //   icon: 'error',
                //   confirmButtonText: 'OK'
                // })

                // if (!this.inArray(mapped, "postal_code")) return Swal.fire({
                //   title: 'Alamat tidak mengandung kode pos !',
                //   text: 'Silahkan masukkan alamat dengan lengkap dan memasukkan kode pos',
                //   icon: 'error',
                //   confirmButtonText: 'OK'
                // })

                this.keyboard.setInput(place.formatted_address.toString());
                this.setState({ input: { inputAlamatPenerima: place.formatted_address.toString()}})
              }}
              options={{
                types: ["geocode","establishment"],
                componentRestrictions: { country: "id" },
              }}
              language={"id"}
              onFocus={() => {
                this.setActiveInput("inputAlamatPenerima");
                this.setState({ layoutName: "key" });
              }}
              value={input["inputAlamatPenerima"]}
              onChange={(e) => this.onChangeInput(e)}
              as="textarea"
              rows="3"
              placeholder="Masukan Alamat Penerima "
              style={{ fontSize: "30px" }}
              className="form-control form-control-lg"
              ref={this.addressInput}
            />
            <div
              className={`keyboardContainerPenerimaLanjut ${
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
          </Form.Group>

          <FormProvinsi2 />
        </Form>
      </div>
    );
  }
}

export default InputPengirimKeyboard;
