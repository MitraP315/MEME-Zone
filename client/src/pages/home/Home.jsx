import React, { useEffect } from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import Posts from "../../components/posts/Posts.jsx";
import RightSideBar from "../../components/rightsidebar/RightSideBar.jsx";
import Status from "../../components/status/Status.jsx";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <Navbar />
        <div className="home-bottom">
          <div className="home-bottom-left">
            <Status />
            <Posts />
          </div>
          <div className="home-bottom-right">
            <RightSideBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
