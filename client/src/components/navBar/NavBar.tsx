import React, { useState,useEffect } from "react";
import "./NavBar.css";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";
import Button from "../Button/Button"
import { Layout, Menu, Modal } from "antd";
import Login from "../loginForm/Login";

import {IconContext} from 'react-icons/lib'

function NavBar() {
  const [click, setClick] = useState(false);
  const [isButton,setIsButton] = useState(true)
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleClick = () => setClick(!click);

const closeMobileMenu=() => setClick(false)
const showButton = () =>{
  if (window.innerWidth<=960){
    setIsButton(false)
  }else {
    setIsButton(true)
  }
};
const showModal = () => {
  setIsModalVisible(true);
};
const handleCancel = () => {
  setIsModalVisible(false);
};
useEffect(()=>{
  showButton()
},[])

window.addEventListener("resize",showButton);
  return (
    <>
    <IconContext.Provider value={{color:'#000'}}>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className="logosmall" src="/connectech-color-smaller.png" />
            ConnecTech
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              
            </li>
            <li className="nav-item">
              <Link to="/student" className="nav-links" onClick={closeMobileMenu}>
                סטודנטים
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/hr" className="nav-links" onClick={closeMobileMenu}>
                מגייסים
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/recruiter" className="nav-links" onClick={closeMobileMenu}>
              משרות
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-links" onClick={closeMobileMenu}>
                הנהלה
              </Link>
              
            </li>
            <li>
            <Link to="/chat" className="nav-links" onClick={closeMobileMenu}>
                צ'אט
              </Link>
            </li>
            <li className="nav-btn">
           
              {isButton ? (<div>
                <Link to="/" className="btn-link" onClick={showModal}>
                  <Button buttonStyle='btn--outline'>התחבר</Button>
                </Link>
                <Modal
            title="התחברות"
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null}
          >
            <Login />
          </Modal>
                </div>
              ): (
                <Link to="/signup" className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonStyle='btn--outline'
                  buttonSize='btn--mobile'
                  >התחבר
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
