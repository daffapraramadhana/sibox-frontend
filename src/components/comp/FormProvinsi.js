import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";
import Select from "react-select";
import provinsi from "../Json/Provinsi.json";
import kabupaten from "../Json/KabupatenTest.json";
import kecamatan from "../Json/Kecamatan.json";
import "../screens/style.css";
import Cookies from "js-cookie";
import axios from "axios";

export default class FormProvinsi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
      selectedOptionProvinsi: "",
      clearable: true,
      Provinsies: [],
      // a: "0",
    };

    this.state.kabupaten = {
      selectedOptionKabupaten: "",
      selectedOptionKabupatenSelect: "",
      clearable: true,
      Kabupatens: [],
    };

    this.state.kecamatan = {
      selectedOptionKecamatan: "",
      selectedOptionKecamatanSelect: "",
      clearable: true,
      Kecamatans: [],
    };

    this.state.kelurahan = {
      selectedOptionKelurahan: "",
      clearable: true,
      kelurahans: [],
    };

    this.state.listkabupaten = [];
    this.state.listkecamatan = [];
    this.state.listkelurahan = [];

    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
  }
  // provinsi().then((res) => {
  //   this.setState({
  //     provinsies: res.Provinsies.nama,
  //   });
  //   console.log("hello", this.state.provinsies);
  // });
  // this.state.Provinsies = provinsi.namaprovinsi;

  handleChange(selectedOption) {
    this.setState({ selectedOption: selectedOption });
    this.setState({ selectedOptionProvinsi: selectedOption.label });

    let optionsKabupaten = [];
    console.log(selectedOption.label);
    Cookies.set("provinsi", selectedOption.label);
    this.state.Kabupatens.forEach(function (value) {
      if (value.id.substring(0, 2) == selectedOption.value) {
        optionsKabupaten.push({ value: value.id, label: value.nama });
      }
    });

    // let optionsKecamatan = [];
    // this.state.kecamatans.forEach(function (value) {
    //   if (value.id.substring(0, 2) == selectedOption.value) {
    //     console.log("masuk");
    //     optionsKecamatan.push({ value: value.id, label: value.nama });
    //   }
    // });

    this.setState({ listkabupaten: optionsKabupaten });
  }

  handleChange2(selectedOptionKabupaten) {
    let optionsKecamatan = [];
    this.setState({
      selectedOptionKabupaten: selectedOptionKabupaten,
    });
    this.setState({
      selectedOptionKabupatenSelect: selectedOptionKabupaten.label,
    });
    console.log(selectedOptionKabupaten.label);
    Cookies.set("kabupaten", selectedOptionKabupaten.label);
    kecamatan.forEach(function (value) {
      if (value.id.substring(0, 4) == selectedOptionKabupaten.value) {
        optionsKecamatan.push({ value: value.id, label: value.nama });
      }
    });
    this.setState({ listkecamatan: optionsKecamatan });
  }

  // getProvinsi() {
  //   return {
  //     selectedOption: "s",
  //   };
  // }

  kelurahan = () => {
    console.log("tes");
    axios
      .post(
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
          "/process/list-kelurahan",
        {
          province: this.state.selectedOptionProvinsi,
          city: this.state.selectedOptionKabupatenSelect,
          district: this.state.selectedOptionKecamatanSelect,
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  handleChange3(selectedOptionKecamatan) {
    // let optionsKelurahan = [];

    // console.log(this.getState("selectedOption"));
    this.setState({
      selectedOptionKecamatan: selectedOptionKecamatan,
    });
    this.setState({
      selectedOptionKecamatanSelect: selectedOptionKecamatan.label,
    });
    console.log(selectedOptionKecamatan.label);
    Cookies.set("kecamatan", selectedOptionKecamatan.label);

    this.kelurahan();
  }

  handleChange4(selectedOptionKelurahan) {
    const url =
      (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
      "/process/list-kelurahan";
    // console.log(this.state.selectedOption);
    // console.log(this.state.selectedOption.label);

    // axios
    //   .post(url, {
    //     province: selectedOption.label,
    //     city: selectedOptionKabupaten.label,
    //     district: selectedOptionKecamatan.label,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    // this.setState({ listkelurahan: optionsKelurahan });
  }

  render() {
    // this.state.Provinsies = provinsi.namaprovinsi;
    this.setState({ Provinsies: provinsi.namaprovinsi });
    let options = this.state.Provinsies.map(function (provinsi) {
      return { value: provinsi.id, label: provinsi.nama };
    });
    console.log("provinsi", this.state.selectedOptionProvinsi);
    console.log("kabupaten", this.state.selectedOptionKabupatenSelect);
    console.log("kecamatan", this.state.selectedOptionKecamatanSelect);

    // this.state.Kabupatens = kabupaten;
    this.setState({ Kabupatens: kabupaten });
    // this.state.kecamatans = kecamatan;
    this.setState({ Kecamatans: kecamatan });
    // this.state.kelurahans = kelurahan;
    // console.log(selectedOption);
    // console.log(this.state.selectedOption);
    // let optionsKabupaten = [];
    // let optionsKabupaten = this.state.Kabupatens[selectedOption.value].map(
    //   function (Kabupaten) {
    //     kabupaten.map(function (kabupaten_1) {
    //       return { value: kabupaten_1.id, label: kabupaten_1.nama };
    //     });
    //   }
    // );

    // Cookies.set("provinsi", selectedOption.label);
    // Cookies.set("kabupaten", selectedOptionKabupaten.label);
    // Cookies.set("kecamatan", selectedOptionKecamatan.label);

    return (
      <div>
        <Row>
          <Col>
            <Form.Group
              controlId="formKota"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>Provinsi :</Form.Label>
              <Select
                className="selectprovinsi"
                value={this.state.selectedOption}
                onChange={this.handleChange}
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                options={options}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              controlId="formKota"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>Kabupaten :</Form.Label>
              <Select
                className="selectkabupaten"
                value={this.state.selectedOptionKabupaten}
                onChange={this.handleChange2}
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                options={this.state.listkabupaten}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group
              controlId="formKota"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>Kecamatan :</Form.Label>
              <Select
                className="selectkecamatan"
                value={this.state.selectedOptionKecamatan}
                onChange={this.handleChange3}
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                options={this.state.listkecamatan}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group
              controlId="formKota"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>kelurahan :</Form.Label>
              <Select
                className="selectkelurahan"
                value={this.state.selectedOptionKelurahan}
                onChange={this.handleChange4}
                clearable={this.state.clearable}
                searchable={this.state.searchable}
                options={this.state.listkelurahan}
              />
            </Form.Group>
          </Col>
        </Row>
      </div>
    );
  }
}
