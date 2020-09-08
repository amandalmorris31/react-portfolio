import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./pages.css";
import images from "./importImg";
//import codeConnect from "./images/CodeConnectScreenshot.jpg";



function Portfolio() {
  return (
    <div>
       IMAGE ADD  {images.map(({id, src, href, github, title})=><div className="appcontainer">
       <a href={href}>{title}</a><img key={id} src={src}/> <a href={github}>Github</a>
       </div>
       )}
    </div>

    // <div class="container px-sm-5 px-md-4 px-lg-40">
   

    //       <div class="row">
            
              
    //           <div class="card" >
    //             <div class="card-body">
    //               <h1>Portfolio</h1>
    //             </div>
    //           </div>         
    //       </div> 
    // <br></br>

    //       <div class="row">
    //         <div class="col-sm-12 col-md-6 col-lg-6">
    //           <div class="appcontainer" >
    //             <a href="http://project-02-code-connect.herokuapp.com/" target="_blank">Code Connect Hosted on Heroku</a> | <a href="https://github.com/amandalmorris31/project-two">Code Connect on GitHub</a>
    //             <a href="http://project-02-code-connect.herokuapp.com/" target="_blank">
                  
    //               <img src={codeConnect} class="card-img-top" alt="Code Connect app"/></a>
                 

    //               <div class="card-body" id="portfoliobanner">
    //                   <div><h5>Code Connect App Hosted on Heroku</h5></div>
    //               </div> 
    //           </div>
    //       </div>

    //           <div class="col-sm-12 col-md-6 col-lg-6">
    //               <div class="appcontainer" >
    //                 <a href="https://github.com/amandalmorris31/DU-Project-1-Group-6" target="_blank">Quarantini GitHub Repo</a>
    //                   <a href="https://amandalmorris31.github.io/DU-Project-1-Group-6/" target="_blank">
    //                     <img src="images/quarantini.jpg" class="card-img-top" alt="quarantini"/></a>

    //                   <div class="card-body" id="portfoliobanner">
    //                       <div><h5>Quarantini: At-home Show & Drink Options</h5></div>
    //                   </div> 
    //               </div>
    //           </div>

    //       </div>



    //       <div class="row">
    //         <div class="col-sm-12 col-md-6 col-lg-6">
    //           <div class="appcontainer" >
    //             <a href="https://vast-spire-16414.herokuapp.com/" target="_blank">Burger App Hosted on Heroku</a> | <a href="https://github.com/amandalmorris31/burger-app">Burger App on GitHub</a>
    //             <a href="https://vast-spire-16414.herokuapp.com/" target="_blank">
    //               <img src="images/burgers-portfolio.jpg" class="card-img-top" alt="burgers"/></a>

    //               <div class="card-body" id="portfoliobanner">
    //                   <div><h5>Burger App Hosted on Heroku</h5></div>
    //               </div> 
    //           </div>
    //       </div>

    //           <div class="col-sm-12 col-md-6 col-lg-6">
    //               <div class="appcontainer" >
    //                 <a href="https://nameless-escarpment-60835.herokuapp.com/" target="_blank">Note Taker on Heroku</a> | <a href="https://github.com/amandalmorris31/notetaker">Note Taker on GitHub</a>
    //                 <a href="https://nameless-escarpment-60835.herokuapp.com/" target="_blank">
    //                   <img src="images/NoteTakerscreenshot.jpg" class="card-img-top" alt="note taker"/></a>

    //                   <div class="card-body" id="portfoliobanner">
    //                       <div><h5>Note Taker: Take notes with Express</h5></div>
    //                   </div> 
    //               </div>
    //           </div>

    //       </div> 

    //       <div class="row">
    //         <div class="col-sm-12 col-md-6 col-lg-6">
    //           <div class="appcontainer" >
    //             <a href="https://github.com/amandalmorris31/weather-dashboard" target="_blank">Weather Dashboard GitHub Repo</a>
    //             <a href="https://amandalmorris31.github.io/weather-dashboard/" target="_blank">
    //               <img src="images/WeatherDashboard.png" class="card-img-top" alt="Weather Dashboard"/></a>

    //           <div class="card-body" id="portfoliobanner">
    //             <div><h5>Weather Dashboard</h5></div>
    //           </div>
    //         </div>
    //       </div>

    //           <div class="col-sm-12 col-md-6 col-lg-6">
    //               <div class="appcontainer">
    //                 <a href="https://github.com/amandalmorris31/work-day-scheduler" target="_blank">Work Day Scheduler GitHub Repo</a>
    //                   <a href="https://amandalmorris31.github.io/work-day-scheduler/" target="_blank">
    //                     <img src="images/WorkDayScheduler.png" class="card-img-top" alt="work day scheduler"/></a>

    //                   <div class="card-body" id="portfoliobanner">
    //                     <div><h5>Work Day Scheduler</h5></div>
    //                   </div>
    //               </div>
    //           </div>

    //       </div> 

    //       <div class="row">

    //       <div class="col-sm-12 col-md-6 col-lg-6">
    //         <div class="appcontainer">
    //           <a href="https://github.com/amandalmorris31/password-generator" target="_blank">Password Generator GitHub Repo</a>
    //               <a href="https://amandalmorris31.github.io/password-generator/" target="_blank">
    //                 <img src="images/passwordGenerator.png" class="card-img-top" alt="password generator"/></a>

    //                 <div class="card-body" id="portfoliobanner">
    //                   <div><h5>Password Generator</h5></div>
    //                 </div>
    //             </div>
    //         </div> 
            
    //       </div>

    // </div>
          



  );
}

export default Portfolio;
