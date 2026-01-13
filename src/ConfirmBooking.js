import { useOutletContext, useNavigate } from "react-router";

export default function ConfirmBooking() {
  const { formData } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="confirmation">
      <h2>Confirm Your Booking</h2>
      <div className="confirmation-details">
        <p><span>Name:</span> {formData.name}</p>
        <p><span>Email:</span> {formData.email}</p>
        <p><span>Date:</span> {formData.date}</p>
        <p><span>Time:</span> {formData.time}</p>
        <p><span>Guests:</span> {formData.guests}</p>
        <p><span>Occasion:</span> {formData.occasion}</p>
      </div>
      <div className="confirmation-buttons">
         <button onClick={() => navigate(-1)}>Edit</button>
         <button onClick={() => navigate("../thankyou")}>Submit</button>
      </div>
    </div>
  );
}
