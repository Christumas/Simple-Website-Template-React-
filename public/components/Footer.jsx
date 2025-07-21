import React from "react";

function Footer() {
  const Footer = (
    <div className="Footer">
      <h3 id="footercompanyTitle">Company Name</h3>
      <ul className="footerLinks">
        <li>
          <a id="footerLink">About US</a>
        </li>
        <li>
          <a id="footerLink">Contact </a>
        </li>
      </ul>
      <div className="socials">
        <img
          className="logo"
          id="instagramLogo"
          src="https://www.svgrepo.com/show/474324/instagram.svg"
        />
        <img
          className="logo"
          id="facebookLogo"
          src="https://www.svgrepo.com/show/500854/facebook.svg"
        />
        <img
          className="logo"
          id="twitterLogo"
          src="https://www.svgrepo.com/show/513008/twitter-154.svg"
        />
      </div>
    </div>
  );

  return Footer;
}

export default Footer;
