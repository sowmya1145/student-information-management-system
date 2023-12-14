import React from 'react'

const Signup = () => {
  return (
    <div>
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
    </div>
  )
}

export default Signup
