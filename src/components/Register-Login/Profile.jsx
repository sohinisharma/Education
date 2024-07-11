import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register-Login.css';

const Profile = () => {
    const [user] = useState({
        fullname: 'sohini sharma',
        email: 'sohinisharma@gmail.com'
    });
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear token from local storage (if implemented)
        localStorage.removeItem('token');
        navigate('/'); // Redirect to home 
    };

    return (
      <>
      <div className="main-container">
        <div className='profile-container'>
            <form className='form-container'>
              <div className="heading">
                <h2>Profile Page</h2>
                </div>
                <h3>Welcome, {user.fullname}!</h3>
                <p>Email: {user.email}</p>
                <div className="btn-box">
                <button onClick={handleLogout} className='logout-button'>Logout</button>
                </div>
            </form>
        </div>
        </div>
        </>
    );
};

export default Profile;
