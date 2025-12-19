import { useOutletContext, useNavigate } from "react-router";

export default function ConfirmBooking() {
  const { formData } = useOutletContext();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Confirm Your Booking</h2>

      <p>Date: {formData.date}</p>
      <p>Time: {formData.time}</p>
      <p>Guests: {formData.guests}</p>
      <p>Occasion: {formData.occasion}</p>

      <button onClick={() => navigate(-1)}>Edit</button>
      <button onClick={() => navigate("../thankyou")}>Submit</button>
    </div>
  );
}
