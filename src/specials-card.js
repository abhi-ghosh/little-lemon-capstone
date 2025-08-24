import React from "react";
import scooter from './assets/scooter.png';

export default function SpecialsCard({ title, price, description, image }) {
  return (
    <div className="specials-card">
      <img src={image} alt={title} />
        <div className="card-text">
          <div className="name-price">
            <p>{title}</p>
            <p>{price}</p>
          </div>
          <p className="description">{description}</p>
          <div className="order-button">
            <button>Order a delivery</button>
            <img src={scooter} alt="scooter_icon" />
          </div>
        </div>
    </div>
  );
}