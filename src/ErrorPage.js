import React from "react";
import { Link } from "react-router";
export default function ErrorPage() {
  return (
    <div>
      <img src="https://http.cat/404" alt="404" />
       <h1>Oops! This page does not exist</h1>
       <Link to="/"><button>Go back to Home Page</button></Link>
    </div>
  )
}