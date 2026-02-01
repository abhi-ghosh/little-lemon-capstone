import {React} from 'react';
import {Link} from 'react-router';
import wrong from './assets/cross-button.png';
import right from './assets/check-button.png';
export default function RegisterForm({signupData, setSignupData, changeSection}) {
  const handleChange = (e)=>{
    setSignupData (prev => (
      {
        ...prev,
        [e.target.name]: e.target.value
      }
    ))
  }
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signupData.email);
  const password = signupData.password;
  const hasMinLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[@$!%*?&#]/.test(password);
  const passwordValid = hasMinLength && hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
  const emailError = signupData.email && !emailValid;
  const passwordError = signupData.password && !passwordValid;
  const formValid = emailValid && passwordValid && signupData.firstname && signupData.lastname;
  return (
    <form className='registerform'>
      <label htmlFor="firstname">First Name - </label>
      <input className={signupData.firstname? 'maderight': ''}
        name='firstname' id='firstname' type='text'
        placeholder='Your first name' onChange={handleChange}
        value={signupData.firstname}
      />
      <label htmlFor="lastname">Last Name - </label>
      <input className={signupData.lastname? 'maderight': ''}
        name='lastname' id='lastname' type='text'
        placeholder='Your last name' onChange={handleChange}
        value={signupData.lastname}
      />
      <label htmlFor="email">Email - </label>
      <div className='registeremailcontainer'>
        <input name='email' id='email' type='text' placeholder='Your email'
        onChange={handleChange} value={signupData.email} className={emailError? 'madeerror': signupData.email? 'maderight': ''}
      />
        {emailError && (<span className=''>Please enter a valid email</span>)}
      </div>
      <div className='passwordcontainer'>
        <label htmlFor="password">Password - </label>
        <input className={passwordError? 'madeerror': signupData.password ? 'maderight': ''} name='password' id='password' type='password' placeholder='Your password' onChange={handleChange} value={signupData.password}/>
        <div className='passwordrequirements'>
          <p className={hasMinLength? 'greencheck': 'redcross'}>{hasMinLength ? <img src={right} alt='check'/> : <img src={wrong} alt='cross'/>} Minimum 8 characters</p>
          <p className={hasUppercase? 'greencheck': 'redcross'}>{hasUppercase ? <img src={right} alt='check'/> : <img src={wrong} alt='cross'/>} At least one uppercase letter</p>
          <p className={hasLowercase? 'greencheck': 'redcross'}>{hasLowercase ? <img src={right} alt='check'/> : <img src={wrong} alt='cross'/>} At least one lowercase letter</p>
          <p className={hasNumber? 'greencheck': 'redcross'}>{hasNumber ? <img src={right} alt='check'/> : <img src={wrong} alt='cross'/>} At least one number</p>
          <p className={hasSpecialChar? 'greencheck': 'redcross'}>{hasSpecialChar ? <img src={right} alt='check'/> : <img src={wrong} alt='cross'/>} At least one special character</p>
        </div>
      </div>
      <button disabled={!formValid} className={!formValid? 'nologin': ''} type='submit'>Register</button>
      <p>Already have an account? <Link onClick={()=>{changeSection(); window.scrollTo(0, 0)}}>Login </Link></p>
    </form>
  )
}