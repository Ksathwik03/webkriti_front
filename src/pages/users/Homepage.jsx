import React from "react";
import "../assets/styles/homepage.css";
import shoppingImg from "../assets/img/shopping-img.svg";
import homepageImg2 from '../assets/img/home-page-img-2.svg'
import robot from '../assets/img/final.svg'
function Home() {
  return (
    <>
      <div className="ball1"></div>
      <div className="ball2"></div>
      <div className="container">
        <h1 className="main-heading"><span className="style-heading">BH</span>-ROOM</h1>
        <div className="home container-box">
          <img src={shoppingImg} alt="" />
          <div className="intro">
            <span className="style-text">
               BH-room is web application were Admin can view detail of each rooms in hostels and update it 
            </span>
          </div>
        </div>
        <div className="home1 container-box">
          <img src={homepageImg2} alt="" />
          <div className="intro1">
            Now caretakers and admins can allocate rooms to students with a click using BH-room
          </div>
        </div>
        <div className="home container-box">
          <img src={robot} alt="" />
          <div className="intro">
            BH-ROOM maintains a detailed information about all the students whose rooms got allocated and the vacant rooms
          </div>
        </div>
      </div>
    </>
  );
}


export default Home;
