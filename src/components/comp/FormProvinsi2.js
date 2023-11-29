import React, { Component } from "react";
import Select from "react-select";
import { Form, Row, Col } from "react-bootstrap";
import axios from "axios";
import Cookies from "js-cookie";

export default class FormProvinsi2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      selectOptionsKabupaten: [],
      selectOptionsKecamatan: [],
      selectOptionsKelurahan: [],
      provinsi: " ",
      kabupaten: " ",
      kecamatan: " ",
      kelurahan: " ",
      default: {
        pro: {
          label: "Masukkan Provinsi Tujuan",
          value: "",
        },
        kab: {
          label: "Masukkan Kabupaten Tujuan",
          value: "",
        },
        kec: {
          label: "Masukkan Kecamatan Tujuan",
          value: "",
        },
        kel: {
          label: "Masukkan Kelurahan Tujuan",
          value: "",
        },
      },
    };
  }

  getOptions() {
    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/list-provinsi",
      data: {},
    }).then((res) => {
      //   console.log("data", res.data.data);
      const options = res.data.data.map((prov) => ({
        value: prov,
        label: prov,
      }));

      this.setState({ selectOptions: options });
    });
  }

  handleChange(a) {
    console.log(a.value);
    this.setState({ provinsi: a.value });
    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/list-kabupaten",
      data: {
        province: a.value,
      },
    }).then((res) => {
      //   console.log("data", res.data.data);
      const options = res.data.data.map((kab) => ({
        value: kab,
        label: kab,
      }));

      this.setState({ selectOptionsKabupaten: options });
      Cookies.set("provinsi", this.state.provinsi);
    });
  }

  handleChangeKabupaten(b) {
    console.log(b.value);
    console.log("provinsi", this.state.provinsi);

    this.setState({ kabupaten: b.value });

    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/list-kecamatan",
      data: {
        province: this.state.provinsi,
        city: b.value,
      },
    }).then((res) => {
      console.log(res);
      //   console.log("data", res.data.data);
      const options = res.data.data.map((kec) => ({
        value: kec.district,
        label: kec.district,
      }));

      this.setState({ selectOptionsKecamatan: options });
      Cookies.set("kabupaten", this.state.kabupaten);
    });
  }

  handleChangeKecamatan(c) {
    console.log(c.value);
    console.log("kabupaten", this.state.kabupaten);
    this.setState({ kecamatan: c.value });

    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/list-kelurahan",
      data: {
        province: this.state.provinsi,
        city: this.state.kabupaten,
        district: c.value,
      },
    }).then((res) => {
      console.log(res.data.data);
      //   console.log(this.state.kabupaten);
      //   console.log("data", res.data.data);
      const options = res.data.data.map((kel) => ({
        value: kel.zipcode,
        label: kel.subdistrict,
      }));

      this.setState({ selectOptionsKelurahan: options });
      Cookies.set("kecamatan", this.state.kecamatan);
    });
  }

  handleChangeKelurahan(d) {
    // console.log(d.value);
    // console.log("kecamatan", d.value);
    Cookies.set("kelurahan", d.label);
    Cookies.set("zipcode", d.value);
    this.setState({ kelurahan: d.value });
    console.log("kelurahan", this.state.kelurahan);
  }

  componentDidMount() {
    this.getOptions();
    // this.getOptionsKabupaten();
  }

  render() {
    // console.log("ini option", this.state.selectOptions);
    if (
      typeof Cookies.get("provinsi") !== "undefined" &&
      typeof Cookies.get("kabupaten") !== "undefined" &&
      typeof Cookies.get("kecamatan") !== "undefined" &&
      typeof Cookies.get("kelurahan") !== "undefined"
    ) {
      // this.state.default.pro.label = Cookies.get("provinsi")
      // this.state.default.kab.label = Cookies.get("kabupaten")
      // this.state.default.kec.label = Cookies.get("kecamatan")
      // this.state.default.kel.label = Cookies.get("kelurahan")
      this.setState({
        default: {
          pro: { label: Cookies.get("provinsi") },
          kab: { label: Cookies.get("kabupaten") },
          kec: { label: Cookies.get("kecamatan") },
          kel: { label: Cookies.get("kelurahan") },
        },
      });
    }
    return (
      <div>
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
                  options={this.state.selectOptions}
                  onChange={this.handleChange.bind(this)}
                  defaultValue={{
                    value: this.state.default.pro.value,
                    label: this.state.default.pro.label,
                  }}
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
                  options={this.state.selectOptionsKabupaten}
                  onChange={this.handleChangeKabupaten.bind(this)}
                  defaultValue={{
                    value: this.state.default.kab.value,
                    label: this.state.default.kab.label,
                  }}
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
                  options={this.state.selectOptionsKecamatan}
                  onChange={this.handleChangeKecamatan.bind(this)}
                  defaultValue={{
                    value: this.state.default.kec.value,
                    label: this.state.default.kec.label,
                  }}
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
                  options={this.state.selectOptionsKelurahan}
                  onChange={this.handleChangeKelurahan.bind(this)}
                  defaultValue={{
                    value: this.state.default.kel.value,
                    label: this.state.default.kel.label,
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
