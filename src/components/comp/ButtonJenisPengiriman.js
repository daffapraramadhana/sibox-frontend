import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Button = styled.button`
  bordercolor: black;
  color: #cd2028;
  font-size: 15px;
  padding: 10px 30px;
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
const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
// const lokers = [
//   {
//     deliverytype: "BEST",
//     description: "Besok Sampai Tujuan",
//     tarif: "50000",
//     etd: "1 hari",
//   },
//   {
//     deliverytype: "SIUNT",
//     description: "Si Untung",
//     tarif: "40000",
//     etd: "1-2 hari",
//   },
//   //   {
//   //     type: "L",
//   //     size: "Large",
//   //     ready: "2",
//   //     ukuran: "50x40x42 cm",
//   //     berat: "5kg",
//   //   },
// ];

function ButtonJenisPengiriman() {
  const [active, setActive] = useState();
  const [tarifs, setTarifs] = useState([]);
  //   Cookies.set("tipepengiriman", active);
  //   console.log(Cookies.get("tipepengiriman"));

  function clicked(event, a) {
    setActive(a.delivery_type);
    Cookies.set("deliverytype", a.delivery_type);
    Cookies.set("tarif", a.tarif);
    console.log("objek", a);
  }

  useEffect(() => {
    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/cek-tarif",
      data: {
        city_destination: Cookies.get("kabupaten"),
        province_destination: Cookies.get("provinsi"),
        weight: Cookies.get("beratpaket"),
      },
    }).then((res) => {
      console.log(res.data.data);
      Cookies.set("destinationcode", res.data.data.destination_code);
      setTarifs(res.data.data.tarif);
    });
  }, []);

  //   console.log(tarifs.delivery_type);

  return (
    <ButtonGroup>
      <h3>Pilih Jenis Pengiriman :</h3>
      {tarifs.map((tarif, index) => (
        <ButtonToggle
          key={tarif.delivery_type}
          active={active === tarif.delivery_type}
          //   onClick={() => setActive(tarif.delivery_type) && clicked(tarif)}
          onClick={(event) => clicked(event, tarif)}

          //   onClick={clicked(tarif)}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {tarif.delivery_type}
          </div>
          <br />
          {tarif.description}
          <br />
          <p style={{ fontSize: "15px" }}>{tarif.etd}</p>
          {/* <p style={{ fontSize: "20px" }}>{tarif.berat}</p> */}
          <br />
          <div
            style={{
              backgroundColor: "white",
              color: "red",
              width: "100px",
              height: "50px",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: "25px",
            }}
          >
            Rp. {tarif.tarif}
          </div>
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
export default ButtonJenisPengiriman;
