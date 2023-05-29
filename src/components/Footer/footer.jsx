import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="kiri">
        <h3>matara</h3>
        <p>
          Hello World! We are the MATARA team, students from the Faculty of Informatics, Informatics Major, Class of 2023. We are currently taking Introduction to Internet Technology course, and this
          website is our final semester examination project. We use REACT JS to build this website.
        </p>
        <h4>copyright © 2023</h4>
      </div>
      <div className="kanan">
        <div className="AboutUS">
          <h2>
          <Link to="/about" className="link-style">AboutUs</Link>
          </h2>
        </div>
        <div className="socialMedia">
          <a href="" target="_blank" rel="noopener noreferrer">
            <img src="../assets/search.png" alt="" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer"></a>
          <a href="" target="_blank" rel="noopener noreferrer"></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
