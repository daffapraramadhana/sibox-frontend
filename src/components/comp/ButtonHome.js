import React from "react";
import { Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";

function ButtonHome() {
  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        style={{
          width: "7rem",
          height: "5rem",
          borderRadius: "50px",
          backgroundColor: "#CD2028",
          borderColor: "#CD2028",
          // marginLeft: "-10rem",
        }}
      >
        <FaHome
          style={{
            width: "3rem",
            height: "2rem",
            marginBottom: "5px",
          }}
        />
      </Button>
    </div>
  );
}

export default ButtonHome;
