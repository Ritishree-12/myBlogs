import React from "react";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="top">
      <div className="topleft">
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-instagram"></i>
      </div>
      <div className="topcenter">
        <ul className="topList">
            <li className="topListItems">Home</li>
            <li className="topListItems">About</li>
            <li className="topListItems">Contact</li>
            <li className="topListItems">Write</li>
            <li className="topListItems">Logout</li>
         
        </ul>
      </div>
      <div className="topright">
        <img 
        className="topImg"
        src='./avtar.svg' alt="" />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};

export default TopBar;
