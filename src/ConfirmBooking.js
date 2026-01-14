import { useOutletContext, useNavigate } from "react-router";

export default function ConfirmBooking() {
  const { formData } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="confirmation">
      <h2>Confirm Your Booking</h2>
      <div className="confirmation-details">
        <div className="detail-row">
          <span className="label">Name</span>
          <span className="value">{formData.name}</span>
        </div>

        <div className="detail-row">
          <span className="label">Email</span>
          <span className="value">{formData.email}</span>
        </div>

        <div className="detail-row">
          <span className="label">Date</span>
          <span className="value">{formData.date}</span>
        </div>

        <div className="detail-row">
          <span className="label">Time</span>
          <span className="value">{formData.time}</span>
        </div>

        <div className="detail-row">
          <span className="label">Guests</span>
          <span className="value">{formData.guests}</span>
        </div>

        <div className="detail-row">
          <span className="label">Occasion</span>
          <span className="value">{formData.occasion || "None"}</span>
        </div>
      </div>
      <div className="confirmation-buttons">
         <button onClick={() => navigate(-1)}>Edit</button>
         <button onClick={() => navigate("../thankyou")}>Submit</button>
      </div>
    </div>
  );
}
