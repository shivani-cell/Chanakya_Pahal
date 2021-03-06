import React, { useState  } from "react";
import "./navbar.css";
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logoimage from "./images/chanakyalogo.jpeg";
//import { BrowserRouter as router , Route, Link, NavLink, Switch} from "react-router-dom";
//import { NavLink } from "react-router-dom";
import { NavLink, Router } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    const [open,setOpen] = useState(false);
    const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
    return (
      <>
        <nav className="main-nav">
          {<img src={logoimage} width="60px" height="60px"></img>}

          <div className="logo">
            <h2>
              <span>C</span>hanakya
              <span>P</span>ahal
            </h2>
          </div>
  
          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }>
            <ul>
              <li>
                <NavLink to="/" className="main-navbar" activeClassName="main-nav-active">Home
                </NavLink>
                </li>
                <li>
                <NavLink to="/about" className="main-navbar" activeClassName="main-nav-active">About us
                </NavLink>
                </li>
                <li>
                <DropdownButton align="end" title="Our Work" id="dropdown-menu-align-end"  show={show}
   onMouseEnter={showDropdown} 
   onMouseLeave={hideDropdown}
   renderMenuOnMount={true} >
  <Dropdown.Item eventKey="1"><NavLink to="/education" className="main-dropbar" activeClassName="main-nav-active">
    Education
                </NavLink></Dropdown.Item>
                <Dropdown.Divider />
  <Dropdown.Item eventKey="2"><NavLink to="/health" className="main-dropbar" activeClassName="main-nav-active">
    Health
                </NavLink></Dropdown.Item>
                <Dropdown.Divider />
  <Dropdown.Item eventKey="3"><NavLink to="/livelihood" className="main-dropbar" activeClassName="main-nav-active">
    Livelihood
                </NavLink></Dropdown.Item>
  <Dropdown.Divider />
  <Dropdown.Item eventKey="4"><NavLink to="/womenempowerment" className="main-dropbar" activeClassName="main-nav-active">
    Women Empowerment
                </NavLink></Dropdown.Item>
</DropdownButton>
                </li>
              
              <li>
              <NavLink to="/contact" className="main-navbar" activeClassName="main-nav-active">Contact us
                </NavLink>
              </li>
            </ul>
          </div>
  
          {/* 3rd social media links */}
          <div className="social-media">
            <ul className="social-media-desktop">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100075450080489"
                  target="_thapa">
                  <FaFacebookSquare className="facebook" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/ngochanakyapahal/"
                  target="_thapa">
                  <FaInstagramSquare className="instagram" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_thapa">
                  <FaYoutubeSquare className="youtube" />
                </a>
              </li>
            </ul>
  
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  };
  
  export default Navbar;