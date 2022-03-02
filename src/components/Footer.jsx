import React from "react";
import FooterStyle from "./Footer.module.scss";
import "font-awesome/css/font-awesome.min.css";

function Footer() {
  return (
    <>
      <div className={FooterStyle.Footer}>
        <div className={FooterStyle.ContainerFoot}>
          <div className={FooterStyle.footerContainer}>
            <h1>Panto</h1>
            <h3>
              The advantage of hiring a workspace with <br /> us is that gives
              you comfortable service
              <br /> and all-around facilities.
              <br />
            </h3>
            <div
              className={FooterStyle.lowerText}
              style={{
                position: "absolute",
                top: "10rem",
                display: "flex",
                backgroundColor: "transparent",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "15rem",
                color: "grey",
                fontSize: "13px",
              }}>
              <h3 style={{ fontSize: "13px", marginRight: "5rem" }}>
                Copyright © 2021
              </h3>
              <h3
                style={{
                  fontSize: "15px",
                  color: "black",
                  position: "relative",
                  left: "55rem",
                }}>
                Terms & Conditions
              </h3>
              <h3
                style={{
                  position: "relative",
                  left: "60rem",
                  fontSize: "15px",
                  color: "black",
                }}>
                Privacy Policy
              </h3>
            </div>
            <div className={FooterStyle.sectionContainer}>
              <div className={FooterStyle.firstSection}>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "light",
                    fontFamily: "Gilroy-Light, sans-serif",
                    color: "#F6973F",
                  }}>
                  Services
                </h1>
                <p
                  style={{
                    position: "absolute",
                    top: "8.5rem",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Gilroy-Light, sans-serif",
                  }}>
                  Email Marketing
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "11.3rem",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Gilroy-Light, sans-serif",
                  }}>
                  Campaigns
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "14rem",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Gilroy-Light, sans-serif",
                  }}>
                  Branding
                </p>
              </div>
              <div className={FooterStyle.secondSection}>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "light",
                    fontFamily: "Gilroy-Light, sans-serif",
                    color: "#F6973F",
                  }}>
                  Furniture
                </h1>
                <p
                  style={{
                    position: "absolute",
                    top: "8.5rem",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Gilroy-Light, sans-serif",
                  }}>
                  Beds
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "11.3rem",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Gilroy-Light, sans-serif",
                  }}>
                  Chair
                </p>
                <p
                  style={{
                    position: "absolute",
                    top: "14rem",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Gilroy-Light, sans-serif",
                  }}>
                  All
                </p>
              </div>
              <div className={FooterStyle.thirdSection}>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "light",
                    fontFamily: "Gilroy-Light, sans-serif",
                    color: "#F6973F",
                  }}>
                  Follow Us
                </h1>
                <div style={{ backgroundColor: "transparent" }}>
                  <i
                    className='fa fa-facebook'
                    style={{
                      position: "absolute",
                      top: "8.5rem",
                      fontWeight: "bold",
                    }}></i>
                </div>
                <p
                  style={{
                    position: "absolute",
                    top: "8.5rem",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Gilroy-Light, sans-serif",
                    marginLeft: "1.7rem",
                  }}>
                  Facebook
                </p>
                <div style={{ backgroundColor: "transparent" }}>
                  <i
                    className='fa fa-twitter'
                    style={{
                      position: "absolute",
                      top: "11.25rem",
                      fontWeight: "bold",
                    }}></i>
                </div>
                <p
                  style={{
                    position: "absolute",
                    top: "11.3rem",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Gilroy-Light, sans-serif",
                    marginLeft: "1.7rem",
                  }}>
                  Twitter
                </p>
                <div style={{ backgroundColor: "transparent" }}>
                  <i
                    className='fa fa-instagram'
                    style={{
                      position: "absolute",
                      top: "14rem",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}></i>
                </div>
                <p
                  style={{
                    position: "absolute",
                    top: "14rem",
                    fontSize: "16px",
                    fontWeight: "bold",
                    fontFamily: "Gilroy-Light, sans-serif",
                    marginLeft: "1.8rem",
                  }}>
                  Instagram
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
