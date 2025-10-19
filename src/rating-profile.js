import { useEffect, useRef, useState } from 'react';
import left from './assets/left.png';
import right from './assets/right.png';
import starimg from './assets/star.png';
import { ratings } from './rating-data';

// RatingProfile component: displays a carousel of user reviews with stars, profiles, and comments.
// Auto-slides every 3 seconds but pauses on hover.
export default function RatingProfile() {
  // -----------------------------
  // STATE
  // -----------------------------
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current review being shown
  const [isHovered, setIsHovered] = useState(false);   // Tracks whether the user is hovering over the carousel

  // -----------------------------
  // REF
  // -----------------------------
  const intervalRef = useRef(null); // Stores the interval ID so it can be cleared later (prevents multiple intervals)

  // -----------------------------
  // FUNCTIONS
  // -----------------------------
  // Go to previous review
  const prevSlide = () => {
    setCurrentIndex((prev) => prev === 0 ? ratings.length - 1 : prev - 1);
  }

  // Go to next review
  const nextSlide = () => {
    setCurrentIndex((prev) => prev === ratings.length - 1 ? 0 : prev + 1);
  }

  // -----------------------------
  // EFFECT: AUTO-SLIDE CAROUSEL
  // -----------------------------
  useEffect(() => {
    if (!isHovered) { // Only run the auto-slide if not hovered
      intervalRef.current = setInterval(() => {
        nextSlide(); // Move to next slide every 3 seconds
      }, 3000);

      // Cleanup: clear the interval when the component unmounts or when isHovered changes
      return () => clearInterval(intervalRef.current);
    }
  }, [isHovered]); // Re-run effect whenever hover state changes

  // -----------------------------
  // JSX: CAROUSEL LAYOUT
  // -----------------------------
  return (
    <div className="rating-container">
      {/* -----------------------------
          LEFT ARROW BUTTON
          ----------------------------- */}
      <button className="img-slider-button-left" onClick={prevSlide}>
        <img className="arrow" src={left} alt="arrow-left" />
      </button>

      {/* -----------------------------
          CAROUSEL VIEWPORT
          Pauses auto-slide on hover
          ----------------------------- */}
      <div className="rating-viewport">
        <div
          className="rating-list"
          onMouseEnter={() => setIsHovered(true)}  // Pause carousel on hover
          onMouseLeave={() => setIsHovered(false)} // Resume carousel when hover ends
          style={{ transform: `translateX(-${currentIndex * 100}%)` }} // Slide horizontally based on currentIndex
        >
          {ratings.map((rating, index) => (
            <div key={index} className="rating-item">

              {/* -----------------------------
                  STARS
                  ----------------------------- */}
              <div className="stars">
                {Array.from({ length: rating.star }).map((_, i) => (
                  <img key={i} src={starimg} alt="star" className="star" />
                ))}
              </div>

              {/* -----------------------------
                  PROFILE IMAGE & NAME
                  ----------------------------- */}
              <div className="rating-profile">
                <img src={rating.img} alt={rating.name} />
                <p>{rating.name}</p>
              </div>

              {/* -----------------------------
                  COMMENT TEXT
                  ----------------------------- */}
              <p className="comment">{rating.comment}</p>
            </div>
          ))}
        </div>
      </div>

      {/* -----------------------------
          RIGHT ARROW BUTTON
          ----------------------------- */}
      <button className="img-slider-button-right" onClick={nextSlide}>
        <img className="arrow" src={right} alt="arrow-right" />
      </button>
    </div>
  );
}
