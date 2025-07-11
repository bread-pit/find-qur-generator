import React, { useState } from "react";
import qrIcon from "../assets/qr-icon.png";
import urlBtn from "../assets/buttons/url-btn.png";
import igBtn from "../assets/buttons/ig-btn.png";
import emailBtn from "../assets/buttons/email-btn.png";
import wifiBtn from "../assets/buttons/wifi-btn.png";
import txtBtn from "../assets/buttons/text-btn.png";
import divLine from "../assets/divider-line.png";
import "../styles/MenuStyle.css";

export default function Menu() {
  const [selected, setSelected] = useState("");

  return (
    <div className="menu-card">
      <div className="menu-content">
        {/* Left side: QR icon and buttons */}
        <div className="left-column">
          <img src={qrIcon} className="qr-icon" alt="QR Icon" />

          <div className="url-btn-wrapper">
            <button
              className={`url-btn ${selected === "url" ? "selected" : ""}`}
              onClick={() => setSelected("url")}
            >
              <img src={urlBtn} className="url-icon" alt="URL Icon" />
              <span>URL</span>
            </button>

            <button
              className={`url-btn ${
                selected === "instagram" ? "selected" : ""
              }`}
              onClick={() => setSelected("instagram")}
            >
              <img src={igBtn} className="ig-icon" alt="Instagram Icon" />
              <span>Instagram</span>
            </button>

            <button
              className={`url-btn ${selected === "email" ? "selected" : ""}`}
              onClick={() => setSelected("email")}
            >
              <img src={emailBtn} className="email-icon" alt="Email Icon" />
              <span>E-mail</span>
            </button>

            <button
              className={`url-btn ${selected === "wifi" ? "selected" : ""}`}
              onClick={() => setSelected("wifi")}
            >
              <img src={wifiBtn} className="wifi-icon" alt="WiFi Icon" />
              <span>WiFi</span>
            </button>

            <button
              className={`url-btn ${selected === "txt" ? "selected" : ""}`}
              onClick={() => setSelected("txt")}
            >
              <img src={txtBtn} className="txt-icon" alt="Text Icon" />
              <span>Plain Text</span>
            </button>
          </div>
        </div>

        {/* Right side: Divider */}
        <img src={divLine} alt="Divider Line" className="div-line" />
      </div>
    </div>
  );
}
