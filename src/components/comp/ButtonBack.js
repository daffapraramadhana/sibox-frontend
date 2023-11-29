import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

function ButtonBack() {
  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        style={{
          width: "6rem",
          height: "5rem",
          borderRadius: "50px",
          backgroundColor: "#CD2028",
          borderColor: "#CD2028",
          // marginLeft: "-10rem",
        }}
      >
        <FaArrowLeft
          style={{
            marginBottom: "5px",
            width: "3rem",
            height: "2rem",
          }}
        />
      </Button>
    </div>
  );
}

export default ButtonBack;
