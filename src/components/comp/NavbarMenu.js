import React from "react";
import { Navbar, Container } from "react-bootstrap";
import Clock from "./Clock";

function NavbarMenu() {
  return (
    <div>
      <Navbar class="navbar navbar-light">
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Navbar.Brand className="logo">
            <h1 className="text">Sibox</h1>
          </Navbar.Brand>
          <div style={{ marginRight: "-10rem" }}>
            <Container
              style={{
                width: "15rem",
                backgroundColor: "rgb(0, 0, 0, 0.7)",
                borderRadius: "20px",
                textAlign: "center",
                // marginLeft: "20px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "20px",
                  textAlign: "center",
                }}
              >
                <Clock />
              </div>
            </Container>
            <Container
              style={{
                width: "15rem",
                backgroundColor: "white",
                borderRadius: "20px",
                textAlign: "center",
                // marginLeft: "20px",
                color: "black",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
              }}
            >
              Sibox - Suppermall Karawaci
            </Container>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
