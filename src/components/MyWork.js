import React from "react";
import recipesRefocusedPic from "../images/landing-page-RR.png";


export default function MyWork() {
  return (
    <div className="mywork-main" id="mywork">
        <div className="container">
            <h1 className="mywork-main-title"> My Work</h1>
            <div className="card-body">
                <h2>Recipes Refocused</h2>
                <div className="card-body">
                <p>A web application for users to create, replace, update, and delete their favorite recipes.</p>
                <p>Users are also able to like and save other users recipes</p>
                <img src={recipesRefocusedPic} className="project-img" alt="Project Screenshot"></img>
                <hr></hr>
                <a href="https://recipes-refocused.herokuapp.com/" target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-success">Website</button>
                </a>
                <a href="https://github.com/TheHebi/recipe-forum-site" target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-warning">GitHub</button>
                </a>
                </div>
            </div>
        </div>
    </div>
    
  )
}