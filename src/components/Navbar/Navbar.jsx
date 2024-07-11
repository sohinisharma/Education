import React, { useEffect, useState, useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/01.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInfoCircle, faTimes, faUser, faUsers, faPhone, faMapMarkerAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGoogle, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navbarRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                // Click outside the navbar
                setIsOpen(false);
                setDropdownOpen(false);
            }
        };

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const toggleInfo = () => {
        if (window.innerWidth <= 1040) {
            setHeaderVisible(!headerVisible);
        }
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const closeDropdown = () => {
        setDropdownOpen(false);
    };


    return (
        <div className={`navbar-container ${headerVisible ? '' : 'info-open'}`} ref={navbarRef}>
            {headerVisible && (
                <div className='header-container'>
                    <div className='first-nav'>
                        <div className='phone'><FontAwesomeIcon icon={faPhone} /> +800-123-4567 6587</div>
                        <div><FontAwesomeIcon icon={faMapMarkerAlt} /> Beverley, New York 224 USA</div>
                    </div>

                    <div className='second-nav'>
                        <div className='icon-div1'> Find us on: </div>
                        <div className='icon-div'><FontAwesomeIcon icon={faGoogle} className='icon' /></div>
                        <div className='icon-div'><FontAwesomeIcon icon={faFacebook} className='icon' /></div>
                        <div className='icon-div'><FontAwesomeIcon icon={faTwitter} className='icon' /></div>
                        <div className='icon-div'><FontAwesomeIcon icon={faYoutube} className='icon' /></div>
                        <div className='icon-div'><FontAwesomeIcon icon={faInstagram} className='icon' /></div>
                    </div>
                </div>
            )}

            <div className={`nav-container ${headerVisible ? '' : 'hidden'}`}>
                <nav>
                    <div className='logo-container'>
                        <img src={logo} alt="logo" />
                    </div>

                    {/* Navbar menu items */}
                    <ul className={`navbar ${isOpen ? 'active' : ''}`}>
                        <div className='li-div'>
                            <li><Link className='nav-link' to="/" onClick={closeMenu}>Home</Link></li>
                        </div>
                        <div className='li-div'>
                            <li><Link className='nav-link' to="/courses" onClick={closeMenu}>Courses</Link></li>
                        </div>
                        <div className='li-div'>
                            <li><Link className='nav-link' to="/blog" onClick={closeMenu}>Blog</Link></li>
                        </div>
                        <div className='li-div'>
                        <li className={dropdownOpen ? 'active' : ''} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
                            <div className='nav-link'>Pages</div>
                            {dropdownOpen && (
                                <div className='pages-dropdown' onClick={closeDropdown}>
                                    <Link to="/about" className='pages-dropdown-link' onClick={closeMenu}>About</Link>
                                    <Link to="/creators" className='pages-dropdown-link' onClick={closeMenu}>Team</Link>
                                    <Link to="/instructor" className='pages-dropdown-link' onClick={closeMenu}>Instructor</Link>
                                    <Link to="/error" className='pages-dropdown-link' onClick={closeMenu}>404</Link>
                                </div>
                            )}
                        </li>
                            </div>                    
                        <div className='li-div'>
                            <li><Link className='nav-link' to="/contact" onClick={closeMenu}>Contact</Link></li>
                        </div>
                    </ul>

                    {/* Login and Signup buttons */}
                    <div className='log-sign'>
                        <button className='light-btn'><Link to="/login" className='log-btn'>
                            <FontAwesomeIcon icon={faUser} />Login</Link></button>
                        <button className='dark-btn'><Link to="/register" className='sign-btn'>
                            <FontAwesomeIcon icon={faUsers} />Signup</Link></button>
                    </div>

                    {/* Login and Signup icons for mobile */}
                    <div className='log-sign-mv'>
                        <div onClick={toggleDropdown}>
                            <FontAwesomeIcon icon={faUser} className='log-sign-icon' />
                        </div>
                        {dropdownOpen && (
                            <div className='dropdown'>
                                <div>
                                    <Link to="/login" className='log-icon' onClick={closeDropdown}>
                                        <FontAwesomeIcon icon={faUser} className='ls-icon' /> Login
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/register" className='sign-icon' onClick={closeDropdown}>
                                        <FontAwesomeIcon icon={faUserPlus} className='ls-icon' /> Signup
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Show hamburger icon if navbar is closed */}
                    <div className='menu-toggle' onClick={toggleMenu}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className='fa-icons' />
                    </div>

                    <div className='info-icon' onClick={toggleInfo}>
                        <FontAwesomeIcon icon={faInfoCircle} className='fa-icons' />
                    </div>

                </nav>
            </div>
        </div>
    );
};

export default Navbar;
