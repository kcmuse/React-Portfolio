import React from "react";
import image from "../images/hpengland.jpg";

export default function About() {
  return (
    <div className="about-main" id="about">
      <div className="container">
        <h2 className="about-main-title">About Me!
        <img className="about-img" width="200px" height="260px" src={image} alt="kaleb"></img>
        </h2>
        <div className="about-main-info">
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p className="about-text">My name is Kaleb Muse, and I am a Full Stack Developer</p>
          <p className="about-text">After working several different jobs, I decided to make a career change and attempt some coding!</p>
          <p className="about-text">I have a certificate from the University of Washington in Full Stack Development.</p>
          <p className="about-text">I love to play board games, video games, and dream of traveling the world.</p>
          </div>
      </div>
    </div>
  );
}