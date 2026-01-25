import React from "react";
import { Link } from "react-router";
import restaurant from "./assets/restaurant.jpg";
import chefs from "./assets/Mario and Adrian A.jpg";
import menu from "./assets/collage.jpg";
export default function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>Our History</h1>
          <p>
            Little Lemon began with a simple idea: serve great food made with care, 
            passion, and the freshest ingredients possible. What started as a small 
            kitchen driven by big dreams has grown into a place where guests come to relax, 
            connect, and enjoy thoughtfully prepared meals. At Little Lemon, 
            every plate reflects our journey and our commitment to quality.
          </p>
        </div>
        <div className="about-image">
          <img src= {restaurant} alt="Little Lemon History"/>
        </div>
      </div>
      <div className="about-container">
        <div className="about-text">
          <h1>Our Chefs</h1>
          <p>
            Behind the flavors of Little Lemon are Chef Mario and Chef Adrian, 
            the creative minds leading our kitchen. With years of experience 
            and a shared love for bold, honest cooking, they blend tradition with 
            modern techniques to craft dishes that are both comforting and exciting. 
            Their focus is always on flavor, balance, and consistency—because great 
            food should never be a gamble.
          </p>
        </div>
        <div className="chefs-image">
          <img src={chefs} alt="Little Lemon Chefs"/>
        </div>
      </div>
      <div className="about-container">
        <div className="about-text">
          <h1>Our Menu</h1>
          <p>
            The Little Lemon menu is designed to celebrate variety and freshness, 
            offering something for every palate. 
            From timeless favorites to chef-inspired specialties, 
            each dish is made to be enjoyed and remembered. 
            Want to explore everything we offer? Head over to our 
            <Link onClick={() => window.scrollTo(0, 0)} to="/menu"> Online Menu</Link> to see the full selection.
          </p>
        </div>
        <div className="about-image">
          <img src={menu} alt="Menu pic"/>
        </div>
      </div>
    </div>
  )
}