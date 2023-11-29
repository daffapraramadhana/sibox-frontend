import React from "react";
import Clock from "./Clock";
import { Navbar, Container, Col, Row, Image } from "react-bootstrap";
import { BsBuilding } from "react-icons/bs";

function NavbarMenuHome() {
  return (
    <div>
      <Navbar
        style={{
          backgroundColor: "transparent",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Navbar.Text
            style={{ color: "white", fontSize: "50px", fontWeight: "bold" }}
          >
            Sibox
          </Navbar.Text>

          <div
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
            #SSK | Sibox - Suppermall Karawaci
          </div>
          <Navbar.Text
            style={{ color: "white", fontSize: "20px", padding: "0" }}
          >
            <Clock />
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMenuHome;
