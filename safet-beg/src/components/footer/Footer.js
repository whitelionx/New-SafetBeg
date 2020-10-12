import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <footer>
      <h1>@SafetBeg</h1>
      <span>SafetBeg © {new Date().getUTCFullYear()}</span>
    </footer>
  );
};

export default Footer;
