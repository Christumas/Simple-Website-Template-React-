import React from "react";

function Header() {
  const header = (
    <nav className="navbar">
      <h1 className="title">Company Name</h1>
      <ul className="navlinks">
        <li>
          <a id="navlink" href="#">
            About Us
          </a>
        </li>
        <li>
          <a id="navlink" href="#">
            Contact
          </a>
        </li>
      </ul>
      <div className="buttonBox">
        <button className="signup Btn">Sign In</button>
        <button className="search Btn">Search</button>
      </div>
    </nav>
  );

  return header;
}

export default Header;
