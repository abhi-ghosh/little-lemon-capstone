import { useState, useEffect } from "react";
import starimg from './assets/star.png';
import { ratings } from './rating-data';

export default function RatingCard() {

  return (
    <div className="rating-card">
      <div className="rating-container">
        <h1>Testimonials</h1>
        <div className="details">
          {ratings.map((rating, index) => (
          <div key={index} className="rating-item">
            {/* stars */}
            <div className="stars">
              {Array.from({ length: rating.star }).map((_, i) => (
                <img key={i} src={starimg} alt="star" className="star" />
              ))}
            </div>

            {/* profile */}
            <div className="rating-profile">
              <img src={rating.img} alt={rating.name} />
              <p>{rating.name}</p>
            </div>

            {/* comment */}
            <p className="comment">{rating.comment}</p>
          </div>
        ))}
        </div>
        </div>

    </div>
  );
}