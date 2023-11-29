import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Button = styled.button`
  bordercolor: black;
  color: #cd2028;
  font-size: 20px;
  padding: 50px 100px;
  border-radius: 50px;
  margin: 10px 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  &:disabled {
    color: #cd2028;
    background-color: white;
    opacity: 1;
    cursor: default;
  }
  &:active {
    color: white;
    background-color: #cd2028;
  }
`;
const ButtonToggle = styled(Button)`
  opacity: 1;
  color: #cd2028;
  background-color: white;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: white;
    background-color: #CD2028;
  `}
`;

const Button2 = styled.button`
  bordercolor: black;
  color: grey;
  font-size: 20px;
  padding: 50px 100px;
  border-radius: 50px;
  margin: 10px 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  &:disabled {
    color: grey;
    background-color: white;
    opacity: 1;
    cursor: default;
  }
  &:active {
    color: white;
    background-color: white;
  }
`;
const ButtonToggle2 = styled(Button2)`
  opacity: 1;
  color: grey;
  background-color: white;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: white;
    background-color: grey;
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
`;

function ButtonDimensi() {
  const [active, setActive] = useState(Cookies.get("dimensi"));
  const [sizes, setSizes] = useState([]);
  const [lokers, setLokers] = useState([
    {
      type: "S",
      size: "Small",
      ready: 0,
      ukuran: "50x40x10 cm",
      berat: "1-3kg",
    },
    {
      type: "M",
      size: "Medium",
      ready: 0,
      ukuran: "50x40x20 cm",
      berat: "3-5kg",
    },
    {
      type: "L",
      size: "Large",
      ready: 0,
      ukuran: "50x40x42 cm",
      berat: "5kg",
    },
  ]);

  Cookies.set("dimensi", active);
  console.log("dimensi eee", Cookies.get("dimensi"));

  useEffect(() => {
    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/empty-box",
      data: {},
    }).then((res) => {
      console.log("data loker", res.data.data);
      setSizes(res.data.data);
      // setLokers[0](res.data.S);
      // setLokers[1](res.data.M);
      // setLokers[2](res.data.L);
    });
  }, []);

  // const lokers = [
  //   {
  //     type: "S",
  //     size: "Small",
  //     ready: 0,
  //     ukuran: "50x40x10 cm",
  //     berat: "1-3kg",
  //   },
  //   {
  //     type: "M",
  //     size: "Medium",
  //     ready: 0,
  //     ukuran: "50x40x20 cm",
  //     berat: "3-5kg",
  //   },
  //   {
  //     type: "L",
  //     size: "Large",
  //     ready: 0,
  //     ukuran: "50x40x42 cm",
  //     berat: "5kg",
  //   },
  // ];
  if (
    Cookies.get("dimensi") != undefined ||
    Cookies.get("dimensi") != "" ||
    Cookies.get("beratpaket") != undefined ||
    Cookies.get("dimensi") != ""
  ) {
  }

  return (
    <ButtonGroup>
      {sizes.map((size, index) => {
        if (size != 0) {
          return (
            <ButtonToggle
              key={lokers[index].type}
              active={active === lokers[index].type}
              onClick={() => setActive(lokers[index].type)}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {lokers[index].type}
              </div>
              <br />
              {lokers[index].size}
              <br />
              <p style={{ fontSize: "15px" }}>{lokers[index].ukuran}</p>
              <p style={{ fontSize: "20px" }}>{lokers[index].berat}</p>
              <br />
              <div
                style={{
                  backgroundColor: "white",
                  color: "red",
                  width: "70px",
                  height: "70px",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  borderRadius: "50%",
                }}
              >
                {size}
              </div>
            </ButtonToggle>
          );
        } else {
          return (
            <ButtonToggle2
              disabled
              // key={lokers[index].type}
              // active={active === lokers[index].type}
              // // onClick={() => setActive(lokers[index].type)}
            >
              <div
                style={{
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                {lokers[index].type}
              </div>
              <br />
              {lokers[index].size}
              <br />
              <p style={{ fontSize: "15px" }}>{lokers[index].ukuran}</p>
              <p style={{ fontSize: "20px" }}>{lokers[index].berat}</p>
              <br />
              <div
                style={{
                  backgroundColor: "white",
                  color: "grey",
                  width: "70px",
                  height: "70px",
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                  borderRadius: "50%",
                }}
              >
                {size}
              </div>
            </ButtonToggle2>
          );
        }
      })}
    </ButtonGroup>
  );
}
export default ButtonDimensi;
