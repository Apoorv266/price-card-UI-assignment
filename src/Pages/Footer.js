import React from "react";
import "../Styles/Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <img
        src={require("../Assets/question.png")}
        alt=""
        srcset=""
        className="img2"
      />
      <div className="footer-box1">
        <p className="text1">Customer Service</p>
        <p className="text2">Find Answers to all your questions {">"}</p>
      </div>
      <img
        src={require("../Assets/purepng.com-phone-in-handphone-in-handhandheldpersonal-computermobileholding-smart-phone-17015283655090ozby.png")}
        alt=""
        className="img1"
      />
      <div className="footer-box1">
        <p className="text1">Do you already use it?</p>
        <p className="text2">Discover the OpenCloudBSS app {">"}</p>
      </div>
    </div>
  );
};

export default Footer;
