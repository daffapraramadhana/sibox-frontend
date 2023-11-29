import React from "react";
import { Button } from "react-bootstrap";

function ButtonBelumPesan() {
  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        style={{
          width: "30rem",
          height: "5rem",
          borderRadius: "50px",
          backgroundColor: "#CD2028",
          borderColor: "#CD2028",
          fontSize: "25px",
          marginRight: "-5rem",
        }}
      >
        Belum Melakukan Pemesanan
      </Button>
    </div>
  );
}

export default ButtonBelumPesan;
