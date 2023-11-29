import React, { useEffect, useState } from "react";
import { Image, Button, Col, Row, Navbar, Container } from "react-bootstrap";
import ambil from "../image/ambil.svg";
import kirim from "../image/kirim.svg";
import sicepatbg from "../image/sicepatbg.jpg";
import iterabg from "../image/education.jpg";
import { BsBoxSeam, BsBuilding } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import video from "../video/iteraVideo.mp4";
import NavbarMenuHome from "../comp/NavbarMenuHome";
import axios from "axios";
import Marquee from "react-fast-marquee";
import Clock from "../comp/Clock";
import Cookies from "js-cookie";
import disableBrowserBackButton from "disable-browser-back-navigation";

// componentDidMount() {
//      document.addEventListener("contextmenu", (e) => {
//       e.preventDefault();
//     });
//   }

function useDisablePinchZoomEffect() {
  document.addEventListener(
    "touchmove",
    function (e) {
      e.preventDefault();
    },
    { passive: false }
  );
}

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function ReworkLandingPage3() {
  const url =
    (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
    "/process/empty-box";
  const url2 = "";
  const [data, setData] = useState({});
  const [size, setSize] = useState([]);
  const [lockercode, setLockercode] = useState("");
  const [lockername, setLockername] = useState("");
  Cookies.remove("kirim");
  disableBrowserBackButton();
  disableRightClick();
  useDisablePinchZoomEffect();

  Cookies.remove("pengirim");
  Cookies.remove("notelppengirim");
  Cookies.remove("penerima");
  Cookies.remove("notelppenerima");
  Cookies.remove("alamatpenerima");
  Cookies.remove("provinsi");
  Cookies.remove("kabupaten");
  Cookies.remove("kecamatan");
  Cookies.remove("dimensi");
  Cookies.remove("packagecontent");
  Cookies.remove("beratpaket");
  Cookies.remove("packagevalue");
  Cookies.remove("kelurahan");
  Cookies.remove("zipcode");
  Cookies.remove("tarif");
  Cookies.remove("destinationcode");
  Cookies.remove("deliverytype");
  Cookies.remove("packagecategory");
  Cookies.remove("asuransi");
  Cookies.remove("kirim");
  Cookies.remove("ekspedisi");
  Cookies.remove("nomorPenerima");

  useEffect(() => {
    axios({
      method: "POST",
      url:
        (process.env.REACT_APP_LOCAL_URL || "http://localhost:3005") +
        "/process/empty-box",
      data: {},
    }).then((res) => {
      console.log(res.data.data);
      setSize(res.data.data);
    });
  }, []);

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

  function injectMachine() {
    axios({
      method: "GET",
      url: "http://localhost:3003" + "/process/inject-machine",
      data: {},
    }).then((res) => {
      console.log(res.data);
    });
  }

  // useEffect(() => {
  //   fetchData();
  // }, {});

  // useEffect(
  //   () => {
  //     console.log("inidata", data);
  //   },
  //   { data }
  // );

  // const fetchData = async () => {
  //   const res = await axios.post(url);
  //   // console.log(res);
  //   setData(res.data);
  //   // axios.post(url).then((res) => {
  //   //   console.log(res.data);
  //   //   setData(res.data);
  //   // });
  // };

  //   const fetchData = async () => {
  //     const res = await axios.post(url);
  //     // console.log(res);
  //     setData(res.data);
  //     // axios.post(url).then((res) => {
  //     //   console.log(res.data);
  //   setData(res.data);
  //   });

  // componentDidMount() {
  //    document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // }

  // componentDidMount(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  // });

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${sicepatbg})`,
          backgroundSize: "fit",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "90%",
              height: "100vh",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",

              //   backgroundVidep: `url(${video})`,
              //   backgroundSize: "auto",
              //   //   backgroundImage: `url(${sicepat})`,
              //   //   backgroundSize: "100% 100vh",
              // //   backgroundRepeat: "no-repeat",
            }}
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              style={{
                width: "69.3vw",
                height: "100%",
                // paddingTop: "100%",
                objectFit: "contain",
                bottom: "0",
                position: "relative",
                // margin: "0",
                // padding: "20px",
              }}
            />
            <div
              style={{
                position: "absolute",
                objectFit: "cover",
                top: "0",
                // left: "20",
                width: "69.3vw",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.4)",
              }}
            >
              <Navbar
                style={{
                  backgroundColor: "transparent",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Container>
                  <Navbar.Text
                    style={{
                      color: "white",
                      fontSize: "50px",
                      fontWeight: "bold",
                    }}
                  >
                    <div
                      onClick={injectMachine}
                      style={{ backgroundColor: "transparent" }}
                    >
                      Sibox
                    </div>
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
                    #SSK | Sibox - Suppermall Karawaci
                  </div> */}
                  <Navbar.Text
                    style={{ color: "white", fontSize: "20px", padding: "0" }}
                  >
                    <Clock />
                  </Navbar.Text>
                </Container>
              </Navbar>
              <div
                style={{
                  textAlign: "center",
                  marginTop: "3rem",
                  // color: "white",
                }}
              >
                {/* <h1 style={{ color: "white" }}>
                  Hallo !!! Kirim dan Ambil Paket Anda Disini
                </h1>
                <h2 style={{ color: "white" }}>
                  Selamat Datang di Sibox - Suppermall Karawaci
                </h2> */}

                <div
                  style={{
                    // backgroundColor: "white",
                    height: "50vh",
                    marginTop: "3rem",
                    // alignItems: "center",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      // backgroundColor: "#ffff",
                      height: "100%",
                      width: "20%",
                      justifyContent: "space-between",
                      display: "flex",
                      alignItems: "center",
                      float: "left",
                      marginLeft: "auto",
                      marginRight: "-3rem",
                      // border: "10px",
                      // borderColor: "#CD2028",
                      // boxShadow: "10px 10px 10px 5px #000000cc",
                      // borderRadius: "50px",
                      fontSize: "20px",
                      flexDirection: "column",
                    }}
                  >
                    {/* <Button
                      href="/Loginkurir"
                      style={{
                        backgroundColor: "white",
                        width: "90%",
                        height: "30%",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "50px 50px 0px 0px",
                        justifyContent: "space-evenly",
                        top: "0",
                        color: "black",
                        flexDirection: "column",
                        boxShadow: "5px 10px 10px 5px #000000cc",
                      }}
                    >
                      <FaUser style={{ height: "50px", width: "50px" }} />
                      <h4 s>Login kurir</h4>
                    </Button>
                    <div
                      style={{
                        backgroundColor: "white",
                        width: "90%",
                        height: "65%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "0px 0px 50px 50px",
                        boxShadow: "5px 10px 10px 5px #000000cc",
                      }}
                    >
                      <p>Loker Tersedia :</p>
                      <p style={{ fontSize: "25px" }}>
                        <BsBoxSeam /> S = {data.S}
                      </p>
                      <p style={{ fontSize: "30px" }}>
                        <BsBoxSeam /> M = {data.M}
                      </p>
                      <p style={{ fontSize: "40px" }}>
                        <BsBoxSeam /> L = {data.L}
                      </p>
                    </div> */}
                  </div>

                  <div
                    style={{
                      //   backgroundColor: "#CD2028aa",
                      height: "100%",
                      width: "60%",
                      justifyContent: "center",
                      display: "flex",
                      alignItems: "center",
                      float: "left",
                      marginLeft: "150px",
                      marginRight: "100px",
                      border: "10px",
                      borderColor: "#CD2028",
                      //   boxShadow: "10px 10px 10px 5px #000000cc",
                      borderRadius: "25px",
                      fontSize: "30px",
                    }}
                  >
                    {/* <video
                      width="100%"
                      height="100%"
                      controls
                      autoPlay
                      muted
                      loop
                      style={{
                        objectFit: "cover",
                        borderRadius: "25px",
                        pointerEvents: "none",
                      }}
                    >
                      <source src={video} type="video/mp4" />
                    </video> */}
                  </div>
                </div>

                <div
                  style={{
                    justifyContent: "space-between",
                    fontSize: "20px",
                    width: "65%",
                    flexDirection: "column",
                    bottom: "0",
                    position: "fixed",
                    marginBottom: "20px",
                  }}
                >
                  {/* <Row
                    // fluid
                    style={{
                      //   backgroundColor: "white",
                      display: "flex",
                    }}
                  >
                     <Button
                      href="/LoginKurir"
                      style={{
                        backgroundColor: "#ffff",
                        borderRadius: "20px",
                        marginRight: "20px",
                        textAlign: "center",
                        justifyContent: "space-evenly",
                        display: "flex",
                        alignItems: "center",
                        width: "15rem",
                        height: "5rem",
                        marginLeft: "5rem",
                        boxShadow: "10px 10px 10px  #000000cc",
                        color: "black",
                      }}
                    >
                      <FaUser style={{ height: "30px", width: "30px" }} />
                      <h3>Login kurir</h3>
                    </Button>
                    <Col></Col>
                    <Col></Col>
                    <Col
                      style={{
                        backgroundColor: "white",
                        borderRadius: "20px",
                        textAlign: "center",
                        marginLeft: "40px",
                        color: "black",
                      }}
                    >
                      #SSK | Sibox - Suppermall Karawaci
                    </Col>
                  </Row> */}

                  {/* <h1 style={{ color: "white" }}>
                    Hallo !!! Kirim dan Ambil Paket Anda Disini
                  </h1>
                  <h2 style={{ color: "white" }}>
                    Selamat Datang di Sibox - Suppermall Karawaci
                  </h2> */}
                </div>
                <div
                  style={{
                    display: "flex",
                    bottom: "0",
                    backgroundColor: "#AF2322AA",
                    position: "absolute",
                    width: "100%",
                    height: "3rem",
                  }}
                >
                  <Marquee
                    speed={100}
                    loop={0}
                    gradientColor="false"
                    style={{ color: "white", fontSize: "30px" }}
                  >
                    Institut Teknologi Sumatera&nbsp;&nbsp;
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              right: "0",
              float: "right",
              width: "40%",
              height: "100vh",
              //   backgroundColor: "rgba(0,0,0,0.1)",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            {/* <div
              style={{
                backgroundColor: "transparent",
                display: "flex",
                bottom: "0",
                height: "5rem",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "transparent",
                boxShadow: "0px -4px 20px rgba(50, 50, 50, 0.75)",
              }}
            >
              <div
                style={{ fontSize: "20px", color: "white", fontWeight: "bold" }}
              >
                <BsBuilding style={{ marginRight: "20px" }} />
                {lockercode} | {lockername}
              </div>
            </div> */}
            <div
              style={{
                right: "0",
                float: "right",
                width: "100%",
                height: "100vh",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <Button
                href="/InputPinAmbil"
                style={{
                  backgroundColor: "#ffff",
                  height: "250px",
                  width: "400px",
                  boxShadow: "10px 10px 10px #000000cc",
                  borderRadius: "30px 30px 30px 30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  //   margin: "auto",
                  flexDirection: "column",
                }}
              >
                <Image
                  src={ambil}
                  style={{
                    width: "200px",
                    height: "200px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
                <h2 style={{ color: "#CD2028cc" }}>AMBIL</h2>
              </Button>
              <Button
                href="/MasukanDetailPengiriman"
                style={{
                  backgroundColor: "#ffff",
                  height: "250px",
                  width: "400px",
                  boxShadow: "10px 10px 10px  #000000cc",
                  borderRadius: "30px 30px 30px 30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  //   margin: "auto",
                  flexDirection: "column",
                  //   marginBottom: "3rem",
                }}
              >
                <Image
                  src={kirim}
                  style={{
                    width: "300px",
                    height: "300px",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    // marginBottom: "-2rem",
                  }}
                />
                <h2 style={{ color: "#CD2028cc" }}>TITIP</h2>
              </Button>
              {/* <Button
                href="/LoginKurir"
                style={{
                  backgroundColor: "#ffff",
                  height: "100px",
                  width: "400px",
                  boxShadow: "10px 10px 10px  #000000cc",
                  borderRadius: "30px 30px 30px 30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  //   margin: "auto",
                  flexDirection: "column",
                  //   marginBottom: "3rem",
                  color: "#CD2028cc",
                }}
              >
                <FaUser
                  style={{
                    height: "40px",
                    width: "40px",
                    marginBottom: "5px",
                    marginTop: "5px",
                  }}
                />
                <h3>LOGIN KURIR</h3>
              </Button> */}

              {/* <div
              style={{
                backgroundColor: "transparent",
                height: "100px",
                width: "100%",
                // boxShadow: "10px 10px 10px  #000000cc",
                // borderRadius: "50px 50px 50px 50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                flexDirection: "column",
              }}
            >
              <p
                style={{
                  margin: "auto",
                  marginTop: "50px",
                  fontSize: "25px",
                  marginBottom: "-1rem",
                  color: "white",
                }}
              >
                Loker Tersedia :
              </p>
              <br />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "white",

                  //   marginBottom: "20px",
                }}
              >
                <p style={{ fontSize: "20px", marginLeft: "30px" }}>
                  <BsBoxSeam /> S = {data.S} | &nbsp;&nbsp;
                </p>
                <p style={{ fontSize: "25px" }}>
                  <BsBoxSeam /> M = {data.M} | &nbsp;&nbsp;
                </p>
                <p style={{ fontSize: "30px" }}>
                  <BsBoxSeam /> L = {data.L} | &nbsp;&nbsp;
                </p>
              </div>
            </div> */}
            </div>
            <div
              style={{
                backgroundColor: "transparent",
                display: "flex",
                bottom: "0",
                height: "8rem",
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                backgroundColor: "transparent",
                boxShadow: "0px -4px 20px rgba(50, 50, 50, 0.75)",
              }}
            >
              <div
                style={{ fontSize: "20px", color: "white", fontWeight: "bold" }}
              >
                Loker Tersedia :
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <p style={{ fontSize: "20px", marginLeft: "30px" }}>
                  <BsBoxSeam /> S = {size[0]} | &nbsp;&nbsp;
                </p>
                <p style={{ fontSize: "25px" }}>
                  <BsBoxSeam /> M = {size[1]} | &nbsp;&nbsp;
                </p>
                <p style={{ fontSize: "30px" }}>
                  <BsBoxSeam /> L = {size[2]} | &nbsp;&nbsp;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReworkLandingPage3;
