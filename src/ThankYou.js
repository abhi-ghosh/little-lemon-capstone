import React from "react";
import { Link } from "react-router";
export default function ThankYou() {
  return (
    <div>
      <h2>Thank You for Your Booking!</h2>
      <p>We look forward to serving you.</p>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}