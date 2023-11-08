import React from "react";
import "./home.css";
import Header from "../../header/Header";
import Sidebar from "../../sidebar/Sidebar";
import Post from "../../post/Post";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Post/>
        <Sidebar/>
        </div>
    </>
  );
};

export default Home;
