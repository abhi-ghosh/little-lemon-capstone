import {React, useState} from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })
  const [signupData, setSignupData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  })
  const [section, setSection] = useState("login");
  const changeSection = () => {
    section === "login" ? setSection("register") : setSection("login");
  }
  return (
    <>
      {
        section === "login" ?
        <LoginForm loginData={loginData} setLoginData={setLoginData} changeSection={changeSection}/>
        :<RegisterForm signupData={signupData} setSignupData={setSignupData} changeSection={changeSection}/>
      }
    </>
  );
}
