import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Homepage.css';
const Homepage = () => {
     let date = new Date();
    return (
        <div className='header'>
    <div className='nav'>
	<div className='logo'> <h1>student database </h1> </div>
            
	<div class='menu'>
		<a href="#">Home</a>
		<a href="#">about</a>
		<a href="#">Features</a>
        <a href="#">Results</a>
		<a href="#">contact</a>
	</div>
</div>

	<div className='main'>
		<div className='section'>
			<h1>Student database, the social learning platform</h1>
			<h3>YOUR CLASSROOM IN THE CLOUD</h3>
           <br></br>
           <br></br>
		   
		<div className='btntwo'>
           <NavLink to='/LoginForm'>Login</NavLink>
        </div>
        </div>
		</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
        <footer className='footer bg-black flex flex-center' id = "footer">
                <div className='container flex flex-center w-100'>
                    <div className='grid footer-content text-center'>
                        <p className='text'>                                                             We will give our best!</p>
                        <span className='text'>&copy; {date.getFullYear().toString()} Studentinfo. Theme</span>
                    </div>
                </div>
            </footer>
	</div>
   
  );
}

export default Homepage;
