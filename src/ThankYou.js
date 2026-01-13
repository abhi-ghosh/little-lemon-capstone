import React from "react";
import { useOutletContext} from "react-router";
import { Link } from "react-router";
export default function ThankYou() {
  const { formData } = useOutletContext();
  return (
    <div>
      <h2>Thank You for Your Booking!</h2>
      <p>We look forward to serving you.</p>
      <p>A confirmation email has been sent to {formData.email}.</p>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}