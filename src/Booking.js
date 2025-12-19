import { Outlet } from "react-router";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: ""
  });

  return (
    <div className="booking">
      <Outlet context={{ formData, setFormData }} />
    </div>
  );
}
