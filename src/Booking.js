import { Outlet } from "react-router";
import { useEffect, useState } from "react";
import { fetchAPI } from "./api";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    occasion: ""
  });
  const [times, setTimes] = useState([]);

  useEffect(() => {
    if (!formData.date) return;

    const dateObj = new Date(formData.date);
    if (isNaN(dateObj)) return;

    setTimes(fetchAPI(dateObj));
  }, [formData.date]);

  return (
    <div className="booking">
      <Outlet context={{ formData, setFormData, times }} />
    </div>
  );
}
