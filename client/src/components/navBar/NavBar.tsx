import React, { useState,useEffect } from "react";
import "./NavBar.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import Button from "../Button"
import {IconContext} from 'react-icons/lib'

function NavBar() {
  const [click, setClick] = useState(false);
  const [button,setButton] = useState(true)
  const handleClick = () => setClick(!click);

const closeMobileMenu=() => setClick(false)
const showButton = () =>{
  if (window.innerWidth<=960){
    setButton(false)
  }else {
    setButton(true)
  }
};

useEffect(()=>{
  showButton()
},[])

window.addEventListener("resize",showButton);
  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            
            ConnecTech
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/student" className="nav-links" onClick={closeMobileMenu}>
                Seekers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hr" className="nav-links" onClick={closeMobileMenu}>
                Pickers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recruiter" className="nav-links" onClick={closeMobileMenu}>
              recruiter
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-links" onClick={closeMobileMenu}>
                Admin
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to="/signup" className="btn-link">
                  <Button buttonStyle='btn--outline'>signup</Button>
                </Link>
              ): (
                <Link to="/signup" className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle='btn--outline'
                  buttonSize='btn--mobile'
                  >signup
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
