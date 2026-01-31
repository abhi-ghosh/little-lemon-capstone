import {React, useState} from 'react';
import LoginForm from './LoginForm';
export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const [section, setSection] = useState("login");
  const changeSection = () => {
    section === "login" ? setSection("register") : setSection("login");
  }
  return (
    <div className="login-container">
      {section === "login" && <LoginForm loginData={loginData} setLoginData={setLoginData} changeSection={changeSection}/>}
    </div>
  );
}
