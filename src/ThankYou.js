import React from "react";
import { useOutletContext} from "react-router";
import { Link } from "react-router";
export default function ThankYou() {
  const { formData } = useOutletContext();
  return (
    <div className="thankyou">
      <h2>Thank You for Your Booking!</h2>
      <div>
        <p>We look forward to serving you.</p>
        <p>A confirmation email has been sent to <span>{formData.email}</span></p>
      </div>
      <Link to="/"><button>Back to Home</button></Link>
    </div>
  );
}