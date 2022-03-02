import React from "react";
import NavStyle from "./Navbar.module.scss";

function Navbar() {
  return (
    <>
      <nav
        className={NavStyle.Navbar}
        style={{ backgroundColor: "transparent" }}>
        <div className={NavStyle.NavbarContainer}>
          <h1>Panto</h1>
          <div
            className={NavStyle.TextContainer}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}>
            <ul
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                width: "30%",
                marginTop: "5px",
                marginLeft: "20rem",
                position: "absolute",
                top: "-0.0100rem",
              }}>
              <a>Furniture</a>
              <br />
              <a>Shop</a>
              <br />
              <a>About Us</a>
              <br />
              <a>Contact</a>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
