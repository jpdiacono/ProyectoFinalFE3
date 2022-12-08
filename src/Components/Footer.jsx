import React from 'react'
import dHImage from "../images/DH.png";
import fbImage from "../images/ico-facebook.png";
import igImage from "../images/ico-instagram.png";
import tiktokImage from "../images/ico-tiktok.png";
import whatsappImage from "../images/ico-whatsapp.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={dHImage} alt="DH-logo" />
      </div>
      <div className="icon">
        <img src={fbImage} alt="Facebook-logo"  />
        <img src={igImage} alt="Instagram-logo"  />
        <img src={tiktokImage} alt="Tiktok-logo" />
        <img src={whatsappImage} alt="Whatsapp-logo" />
      </div>
    </footer>
  )
}

export default Footer
