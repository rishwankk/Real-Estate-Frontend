import React from "react";
import "./homepage.scss";
import SearchBar from "../searchBar/SearchBar";

const Homepage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place </h1>
          <p className="description">
            We help you find the perfect home, no matter where you are. Our
            expert team is dedicated to understanding your unique needs and
            providing tailored listings just for you. Explore your options and
            start your journey on our website today!{" "}
          </p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of experience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Award Gained</h2>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default Homepage;
