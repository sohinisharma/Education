import React from 'react'
import CourseCard from './CourseCard';
import './CourseCard.css';
import course1 from '../../assets/images/course/01.jpg';
import course2 from '../../assets/images/course/02.jpg';
import course3 from '../../assets/images/course/03.jpg';
import course4 from '../../assets/images/course/04.jpg';
import course5 from '../../assets/images/course/05.jpg';
import course6 from '../../assets/images/course/06.jpg';
import avtar1 from '../../assets/images/course/author/01.jpg';
import avtar2 from '../../assets/images/course/author/02.jpg';
import avtar3 from '../../assets/images/course/author/03.jpg';
import avtar4 from '../../assets/images/course/author/04.jpg';
import avtar5 from '../../assets/images/course/author/05.jpg';
import avtar6 from '../../assets/images/course/author/06.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faFilter } from '@fortawesome/free-solid-svg-icons';


const Course = () => {
    const courses = [
        {
            id: 1,
            title: 'Fundamentals of Adobe XD Theory Learn New',
            video: '18x Lesson',
            imageUrl: course1,
            category: 'Online Class',
            avtar: avtar1,
            author: 'William Smith',
            read: 'Read More',
            btnBackground: '#ef6204',
        },
        {
            id: 2,
            title: 'Certified Graphic Design With Free Project Course',
            video: '18x Lesson',
            imageUrl: course2,
            category: 'Online Class',
            avtar: avtar2,
            author: 'Lora Smith',
            read: 'Read More',
            btnBackground: '#97BE5A',
        },
        {
            id: 3,
            title: 'Theory Learn New Student And Fundamentals',
            video: '18x Lesson',
            imageUrl: course3,
            category: 'Online Class',
            avtar: avtar3,
            author: 'Robot Smith',
            read: 'Read More',
            btnBackground: '#FFC700',
        },
        {
            id: 4,
            title: 'Computer Fundamentals Basic Startup Ultricies...',
            video: '18x Lesson',
            imageUrl: course4,
            category: 'Online Class',
            avtar: avtar4,
            author: 'Zinnat Zara',
            read: 'Read More',
            btnBackground: '#FF9800',
        },
        {
            id: 5,
            title: 'Boozy Halloween Drinks for the Grows Eleifend...',
            video: '18x Lesson',
            imageUrl: course5,
            category: 'Online Class',
            avtar: avtar5,
            author: 'Rajib Raj',
            read: 'Read More',
            btnBackground: '#D2649A',
        },
        {
            id: 6,
            title: 'Student Want to Learn About Sceince And Arts',
            video: '18x Lesson',
            imageUrl: course6,
            category: 'Online Class',
            avtar: avtar6,
            author: 'Angel Mili',
            read: 'Read More',
            btnBackground: '#3AA6B9',
        },
    ];

    return (
        <>
            <div className="course-top-bg-container">
                <div className="course-top-container">
                    <div>
                        <h1>Archives: Courses</h1>
                    </div>
                    <div>
                        <Link to={'/'}>Home</Link>
                        <span className='top-course-link'> / Course Page</span>
                    </div>
                </div>
                <div className='filter-container'>
                    <FontAwesomeIcon icon={faFilter} className='filter-icon' />
                    <span>Filters</span>
                    <select name="All Categories">
                        <option value="All Categories">All Categories</option>
                        <option value="Uncategories">Uncategories</option>
                        <option value="Academy">Academy</option>
                        <option value="Agency">Agency</option>
                        <option value="Bar">Bar</option>
                        <option value="Blog">Blog</option>
                        <option value="Business">Business</option>
                        <option value="Butcher Shop">Butcher Shop</option>
                        <option value="Cafe">Cafe</option>
                        <option value="Clinic">Clinic</option>
                        <option value="College">College</option>
                        <option value="Conference">Conference</option>
                        <option value="Corporate">Corporate</option>
                        <option value="Corona Virus">Corona Virus</option>
                        <option value="Covid19"></option>
                        <option value="Digital Products">Digital Products</option>
                        <option value="Doctors">Doctors</option>
                        <option value="Education">Education</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Environment">Environment</option>
                        <option value="Environmental">Environmental</option>
                        <option value="Events">Events</option>
                        <option value="Fitness">Fitness</option>
                        <option value="Food Shop">Food Shop</option>
                        <option value="GYM">GYM</option>
                        <option value="Halloween">Halloween</option>
                        <option value="Health">Health</option>
                        <option value="Healthcare">Healthcare</option>
                        <option value="Medical">Medical</option>
                        <option value="Mobile Apps">Mobile Apps</option>
                        <option value="Music">Music</option>
                        <option value="News">News</option>
                        <option value="Online Course">Online Course</option>
                        <option value="Portfolio">Portfolio</option>
                        <option value="Pregnancy">Pregnancy</option>
                        <option value="Premium">Premium</option>
                        <option value="Religion">Religion</option>
                        <option value="Restaurants">Restaurants</option>
                        <option value="Schools">Schools</option>
                        <option value="SEO">SEO</option>
                        <option value="Software">Software</option>
                        <option value="University">University</option>
                        <option value="Yoga">Yoga</option>
                        <option value="Magazine">Magazine</option>
                    </select>
                    <select name="All Language">
                        <option value="All Language">All Language</option>
                        <option value="JAVA">JAVA</option>
                        <option value="PHP">PHP</option>
                        <option value="PYTHON">PYTHON</option>
                        <option value="JAVASCRIPT">JAVASCRIPT</option>
                        <option value="HTML">HTML</option>
                    </select>
                    <select name="All Prices">
                        <option value="All Prices">All Prices</option>
                        <option value="100">100</option>
                        <option value="200">200</option>
                        <option value="300">300</option>
                        <option value="400">400</option>
                        <option value="500">500</option>
                        <option value="600">600</option>
                        <option value="700">700</option>
                        <option value="800">800</option>
                        <option value="900">900</option>
                        <option value="1000">1000</option>
                        <option value="1100">1100</option>
                        <option value="1200">1200</option>
                        <option value="1300">1300</option>
                        <option value="1400">1400</option>
                        <option value="1500">1500</option>
                        <option value="1600">1600</option>
                        <option value="1700">1700</option>
                        <option value="1800">1800</option>
                        <option value="1900">1900</option>
                        <option value="2000">2000</option>
                        <option value="2100">2100</option>
                        <option value="2200">2200</option>
                        <option value="2300">2300</option>
                        <option value="2400">2400</option>
                        <option value="2500">2500</option>
                        <option value="2600">2600</option>
                        <option value="2700">2700</option>
                        <option value="2800">2800</option>
                        <option value="2900">2900</option>
                        <option value="3000">3000</option>
                        <option value="3100">3100</option>
                        <option value="3200">3200</option>
                        <option value="3300">3300</option>
                        <option value="3400">3400</option>
                        <option value="3500">3500</option>
                        <option value="3600">3600</option>
                        <option value="3700">3700</option>
                        <option value="3800">3800</option>
                        <option value="3900">3900</option>
                        <option value="4000">4000</option>
                        <option value="4100">4100</option>
                        <option value="4200">4200</option>
                        <option value="4300">4300</option>
                        <option value="4400">4400</option>
                        <option value="4500">4500</option>
                        <option value="4600">4600</option>
                        <option value="4700">4700</option>
                        <option value="4800">4800</option>
                        <option value="4900">4900</option>
                        <option value="5000">5000</option>
                    </select>
                    <select name="All Skills">
                        <option value="All Skills">All Skills</option>
                        <option value="HTML">HTML</option>
                        <option value="CSS">CSS</option>
                        <option value="BOOTSTRAP">BOOTSTRAP</option>
                        <option value="WORDPRESS">WORDPRESS</option>
                        <option value="VUE">VUE</option>
                        <option value="REACT">REACT</option>
                        <option value="JAVA">JAVA</option>
                        <option value="ANGULAR">ANGULAR</option>
                        <option value="PHP">PHP</option>
                        <option value="PYTHON">PYTHON</option>
                        <option value="JAVASCRIPT">JAVASCRIPT</option>
                        <option value="NODE">NODE</option>
                        <option value="MONGODB">MONGODB</option>
                        <option value="JQUERY">JQUERY</option>
                        <option value="MY SQL">MY SQL</option>
                    </select>
                </div>
            </div>
            <div className="course-container">
                <div className='filter-box'>
                    <div>
                        <span className='result'>Showing 1-6 of 10 results</span>
                    </div>
                    <div>
                        <span className='result1'>Sort by :</span>
                        <select name="All Skills" className='skills'>
                            <option value="All Skills">All Skills</option>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="BOOTSTRAP">BOOTSTRAP</option>
                            <option value="WORDPRESS">WORDPRESS</option>
                            <option value="VUE">VUE</option>
                            <option value="REACT">REACT</option>
                            <option value="JAVA">JAVA</option>
                            <option value="ANGULAR">ANGULAR</option>
                            <option value="PHP">PHP</option>
                            <option value="PYTHON">PYTHON</option>
                            <option value="JAVASCRIPT">JAVASCRIPT</option>
                            <option value="NODE">NODE</option>
                            <option value="MONGODB">MONGODB</option>
                            <option value="JQUERY">JQUERY</option>
                            <option value="MY SQL">MY SQL</option>
                        </select>
                    </div>
                </div>
                <div className="course-grid">
                    {courses.map(course => (
                        <div key={course.id}>
                            <CourseCard
                                key={course.id}
                                title={course.title}
                                video={course.video}
                                imageUrl={course.imageUrl}
                                category={course.category}
                                avtar={course.avtar}
                                author={course.author}
                                read={course.read}
                                btnBackground={course.btnBackground}
                            />
                        </div>
                    ))}
                </div>
                <div className="course-pagination">
                <a href="#">
                <FontAwesomeIcon icon={faAngleLeft} />
                </a>
                <a href="#">01</a>
                <a href="#" className="active">02</a>
                <a href="#">03</a>
                <a href="#">
                <FontAwesomeIcon icon={faAngleRight} />
                </a>
            </div>
            </div>            
        </>
    )
}

export default Course