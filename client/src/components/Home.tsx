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
    alt,
    imgStart,
    className,
    id
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
        className={lightBg ? "home_home-section lightBg" : "home_home-section darkBg"}
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
                <Link to="/">
                  <Button1 buttonSize="btn--wide" buttonColor="blue">
                    {buttonLabel}
                  </Button1>
                </Link>
              </div>
            </div>
            <div className="col">
              <div className="home__home-img-wrapper" id={id}>
                <img src={img} alt={alt} className="home__home-img"></img>
              </div>
              <div className={className}>
                  <div className="rotateBox">
                    <img className="imgcv" src="wix.png"></img>
                    <img className="imgcv" src="oracle.png"></img>
                    <img className="imgcv" src="redhat.jpg"></img>
                    <img className="imgcv" src="binat.png"></img>
                    <img className="imgcv" src="iron.png"></img>

                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeSection;