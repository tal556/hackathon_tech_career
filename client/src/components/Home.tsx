import React, { useState } from "react";
import "../components/Home.css";
import { Button, Layout, Menu, Modal } from "antd";
import Login from "../components/loginForm/Login";

import Button1 from "./Button";
import { Link } from "react-router-dom";

function HomeSection(props: any) {
  const {
    lightBg,
    topLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    img1,
    img2,
    img3,
    img4,
    img5,
    alt,
    imgStart,
  } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div
        className={lightBg ? "home__home-section" : "home__home-section darkBg"}
      >
        <div className="container">
          <div
            className="row home__home-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home__home-text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? "heading" : "heading dark"}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? "home__home-subtitle"
                      : "home__home-subtitle dark"
                  }
                >
                  {description}
                </p>
                <h1></h1>
        
              </div>
            </div>
            <div className="col">
              <div className="home__home-img-wrapper">
                <img src={img} alt={alt} className="home__home-img"></img>
                {/* <img src={img1} alt={alt} className="home__home-img"></img> 
       <img src={img2} alt={alt} className="home__home-img"></img> 
       <img src={img3} alt={alt} className="home__home-img"></img> 
       <img src={img4} alt={alt} className="home__home-img"></img>  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;
