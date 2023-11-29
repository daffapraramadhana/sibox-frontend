import React, { useEffect, useState } from "react";
import Clock from "../comp/Clock";
import { Navbar, Container, Col, Row, Image } from "react-bootstrap";
import { BsBuilding } from "react-icons/bs";
import sicepatbg from "../image/sicepatbg.jpg";
import axios from "axios";

function NavbarMenu2() {
  const [lockercode, setLockercode] = useState("");
  const [lockername, setLockername] = useState("");

  // useEffect(() => {
  //   axios({
  //     method: "POST",
  //     url:
  //       (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
  //       "/process/locker-identity",
  //     data: {},
  //   }).then((res) => {
  //     console.log(res.data.data);
  //     setLockercode(res.data.data.locker_code);
  //     setLockername(res.data.data.name);
  //   });
  // }, []);
  return (
    <div>
      <Navbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          backgroundImage: `url(${sicepatbg})`,
          backgroundSize: "auto",
        }}
      >
        <Navbar.Text
          style={{
            color: "white",
            fontSize: "50px",
            fontWeight: "bold",
            marginLeft: "30px",
          }}
        >
          Sibox
        </Navbar.Text>

        {/* <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            textAlign: "center",
            color: "black",
            height: "50px",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            fontSize: "18px",
            padding: "10px 10px",
            fontWeight: "bold",
          }}
        >
          <BsBuilding style={{ marginRight: "20px" }} />
          {lockercode} | {lockername}
        </div> */}
        <Navbar.Text
          style={{
            color: "white",
            fontSize: "20px",
            padding: "0",
            marginRight: "30px",
          }}
        >
          <Clock />
        </Navbar.Text>
        {/* <Container></Container> */}
      </Navbar>
    </div>
  );
}

export default NavbarMenu2;
