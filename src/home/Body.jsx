import React from "react";
import HomeStyle from "./Body.module.scss";
import NavStyle from "../components/Navbar.module.scss";
import Sofa1 from "../assets/Sofa-1.png";
import Sofa2 from "../assets/Sofa-2.png";
import Cards from "../components/Cards";
import Tabs from "../components/Tabs";
import Avatar from "../components/Avatar";
import ViewAll from "../assets/ViewAll.png";
import Vector from "../assets/Vector.png";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Chair5 from "../assets/Chair-5.png";
import Chair6 from "../assets/Chair-6.png";
import Sofa3 from "../assets/Sofa-3.png";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Card1 from "../assets/Card-1.png";
import Card2 from "../assets/Card-2.png";
import Card3 from "../assets/Card-3.png";
import Avatar1 from "../assets/Avatar-1.png";
import Avatar2 from "../assets/Avatar-2.png";
import Avatar3 from "../assets/Avatar-3.png";
import Union from "../assets/Union.png";

// import { Swiper, SwiperSlide } from "swiper/react";
// import SwiperCore from "swiper";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";

function Body() {
//   const Slides = [];

//   for (let i = 0; i < 5; i += 1) {
//     Slides.push(
//       <SwiperSlide key={`slide-${i}`}>
//         <Cards />
//       </SwiperSlide>
//     );
//   }

  return (
    <>
      <body className={HomeStyle.TopSection} style={{ position: "relative" }}>
        <nav className={NavStyle.Navbar}>
          <div
            className={NavStyle.NavbarContainer}
            style={{
              position: "absolute",
              top: "-0.0100rem",
              backgroundColor: "rgba(0,0,0,0.0)",
            }}>
            <h1
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                marginLeft: "5rem",
                marginTop: "3rem",
                fontSize: "2.5rem",
              }}>
              Panto
            </h1>
            <div
              className={NavStyle.TextContainer}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // textAlign: "center",
              }}>
              <ul
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  width: "47vw",
                  marginTop: "3.9rem",
                  marginLeft: "15.5rem",
                  position: "absolute",
                  top: "-0.0100rem",
                  fontFamily: "Gilroy-Light, sans-serif",
                }}>
                <a style={{ backgroundColor: "transparent" }}>Furniture</a>
                <KeyboardArrowDownIcon
                  sx={{ backgroundColor: "transparent", marginLeft: "-3.5rem" }}
                />
                <br />
                <a style={{ backgroundColor: "transparent" }}>Shop</a>
                <br />
                <a style={{ backgroundColor: "transparent" }}>About Us</a>
                <br />
                <a style={{ backgroundColor: "transparent" }}>Contact</a>
                <ShoppingBagIcon
                  sx={{
                    position: "absolute",
                    backgroundColor: "transparent",
                    color: "#fff",
                    fontSize: "2.5rem",
                    top: "-0.9rem",
                    left: "59.9rem",
                  }}
                />
                <a
                  style={{
                    backgroundColor: "#E58411",
                    position: "absolute",
                    top: "-0.8rem",
                    left: "61.2rem",
                    borderRadius: "15px",
                    width: "2%",
                    height: "115%",
                    fontSize: "1.5rem",
                  }}>
                  0
                </a>
              </ul>
            </div>
          </div>
        </nav>
        <img
          className={HomeStyle.TopBg}
          // styles={{ width: "vw", backgroundRepeat: "no-repeat" }}
          src={Sofa1}
          alt=''
        />
        <div className={HomeStyle.TextTop}>
          <div className={HomeStyle.TopText} style={{ marginLeft: "3rem" }}>
            <h1
              style={{
                fontSize: "5rem",
                width: "70vw",
                backgroundColor: "transparent",
              }}>
              Make Your Interior More
            </h1>
            <br />
            <h1
              style={{
                fontSize: "5rem",
                width: "65vw",
                marginLeft: "2rem",
                backgroundColor: "transparent",
              }}>
              Minimalistic & Modern
            </h1>
          </div>
          <div className={HomeStyle.SecondTopText}>
            <h3
              style={{
                fontSize: "2rem",
                width: "65vw",
                marginTop: "16rem",
                backgroundColor: "transparent",
                fontWeight: "light",
                fontFamily: "Gilroy-Light, sans-serif",
                textAlign: "center",
                color: "lightgrey",
              }}>
              Turn your room with panto into a lot more minimalist <br /> and
              modern with ease and speed
            </h3>
          </div>
          <Box
            component='form'
            sx={{
              "& > :not(style)": { m: 1, width: "25rem" },
              position: "absolute",
              top: "32.5rem",
              left: "35rem",
              backgroundColor: "transparent",
            }}
            noValidate
            autoComplete='off'>
            <TextField
              sx={{
                backgroundColor: "transparent",
                background: "#FFFFFF26",
                color: "#FFF",
                Border: "1rem solid #fff",
                borderRadius: "20px",
                fontFamily: "Gilroy-Light, sans-serif",
              }}
              color='primary'
              id='filled-search'
              variant='filled'
            />
            <Box sx={{ width: "50%" }}>
              <SearchIcon
                sx={{
                  position: "absolute",
                  fontSize: "2rem",
                  backgroundColor: "#E58411",
                  borderRadius: "2rem",
                  color: "#fff",
                  top: "1.2rem",
                  left: "22.5rem",
                }}
              />
            </Box>
          </Box>
        </div>
        {/* MIDDLE SECTION */}
        <div className={HomeStyle.MiddleSection}>
          <h1>Best Selling Product</h1>
          <Tabs />
          <h1></h1>
        </div>
        {/* <Swiper>{Slides}</Swiper> */}
        <Cards />
        <ArrowCircleLeftIcon
          sx={{
            backgroundColor: "transparent",
            // color: "white",
            filter: "invert(80%)",
            position: "absolute",
            top: "92rem",
            left: "7.5rem",
            fontSize: "3rem",
          }}
        />
        <ArrowCircleLeftIcon
          sx={{
            backgroundColor: "transparent",
            // color: "white",
            filter: "invert(80%)",
            position: "absolute",
            top: "92rem",
            left: "84.5rem",
            fontSize: "3rem",
            transform: "scaleX(-1)",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            margin: "10rem 0 3rem 0rem",
            width: "100%",
          }}>
          <img style={{ marginRight: "20px" }} src={ViewAll} alt='' />
          <img style={{ objectFit: "contain" }} src={Vector} alt='' />
        </Box>
        {/* THIRD SECTION */}
        <div className={HomeStyle.ThirdSection}>
          <img
            style={{
              objectFit: "contain",
              marginTop: "10rem",
              boxShadow: "3rem 3rem 4rem 1rem rgba(77, 63, 50, 0.507)",
            }}
            src={Sofa2}
            alt=''
          />
          <h3
            style={{
              position: "absolute",
              left: "48rem",
              top: "132rem",
              backgroundColor: "transparent",
              color: "#E58411",
              fontSize: "thin",
              fontWeight: "BoThin",
              fontFamily: "Gilroy-Bold, sans-serif",
              letterSpacing: "5px",
            }}>
            EXPERIENCES
          </h3>
          <h1
            style={{
              position: "absolute",
              left: "48rem",
              top: "136rem",
              backgroundColor: "transparent",
              color: "black",
              fontSize: "65px",
              fontWeight: "bold",
              fontFamily: "Gilroy-Bold, sans-serif",
              letterSpacing: "2px",
            }}>
            We Provide You The <br />
            Best Experience
          </h1>
          <p
            style={{
              position: "absolute",
              left: "48rem",
              top: "148rem",
              backgroundColor: "transparent",
              color: "black",
              fontSize: "17px",
              fontWeight: "thin",
              fontFamily: "Gilroy-light, sans-serif",
              letterSpacing: "3px",
              lineHeight: "2.5rem",
            }}>
            You don’t have to worry about the result because all of these
            <br />
            interiors are made by people who are professionals in their fields
            <br />
            with an elegant and lucurious style and with premium quality
            <br />
            materials
          </p>
          <p
            style={{
              backgroundColor: "transparent",
              color: "#E58411",
              position: "absolute",
              left: "48rem",
              top: "160rem",
              fontWeight: "thin",
              fontFamily: "Gilroy-light, sans-serif",
              fontSize: "14px",
            }}>
            More Info
          </p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "10rem 0 3rem 0rem",
              width: "10vw",
              position: "absolute",
              left: "48rem",
              top: "150rem",
              backgroundColor: "transparent",
            }}>
            <img
              style={{
                objectFit: "contain",
                backgroundColor: "transparent",
                width: "5rem",
                marginLeft: "10rem",
              }}
              src={Vector}
              alt=''
            />
          </Box>
          <h3
            style={{
              position: "absolute",
              left: "5rem",
              top: "185rem",
              backgroundColor: "transparent",
              color: "#E58411",
              fontSize: "20px",
              fontWeight: "Bold",
              fontFamily: "Gilroy-Bold, sans-serif",
              letterSpacing: "6px",
            }}>
            MATERIALS
          </h3>
          <h1
            style={{
              position: "absolute",
              left: "5rem",
              top: "189rem",
              backgroundColor: "transparent",
              color: "black",
              fontSize: "55px",
              fontWeight: "bold",
              fontFamily: "Gilroy-Bold, sans-serif",
              letterSpacing: "2px",
            }}>
            Very serious <br />
            Materials For Making
            <br />
            Furniture
          </h1>
          <p
            style={{
              position: "absolute",
              left: "5rem",
              top: "204rem",
              backgroundColor: "transparent",
              color: "black",
              fontSize: "15px",
              fontWeight: "thin",
              fontFamily: "Gilroy-light, sans-serif",
              letterSpacing: "3px",
              lineHeight: "2.5rem",
            }}>
            Because panto was very serious about designing furniture for our
            <br />
            environment, using a very expensive and famous capital but at a{" "}
            <br />
            relatively low price
          </p>
          <p
            style={{
              backgroundColor: "transparent",
              color: "#E58411",
              position: "absolute",
              left: "5rem",
              top: "213rem",
              fontWeight: "thin",
              fontFamily: "Gilroy-light, sans-serif",
              fontSize: "14px",
            }}>
            More Info
          </p>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              margin: "10rem 0 3rem 0rem",
              width: "10vw",
              position: "absolute",
              left: "3rem",
              top: "203.3rem",
              backgroundColor: "transparent",
            }}>
            <img
              style={{
                objectFit: "contain",
                backgroundColor: "transparent",
                width: "5rem",
                marginLeft: "10rem",
              }}
              src={Vector}
            />
          </Box>
          <Box sx={{ width: "50vw", height: "10vh" }}>
            <img
              src={Chair5}
              style={{
                position: "absolute",
                top: "180rem",
                left: "52.5rem",
                width: "16%",
                height: "8%",
                objectFit: "cover",
                backgroundColor: "transparent",
              }}
            />
            <img
              src={Chair6}
              style={{
                position: "absolute",
                top: "185.3rem",
                left: "70rem",
                width: "26%",
                height: "18%",
                objectFit: "cover",
                backgroundColor: "transparent",
              }}
            />
            <img
              src={Sofa3}
              style={{
                position: "absolute",
                top: "195rem",
                left: "52.5rem",
                width: "16%",
                height: "12%",
                objectFit: "cover",
                backgroundColor: "transparent",
              }}
            />
          </Box>
        </div>
        {/* LOWER SECTION */}
        <div
          className={HomeStyle.LowerSection}
          style={{
            marginTop: "10rem",
            position: "absolute",
            top: "230rem",
            left: "40.8rem",
          }}>
          <h1
            style={{
              backgroundColor: "transparent",
              color: "#E58411",
              fontSize: "15px",
              fontWeight: "Bold",
              fontFamily: "Gilroy-Bold, sans-serif",
              letterSpacing: "6px",
              textAlign: "center",
              marginBottom: "1.5rem",
            }}>
            TESTIMONIALS
          </h1>
          <h1 style={{ textAlign: "center" }}>Our Client Reviews</h1>
        </div>
        <div
          className={HomeStyle.clients}
          style={{ width: "90vw", position: "absolute" }}>
          <Avatar />
        </div>
        <ArrowCircleLeftIcon
          sx={{
            backgroundColor: "transparent",
            // color: "white",
            filter: "invert(80%)",
            position: "absolute",
            top: "261rem",
            left: "9.2rem",
            fontSize: "3rem",
          }}
        />
        <ArrowCircleLeftIcon
          sx={{
            backgroundColor: "transparent",
            // color: "white",
            filter: "invert(80%)",
            position: "absolute",
            top: "262rem",
            left: "84.7rem",
            fontSize: "3rem",
            transform: "scaleX(-1)",
          }}
        />
      </body>
    </>
  );
}

export default Body;
