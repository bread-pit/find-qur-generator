import React from "react";
import qrIcon from "../assets/qr-icon.png";
import "../styles/MenuStyle.css";

export default function Menu() {
  return (
    <div className="menu-card">
      <img src={qrIcon} className="qr-icon"></img>
    </div>
  );
}
