import React, { useState } from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import axios from "axios";
import Cookies from "js-cookie";

const DetailPengirimanKurir = () => {
  Cookies.get("pengirim");
  Cookies.get("nomerpengirim");
  Cookies.get("penerima");
  Cookies.get("nomerpenerima");
  Cookies.get("alamattujuan");
  return (
    <div className="">
      <NavbarMenu2 />
      <div>
        <h3
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          Detail Pengiriman
        </h3>
        <Container
          style={{
            marginTop: "5rem",
          }}
        >
          <form
            style={{
              fontSize: "30px",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "20rem",
            }}
          >
            <div>
              <div class="form-group row">
                <label for="Pengirim" class="col-sm-4 col-form-label">
                  Pengirim
                </label>
                <label for="Pengirim" class="col-sm-1 col-form-label">
                  :
                </label>
                <div class="col-sm-6">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="Pengirim"
                    value={Cookies.get("pengirim")}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="NoPengirim" class="col-sm-4 col-form-label">
                  Nomer Pengirim
                </label>
                <label for="Pengirim" class="col-sm-1 col-form-label">
                  :
                </label>
                <div class="col-sm-6">
                  <input
                    type="tel"
                    readonly
                    class="form-control-plaintext"
                    id="NoPengirim"
                    value={Cookies.get("nomerpengirim")}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="Penerima" class="col-sm-4 col-form-label">
                  Penerima
                </label>
                <label for="Pengirim" class="col-sm-1 col-form-label">
                  :
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="Penerima"
                    value={Cookies.get("penerima")}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="NoPenerima" class="col-sm-4 col-form-label">
                  Nomer Penerima
                </label>
                <label for="Pengirim" class="col-sm-1 col-form-label">
                  :
                </label>
                <div class="col-sm-5">
                  <input
                    type="tel"
                    readonly
                    class="form-control-plaintext"
                    id="NoPengirim"
                    value={Cookies.get("nomerpenerima")}
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="Penerima" class="col-sm-4 col-form-label">
                  Alamat Tujuan
                </label>
                <label for="Pengirim" class="col-sm-1 col-form-label">
                  :
                </label>
                <div class="col-sm-7">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="AlamatTujuan"
                    value={Cookies.get("alamattujuan")}
                  />
                </div>
              </div>
            </div>
          </form>
        </Container>
      </div>
      <Container
        fluid
        style={{
          position: "absolute",
          bottom: "0",
          marginBottom: "3rem",
          flex: "1",
        }}
      >
        <Row
          style={{
            flex: "1",
          }}
        >
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* <Link to="/MasukanDimensi">
              <Button
                variant="primary"
                size="lg"
                style={{
                  width: "5rem",
                  borderRadius: "50px",
                  backgroundColor: "#CD2028",
                  borderColor: "#CD2028",
                  marginLeft: "-10rem",
                }}
              >
                <FaArrowLeft
                  style={{
                    marginBottom: "5px",
                  }}
                />
              </Button>
            </Link> */}
          </Col>

          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Container
              style={{
                backgroundColor: "none",
                height: "3rem",
              }}
            ></Container>
          </Col>
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Link to="/MasukanDimensiKurir">
              <ButtonLanjut />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPengirimanKurir;
