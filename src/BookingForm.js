import { useOutletContext, useNavigate } from "react-router";

export default function BookingForm() {
  const { formData, setFormData } = useOutletContext();
  const navigate = useNavigate();
  const timeFunc = (open,close) => {
    const time = [];
    for (let i=open; i<=close; i++){
        if (i>=15 && i<17) continue;
        for (let j=0; j<60; j+=30){
            if (i === close && j > 0) break;
            time.push (`${String(i).padStart(2, "0")}:${String(j).padStart(2, "0")}`)
        }
    }
    return time;
}
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDate = today.toLocaleDateString("en-CA");

  const maxDateObj = new Date();
  maxDateObj.setMonth(maxDateObj.getMonth() + 6);
  const maxDate = maxDateObj.toISOString().split("T")[0];

  const isGuestsValid = formData.guests >= 1 && formData.guests <= 8; //Check if "guests" is between 1 and 8
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email); //Basic email format validation
  const emailError = formData.email && !isEmailValid;
  const emailSuccess =formData.email && isEmailValid;

  const isFormValid =
  formData.name &&
  formData.email &&
  formData.date &&
  formData.time &&
  isGuestsValid &&
  isEmailValid;
  return (
    <div>
      <h1>Book a Table</h1>
      <form className="form">
        <div className="form-row">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </div>

        <div className="form-row">
          <label htmlFor="email">Email:</label>

          <div className="input-column">
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={emailError
                          ? "input-error"
                          : emailSuccess
                          ? "input-success"
                          : ""
              }
            />

            {emailError && (
              <span className="error">Please enter a valid email address.</span>
            )}
          </div>
        </div>

        <div className="form-row">
          <label htmlFor="date">Date:</label>
          <input
            id="date"
            type="date"
            min={minDate}
            max={maxDate}
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            <option value="" disabled>Select a time</option>
            {timeFunc(12, 22).map(time => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <label htmlFor="guests">Number of Guests:</label>

          <div className="input-column">
            <input
              id="guests"
              type="number"
              inputMode="numeric"
              pattern="[1-9]*"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className={!isGuestsValid ? "input-error" : "input-success"}
            />

            {!isGuestsValid && (
              <span className="error">Please enter a number between 1 and 8.</span>
            )}
          </div>
        </div>


        <div className="form-row">
          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">None</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button
          className="primary-btn"
          disabled={!isFormValid}
          type="button"
          onClick={() => navigate("confirm")}
        >
          Next
        </button>
      </form>
    </div>
  );
}
