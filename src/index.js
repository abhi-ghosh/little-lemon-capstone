import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Main from './main';
import Booking from './Booking';
import ErrorPage from './ErrorPage';
import BookingForm from './BookingForm';
import ConfirmBooking from './ConfirmBooking';
import ThankYou from './ThankYou';
import Menu from './menu';
import AboutSection from './aboutSection';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <Main /> },
      {
        path: "reservations",
        element: <Booking />,
        children: [
          { index: true, element: <BookingForm /> },
          { path: "confirm", element: <ConfirmBooking /> },
          { path: "thankyou", element: <ThankYou /> }]
      },
      {path: 'menu', element: <Menu />},
      {path: 'about', element: <AboutSection />},
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
