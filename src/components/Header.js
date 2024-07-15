import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <img src="logo.png" alt="Logo" className="logo" />
      <h1 className="title">Currency Converter</h1>
    </header>
  );
};

export default Header;