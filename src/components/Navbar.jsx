/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
// import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import "../componentStyles/navbar.css";
import { useState } from "react";
function Navbar() {

  const [active, setActive] = useState("");

  function scrollTop() {
    setActive("");
    window.scrollTo(0, 0);
  }
  return <>
    <nav className="navbar">
      <div className="nav-div">
        <Link to="/" className="nav-link" onClick={scrollTop}>
          <img src={logo} alt="logo" className="logo"/>
        </Link>
      </div>
    </nav>
  </>
}

export default Navbar