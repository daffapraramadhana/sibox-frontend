import Cookies from "js-cookie";
import React from "react";

class InputPhoneNumber extends React.Component {
  constructor() {
    super();
    this.state = {
      phone: "",
      isvalid: false,
      message: "",
    };
    this.onChangeNomer = this.onChangeNomer.bind(this);
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

  phoneValidation() {
    const regex = /^^(\+62|62|0)8[1-9][0-9]{6,9}$/i;
    return !(!this.state.phone || regex.test(this.state.phone) === false);
  }

  onSubmit() {
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

    // Check if email is valid
    if (this.state.isvalid) {
      console.log(this.state);
    }
  }

  render() {
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
      <div className="child-component">
        <div className="form-group mb-3">
          {/* <label>
            <strong>Phone</strong>
          </label> */}
          <input
            placeholder="Masukan Nomer Telepon "
            type="phone"
            name="phone"
            value={this.state.phone}
            onChange={this.onChangeNomer}
            className="form-control"
            style={{ height: "4rem", fontSize: "25px" }}
          />
        </div>

        <br />
        {messageTemplate}
      </div>
    );
  }
}

export default InputPhoneNumber;
