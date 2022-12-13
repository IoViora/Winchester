import React from "react";
import "./Footer.css";
import image from "../../images/winlogo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-up">
        <img className="footer-img" src={image} alt="" />
      </div>
      <div className="footer-down">
        <div className="footer-content">
          <h4>POPULAR LINKS</h4>
          <span>Accessibility</span>
          <span>Download a catalog</span>
          <span>Winchester Ammunition</span>
          <span>Promotions and Rebates</span>
        </div>
        <div className="footer-content">
          <h4>WE SUPPORT</h4>
          <span>nra.org</span>
          <span>nssf.org</span>
          <span>dontlie.org</span>
          <span>gunvote.org</span>
        </div>
        <div className="footer-content">
          <h4>CONTACT US</h4>
          <span>275 Winchester Avenue</span>
          <span>Morgar, UT 84050</span>
          <span>800-333-3288</span>
          <span>801-876-2711</span>
        </div>
      </div>
      <div className="footer-last">
        <div className="footer-last-content">
          2022 Winchester. All Rights Reserved
        </div>
        <div className="footer-last-content">Legal | Privacy Policy</div>
      </div>
    </div>
  );
};

export default Footer;
