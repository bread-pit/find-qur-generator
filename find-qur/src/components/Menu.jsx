import React, { useState } from "react";
import qrIcon from "../assets/qr-icon.png";
import urlBtn from "../assets/buttons/url-btn.png";
import igBtn from "../assets/buttons/ig-btn.png";
import emailBtn from "../assets/buttons/email-btn.png";
import wifiBtn from "../assets/buttons/wifi-btn.png";
import txtBtn from "../assets/buttons/text-btn.png";
import "../styles/MenuStyle.css";

export default function Menu() {
  const [selected, setSelected] = useState("");

  if (selected == "") {
    setSelected = "";
  }

  return (
    <div className="menu-card">
      <img src={qrIcon} className="qr-icon"></img>

      <div className="url-btn-wrapper">
        {/* url button */}
        <button
          className={`url-btn ${selected === "url" ? "selected" : ""}`}
          onClick={() => setSelected("url")}
        >
          <img src={urlBtn} className="url-icon" alt="URL Icon" />
          <span>URL</span>
        </button>

        {/* instagram button */}
        <button
          className={`url-btn ${selected == "instagram" ? "selected" : ""}`}
          onClick={() => setSelected("instagram")}
        >
          <img src={igBtn} className="ig-icon" alt="ig Icon" />
          <span>Instagram</span>
        </button>

        {/* email button */}
        <button
          className={`url-btn ${selected == "email" ? "selected" : ""}`}
          onClick={() => setSelected("email")}
        >
          <img src={emailBtn} className="email-icon" alt="Email Icon" />
          <span>E-mail</span>
        </button>

        {/* wifi button */}
        <button
          className={`url-btn ${selected == "wifi" ? "selected" : ""}`}
          onClick={() => setSelected("wifi")}
        >
          <img src={wifiBtn} className="wifi-icon" alt="wifi Icon" />
          <span>WiFi</span>
        </button>

        {/* text button */}
        <button
          className={`url-btn ${selected == "txt" ? "selected" : ""}`}
          onClick={() => setSelected("txt")}
        >
          <img src={txtBtn} className="txt-icon" alt="Text Icon" />
          <span>Plain Text</span>
        </button>
      </div>
    </div>
  );
}
