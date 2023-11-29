import React from "react";
import { Button } from "react-bootstrap";
import { ImEnter } from "react-icons/im";

function ButtonBukaLokerKembali() {
  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        style={{
          width: "20rem",
          height: "5rem",
          borderRadius: "50px",
          backgroundColor: "#ffff",
          borderColor: "#CD2028",
          color: "#CD2028",

          //   marginLeft: "-10rem",
        }}
      >
        Buka Loker Kembali
        <ImEnter
          style={{
            marginLeft: "3rem",
          }}
        />
      </Button>
    </div>
  );
}

export default ButtonBukaLokerKembali;
