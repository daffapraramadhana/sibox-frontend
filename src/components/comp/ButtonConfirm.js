import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

function ButtonConfirm() {
  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        style={{
          width: "20rem",
          height: "5rem",
          // marginLeft: "30rem",
          // // marginRight: "-50rem",
          borderRadius: "50px",
          backgroundColor: "#2db83d",
          borderColor: "#2db83d",
          marginRight: "-10rem",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "black",
            margin: "auto",
            textAlign: "center",
            // marginTop: "1rem",
          }}
        >
          <h3 style={{ margin: "auto" }}>Saya Sudah Bayar </h3>
          {/* <FaArrowRight
            style={{ margin: "auto", height: "2rem", width: "3rem" }}
          /> */}
        </div>
      </Button>
    </div>
  );
}

export default ButtonConfirm;
