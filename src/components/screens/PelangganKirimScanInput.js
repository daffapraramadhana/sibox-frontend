import React, { useState, useRef } from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarMenu2 from "../comp/NavbarMenu2";
import ButtonHome from "../comp/ButtonHome";
import ButtonBelumPesan from "../comp/ButtonBelumPesan";
import ButtonLanjut from "../comp/ButtonLanjut";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import Cookies from "js-cookie";
import InputKodePemesanan from "../comp/InputKodePemesanan";
import ButtonBukaLokerKembali from "../comp/ButtonBukaLokerKembali";
// import disableBrowserBackButton from "disable-browser-back-navigation";

function home() {
  window.location.href = "/";
}

function belumpesan() {
  window.location.href = "/MasukanDetailPengiriman";
}

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

const PelangganKirimScanInput = () => {
  Cookies.set("kirim", "kirim");
  disableRightClick();

  return (
    <div className="">
      <NavbarMenu2 />

      <div>
        <h3
          style={{
            textAlign: "center",
            marginTop: "3rem",
          }}
        >
          SCAN BARCODE ATAU INPUT KODE PEMESANAN
        </h3>

        {/* <div className="pin">
          <PinField
            className="field-a"
            onChange={setCode}
            validate={/^[0-9]$/}
            onComplete={() => setCompleted(true)}
            style={{
              backgroundColor: "#ebeffc",
              borderRadius: "15px",
              fontSize: "2rem",
              textAlign: "center",
              width: "4.5rem",
              margin: "0.25rem",
              height: "4rem",
              borderColor: "#ebeffc",
              outline: "none",
            }}
          />
        </div> */}
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <InputKodePemesanan />
          {/* <input
            autoFocus
            type="text"
            value={input}
            onChange={onChangeInput}
            style={{
              width: "50rem",
              height: "6rem",
              borderRadius: "50px",
              marginTop: "3rem",
              textAlign: "center",
              fontSize: "30px",
              backgroundColor: "#CED4D3CC",
            }}
            placeholder="Masukan kode Pemesanan"
          />

          <div
            style={{
              display: "flex",
              // backgroundColor: "rgba(0, 0, 0, 0.1)",
              justifyContent: "center",
              width: "1000px",
              // height: "1000px",
              margin: "0 auto",
              borderRadius: "100px",
              marginTop: "3rem",
            }}
          >
            <Keyboard
              keyboardRef={(r) => (keyboard.current = r)}
              layoutName={layout}
              onChange={onChange}
              onKeyPress={onKeyPress}
              theme={"hg-theme-default myTheme1"}
              layout={{
                default: [
                  "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                  "q w e r t y u i o p [ ] \\",
                  "{lock} a s d f g h j k l ; '",
                  "{shift} z x c v b n m , . / {shift}",
                  "{space}",
                ],
                shift: [
                  "~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}",
                  " Q W E R T Y U I O P { } |",
                  '{lock} A S D F G H J K L : "',
                  "{shift} Z X C V B N M &lt; &gt; ? {shift}",
                  "{space}",
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
          </div> */}
        </div>
      </div>

      <div
        style={{
          width: "100vw",
          position: "absolute",
          bottom: "0",
          // marginBottom: "3rem",
          flex: "1",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "50px",
          // backgroundColor: "yellow",
          // marginLeft: "1rem",
        }}
      >
        <div onClick={home}>
          <ButtonHome />
        </div>
        <div onClick={belumpesan}>
          <ButtonBelumPesan />
        </div>
        <div>
          <ButtonLanjut />
        </div>
      </div>
    </div>
  );
};

export default PelangganKirimScanInput;
