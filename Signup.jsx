import React from 'react';
import './Signup.css';
import { NavLink } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Signup = () => {
  return (
    <div className='body'>
      <div className='wrapper'> 
    <form action="">
        <h1>Sign Up</h1>
        <div className="input-box">
            <input type="text" placeholder='username' required  />
            <FaUser className='icon'/>
        </div>
        <div className="input-box">
            <input type="email" placeholder='email' required  />
            <MdEmail className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='password' required  />
            <FaLock className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" placeholder='confirm password' required  />
            <FaLock className='icon'/>
        </div>

        <button type="submit">Sign Up</button>
        <div className="register-link">
            <p>Already a member?   <NavLink to='/LoginForm'>Login</NavLink></p>
        </div>
    </form>
     </div>
  </div>
  );
;}

export default Signup;
