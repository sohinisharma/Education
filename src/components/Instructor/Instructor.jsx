import React from 'react';
import './Instructor.css';
import { Link } from 'react-router-dom';
import brand from "../../assets/images/category/icon/15.jpg"
import course from "../../assets/images/category/icon/16.jpg"
import future from "../../assets/images/category/icon/17.jpg"
import '../Feedback/Feedback.css';
import video from '../../assets/images/feedback/01.jpg';
import student1 from '../../assets/images/feedback/student/01.jpg';
import student2 from '../../assets/images/feedback/student/02.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import '../Achieve/Achieve.css';

const Instructor = () => {
    return (
        <>
            <div className="instructor-top-bg-container">
                <div className="instructor-top-container">
                    <div>
                        <h1>All Best Instructors</h1>
                    </div>
                    <div>
                        <Link to={'/'}>Home</Link>
                        <span className='top-instructor-link'> / Instructor</span>
                    </div>
                </div>
            </div>
            <div className="potential-container">
                <div className="potential-header">
                    <h3>TEACH ON EDULON</h3>
                    <h1>Discover Your Potential. Make A Global Impact.</h1>
                </div>
                <div className="potential-inner-container">
                    <div className="potential-inner">
                        <img src={brand} />
                        <h2>Build Your Brand</h2>
                        <span>Like graphic design, business anaytics coding and much more</span>
                    </div>
                    <div className="potential-inner">
                        <img src={course} />
                        <h2>Plan Your Course</h2>
                        <span>Like graphic design, business anaytics coding and much more</span>
                    </div>
                    <div className="potential-inner">
                        <img src={future} />
                        <h2>Help Shape Future</h2>
                        <span>Like graphic design, business anaytics coding and much more</span>
                    </div>
                </div>
                <div className='browse-btn-container'><button className="browse-button"><Link className='browse-btn-link'>Browse All Categories</Link></button></div>
            </div>

            {/* Feedback section start */}
            <div className='feedback-container'>
                <div className="feedback-header">
                    <h3>LOVED BY 200,000+ STUDENTS</h3>
                    <h1>Students Community Feedback</h1>
                </div>
                <div className="video-section">
                    <div className="video-container">
                        <div className="video-img">
                            <img src={video} alt="video" />
                        </div>
                        <div className='video-icon'>
                            <a href="https://youtu.be/MU3qrgR2Kkc">
                                <FontAwesomeIcon icon={faPlay} className='v-icon' /></a>
                        </div>
                    </div>
                    <div className="community-container">
                        <div className='l-section'>
                            <div className="community">
                                <div className="l-community">
                                    <div className='community-img'>
                                        <img src={student1} />
                                    </div>
                                    <div>
                                        <h4>Oliver Beddows</h4>
                                        <p>UX designer</p>
                                    </div>
                                </div>
                                <div className="r-community">
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} className='community-icon' />
                                    ))}
                                </div> </div>
                            <div className="community-footer">
                                <p>Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
                            </div>
                        </div>
                        <div className='r-section'>
                            <div className="community">
                                <div className="l-community">
                                    <div className='community-img'>
                                        <img src={student2} />
                                    </div>
                                    <div>
                                        <h4>Madley Pondor</h4>
                                        <p>UX designer</p>
                                    </div>
                                </div>
                                <div className="r-community">
                                    {[...Array(5)].map((_, index) => (
                                        <FontAwesomeIcon key={index} icon={faStar} className='community-icon' />
                                    ))}
                                </div>
                            </div>
                            <div className="community-footer">
                                <p>Rapidiously buildcollaboration anden deas sharing viaing and bleedng edgeing nterfaces fnergstcally plagiarize teams anbuilding paradgms whereas goingi forward process and monetze</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Feedback section end */}

            {/* Achieve section start */}
            <div className='achieve-container'>
                <div className="achieve-header">
                    <h3>START TO SUCCESS</h3>
                    <h1>Achieve Your Goals With Edukon</h1>
                </div>
                <div className="how-achieve">
                    <div className='achieve-count'>
                        <h1>30+</h1>
                        <p>Years of Language Education Experience</p>
                    </div>
                    <div className='achieve-count'>
                        <h1>3034+</h1>
                        <p>Years of Language Education Experience</p>
                    </div>
                    <div className='achieve-count'>
                        <h1>330+</h1>
                        <p>Years of Language Education Experience</p>
                    </div>
                    <div className='achieve-count'>
                        <h1>2300+</h1>
                        <p>Years of Language Education Experience</p>
                    </div>
                </div>
                <div className="achieve-inner">
                    <div className="achieve-inner-box1">
                        <div className='h-and-p'>
                            <h2>Start Teaching Today</h2>
                            <p>Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica</p>
                            <button className='instructor-btn'>Become A Instructor</button>
                        </div>
                        <div></div>
                    </div>
                    <div className="achieve-inner-box2">
                        <div className='h-and-p'>
                            <h2>If You Join Our Course</h2>
                            <p>Seamlessly engage technically sound coaborative reintermed goal oriented content rather than ethica</p>
                            <button className='register-btn'>Register For Free</button>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            {/* Achieve section end */}
        </>
    )
}

export default Instructor;