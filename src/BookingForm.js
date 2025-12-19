import { useOutletContext, useNavigate } from "react-router";

export default function BookingForm() {
  const { formData, setFormData } = useOutletContext();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  const maxDateObj = new Date();
  maxDateObj.setMonth(maxDateObj.getMonth() + 6);
  const maxDate = maxDateObj.toISOString().split("T")[0];
  const isFormValid =
  formData.date &&
  formData.time &&
  formData.guests > 0 &&
  formData.occasion !== "";

  return (
    <div>
      <h1>Book a Table</h1>
      <form>
      <input type="date" min={minDate} max={maxDate} name="date" value={formData.date} onChange={handleChange} />
      <input type="time" min="12:00" max= "22:00" name="time" value={formData.time} onChange={handleChange} />
      <input type="number" min="1" max="8" name="guests" value={formData.guests} onChange={handleChange} />
      <select name="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="">Select</option>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="other">Other</option>
      </select>
      <button disabled={!isFormValid} type="button" onClick={() => navigate("confirm")}>Next</button>
    </form>
    </div>
  );
}
