import React from "react";
import scooter from './assets/scooter.png';
import {useNavigate } from 'react-router';

export default function SpecialsCard({ title, price, description, image }) {
  const navigate = useNavigate();
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
            <button onClick={()=> navigate("/menu") && window.scrollTo(0, 0)}>Order a delivery</button>
            <img src={scooter} alt="scooter_icon" />
          </div>
        </div>
    </div>
  );
}