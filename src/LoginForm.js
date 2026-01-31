import {React} from 'react'
import { Link } from "react-router";
export default function LoginForm({loginData, setLoginData, changeSection}) {
  const handleChange = (e) => {setLoginData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginData.email);
  const passwordValid = loginData.password.length >= 8;
  const emailError = loginData.email && !emailValid;
  const passwordError = loginData.password && !passwordValid;
  const formValid = emailValid && passwordValid;
  return (
    <div className='loginform'>
      <div className='emailcontainer'>
        <label htmlFor="email">Email - </label>
        <input className={ emailError? 'madeerror': loginData.email? 'maderight': ''} id="email" type="text" placeholder="Email" name='email' value={loginData.email} onChange={handleChange} />
        {emailError && (<span className=''>Please enter a valid email</span>)}
      </div>
      <div className='passwordcontainer'>
        <label htmlFor="password">Password - </label>
        <input className={ passwordError? 'madeerror': loginData.password ? 'maderight': ''}  id="password" type="password" placeholder="Password" name='password' value={loginData.password} onChange={handleChange} />
        {passwordError && (<span className=''>Password must be at least 8 characters</span>)}
      </div>
      <button className={!formValid ? 'nologin': ''} disabled={!formValid} type='submit'>Login</button>
      <p>Don't have an account? <Link onClick={changeSection}>Register </Link></p>
    </div>
  );
}