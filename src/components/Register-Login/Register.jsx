import React, { useState } from 'react';
import './Register-Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Register = () => {
    const [password, setPassword] = useState('');
    const [passwordValid, setPasswordValid] = useState(true);
    const [fullname, setFullName] = useState("");
    const [mobilenumber, setMobileNumber] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
            console.log('Form submitted:', { fullname, mobilenumber, email, password });
            navigate('/profile'); // Redirect to profile page
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        validatePassword(newPassword);
    };

    const validatePassword = (password) => {
        // Regular expression to enforce at least 6 characters and one special character
        const passwordRegex = /^(?=.*[!@#$%^&*]).{6,}$/;
        setPasswordValid(passwordRegex.test(password));
    };

    return (
        <>
        <div className="main-container">
        <div className='register-container'>
            <form className='form-container' onSubmit={handleSubmit}>
                <div className='heading'>
                    <h2>Register Now</h2>
                </div>
                <div className="input-box">
                    <input type="text" placeholder='Full Name' value={fullname} onChange={(e) => setFullName(e.target.value)} required/>
                </div>
                <div className="input-box">
                    <input type="number" placeholder='Mobile Number' value={mobilenumber} onChange={(e) => setMobileNumber(e.target.value)} required/>
                </div>
                <div className="input-box">
                    <input type="email" placeholder='E-Mail' value={email} onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Create Password' value={password} onChange={handlePasswordChange} required/>
                    {!passwordValid && (
                        <p className="error-message">Password must be at least 6 characters long and include at least one special character (!@#$%^&*)</p>
                    )}
                </div>
                <div className="btn-box">
                    <button className='form-submit' type='submit'>Get Started Now</button>
                </div>
                <div className='link-btn'>
                    <Link to='/login'>Are you a member? Login</Link>
                </div>
                <div className="or-container">
                    <div className='or'><span className='or-text'>OR</span></div>
                </div>
                <div className='heading'>
                    <h3>Register With Social Media</h3>
                </div>
                <div className="icons-container">
                    <div className='icons-div'><a href='https://www.facebook.com/IFDAINSTITUTE/'><FaFacebook className='icon-facebook' /></a></div>
                    <div className='icons-div'><a href='https://in.linkedin.com/company/ifda-institute'><FaLinkedin className='icon-linkedin' /></a></div>
                    <div className='icons-div'><a href='https://www.instagram.com/ifda_institute/?hl=en'><FaInstagram className='icon-instagram' /></a></div>
                    <div className='icons-div'><a href='https://www.youtube.com/c/IFDAInstitute'><FaYoutube className='icon-youtube' /></a></div>
                </div>
            </form>
        </div>
        </div>
        </>
    );
}

export default Register;
