import React, {useState} from 'react';
import './Login.css'
const Login = () => {
    const [action,setAction]=useState("Login");
  return (
      <div className='container'>
      <div className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>
      </div>
     <div className="inputs">
        {action=="Login"?<div></div>:<div className="input"> 
      <input type='text' placeholder='First Name' required/>
      </div>}

      {action=="Login"?<div></div>:<div className="input"> 
      <input type='text' placeholder='Last Name' required/>
      </div>}
    
      <div className="input"> 
      <input type='email' placeholder='Email'/>
      </div>

      <div className="input"> 
      <input type='password' placeholder='Password'/>
      </div>
      {action=="Login"?<div></div>:<div className="input"> 
      <input type='password' placeholder='Confirm Password' required/>
      </div>}
      {action=="Login"?<div></div>:<div className="input"> 
      <input type='text' placeholder='Phone no' required/>
      </div>}

      {action=="Login"?<div></div>:
      <center>Gender&nbsp;&nbsp;&nbsp;
      <input type="radio" name="hi" value="Male" id="Male"></input>
      <label htmlFor='Male'>Male  </label>
      <input type="radio" name="hi" value="Female" id="Female"></input>
      <label htmlFor='Female'>Female</label>
      </center>}
      </div>

      {action=="Sign Up"?<div></div>:<center><div className="forgot-password">forgot password? <span>click here</span></div></center>
      }
      <div className="submit-container">
      <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div> 
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      </div>
      </div>
  );
};

export default Login;
