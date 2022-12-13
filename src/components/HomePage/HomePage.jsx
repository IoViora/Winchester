import React from "react";
import "./HomePage.css";
import image from "../../images/homepageimg.jpg";
import image2 from "../../images/secondblockimgone.jpg";
import image3 from "../../images/secondblockimgtwo.jpg";
import image4 from "../../images/lasthomepageimg.jpg";

const HomePage = () => {
  return (
    <>
      <div>
        <img className="image" src={image} alt="" />
      </div>
      <div className="homepage-second">
        <a
          href="https://www.winchesterguns.com/news/articles/tips-for-new-rifle-buyers.html"
          target="_blank"
        >
          <img className="imagesmall" src={image2} alt="" />
        </a>
        <a href="*" target="_blank">
          <img className="imagesmall" src={image3} alt="" />
        </a>
      </div>
      <div>
        <img className="image" src={image4} alt="" />
      </div>
    </>
  );
};

export default HomePage;
