import React, { Component } from "react";

const Navbar = ({ title, city, zips }) => {
  return (
    <nav
      className="navbar navbar-light"
      style={{ textAlign: "center", backgroundColor: "black" }}
    >
      <a
        className="navbar-brand"
        href="#"
        style={{
          color: "white",
          letterSpacing: 2,
          textDecoration: "none",
        }}
      >
        {title}
      </a>
      <p
        style={{
          color: "white",
          fontSize: 17,
          marginRight: "1%",
        }}
      >
        City {city && city}
        <span style={{ marginLeft: 50 }}>
          Matches {zips && zips !== "no result" && zips.length}
        </span>
      </p>
    </nav>
  );
};

export default Navbar;
