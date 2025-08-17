import React from "react";
import hero from "./assets/hero.jpg";
export default function Hero() {
  return (
    <section className="hero-container">
      <div className="hero">
        <div className="hero-text-button">
          <div className="hero-top">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
          </div>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button className="reserve-button">Reserve a Table</button>
        </div>
        <div>
          <img src={hero} alt="Little Lemon Restaurant" />
        </div>
      </div>
    </section>
  );
}