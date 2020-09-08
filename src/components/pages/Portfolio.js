import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./pages.css";
import images from "./importImg";

function Portfolio() {
  return (
    <div className="row test">
     
        {images.map(({id, src, href, github, title})=><div key={id} className="col-sm-12 col-md-6 col-lg-6 center-text ">
        
     
      <a href={href}>{title}</a>
          <img src={src} className="img-fluid rounded"/> 
        
        <a href={github} className="btn btn-info repo-btn mt-3 mr-3">Github</a> 
        <a href={href} className="btn btn-info repo-btn mt-3">Demo It</a> 

 </div>
        )}

    </div>

  );
}

export default Portfolio;
