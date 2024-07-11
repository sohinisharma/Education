import React from 'react';
import './About.css';
import edit from '../../assets/images/about/edit.png';
import icon1 from '../../assets/images/about/icon/01.jpg';
import icon2 from '../../assets/images/about/icon/02.jpg';
import icon3 from '../../assets/images/about/icon/03.jpg';
import { Link } from 'react-router-dom';
import '../Feedback/Feedback.css';
import video from '../../assets/images/feedback/01.jpg';
import student1 from '../../assets/images/feedback/student/01.jpg';
import student2 from '../../assets/images/feedback/student/02.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faStar } from '@fortawesome/free-solid-svg-icons';
import '../Creators/Creators.css';
import CreatorsCard from '../Creators/CreatorsCard';
import creator1 from '../../assets/images/instructor/01.jpg';
import creator2 from '../../assets/images/instructor/02.jpg';
import creator3 from '../../assets/images/instructor/03.jpg';
import creator4 from '../../assets/images/instructor/04.jpg';
import skill1 from '../../assets/images/skill/icon/01.jpg';
import skill2 from '../../assets/images/skill/icon/02.jpg';
import skill3 from '../../assets/images/skill/icon/03.jpg';
import skill4 from '../../assets/images/skill/icon/04.jpg';
import '../Achieve/Achieve.css';
import '../Blog/Blog.css';
import BlogCard from '../Blog/BlogCard';
import blog1 from '../../assets/images/blog/01.jpg';
import blog2 from '../../assets/images/blog/02.jpg';
import blog3 from '../../assets/images/blog/03.jpg';


const About = () => {

    const creatorsData = [
        {
            id: 1,
            title: 'Emilee Logan',
            about: 'Master of Education Degree',
            imageUrl: creator1,
            course: '08 Courses',
            student: '30 Students',
        },
        {
            id: 2,
            title: 'Donald Logan',
            about: 'Master of Education Degree',
            imageUrl: creator2,
            course: '08 Courses',
            student: '30 Students',
        },
        {
            id: 3,
            title: 'Oliver Porter',
            about: 'Master of Education Degree',
            imageUrl: creator3,
            course: '08 Courses',
            student: '30 Students',
        },
        {
            id: 4,
            title: 'Nahla Jones',
            about: 'Master of Education Degree',
            imageUrl: creator4,
            course: '08 Courses',
            student: '30 Students',
        },
    ];


    const blogs = [
        {
            id: 1,
            title: 'Scottish Creatives To Receive Funded Business.',
            user: 'Begrass Tyson',
            imageUrl: blog1,
            calendar: 'April 23,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 2,
            title: 'Scottish Creatives To Receive Funded Business.',
            user: 'Begrass Tyson',
            imageUrl: blog2,
            calendar: 'April 23,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '4',
        },
        {
            id: 3,
            title: 'Scottish Creatives To Receive Funded Business.',
            user: 'Begrass Tyson',
            imageUrl: blog3,
            calendar: 'April 23,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '6',
        },
    ];


    return (
        <>
            <div className="about-top-bg-container">
                <div className="about-top-container">
                    <div>
                        <h1>About Our Edukon</h1>
                    </div>
                    <div>
                        <Link to={'/'}>Home</Link>
                        <span className='top-about-link'> / About</span>
                    </div>
                </div>
            </div>
            <div className='about-container-about'>
                <div className="about-img-container">
                    <div className='about-img'><img src={edit} alt="about-img" /></div>
                </div>
                <div className="about-header">
                    <h3>ABOUT OUR EDUKON</h3>
                    <h1>Good Qualification Services And Better Skills</h1>
                    <p>Distinctively provide acces mutfuncto users whereas transparent proceses somes ncentivize eficient functionalities rather than extensible archtectur communicate leveraged services and cross-platform.</p>
                    <div className="about-content">
                        <div className="sr-left">
                            <img src={icon1} alt="skilled-icon" />
                        </div>
                        <div className="sr-right">
                            <h4>Skilled Instructors</h4>
                            <p>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="sr-left">
                            <img src={icon2} alt="skilled-icon" />
                        </div>
                        <div className="sr-right">
                            <h4>Get Certificate</h4>
                            <p>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                    <div className="about-content">
                        <div className="sr-left">
                            <img src={icon3} alt="skilled-icon" />
                        </div>
                        <div className="sr-right">
                            <h4>Online Classes</h4>
                            <p>Distinctively provide acces mutfuncto users whereas communicate leveraged services</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* feedback section start */}
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
            {/* feedback section end */}

            {/* creators section start */}
            <div className='creators-container'>
                <div className="creators-header">
                    <h3>WORLD-CLASS INSTRUCTORS</h3>
                    <h1>Classes Taught By Real Creators</h1>
                </div>

                <div className="creators-grid">
                    {creatorsData.map(creator => (
                        <div key={creator.id}>
                            <CreatorsCard
                                key={creator.id}
                                title={creator.title}
                                about={creator.about}
                                imageUrl={creator.imageUrl}
                                course={creator.course}
                                student={creator.student}
                            />
                        </div>
                    ))}
                </div>
                <div className='content'>
                    <span>Want to help people learn, grow and achieve more in life? </span>
                    <span><Link>Become an instructor </Link></span>
                </div>
            </div>
            {/* creators section end */}

            {/* project management section start  */}
            <div className='management-container'>
                <div className="left-container">
                    <div className="left-content">
                        <h1>Build Your Project Management Skills Online Anytime</h1>
                        <button>Sign Up Now</button>
                    </div>
                </div>
                <div className="right-container">
                    <div className="right-content">
                        <div className="right-content-flex">
                            <div className='skill-img-flex'>
                                <div className="skill-img">
                                    <img src={skill1} />
                                </div>
                                <div className='skill-content'>
                                    <h2>Skilled Instructors</h2>
                                    <span>You pick the schedule.</span>
                                </div>
                            </div>
                            <div className='skill-img-flex'>
                                <div className="skill-img">
                                    <img src={skill2} />
                                </div>
                                <div className='skill-content'>
                                    <h2>Get Certificate</h2>
                                    <span>You pick the schedule.</span>
                                </div>
                            </div>
                        </div>
                        <div className="right-content-flex">
                            <div className='skill-img-flex'>
                                <div className="skill-img">
                                    <img src={skill3} />
                                </div>
                                <div className='skill-content'>
                                    <h2>Online Classes</h2>
                                    <span>You pick the schedule.</span>
                                </div>
                            </div>
                            <div className='skill-img-flex'>
                                <div className="skill-img">
                                    <img src={skill4} />
                                </div>
                                <div className='skill-content'>
                                    <h2>Educator Helps</h2>
                                    <span>You pick the schedule.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* project management section end  */}

            {/* achieve section start */}
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
            {/* achieve section end */}

            {/* blog section start */}
            <div className='blog-container'>
                <div className="blog-header">
                    <h3>FORM OUR BLOG POSTS</h3>
                    <h1>More Articles From Resource Library</h1>
                </div>
                <div className="blog-grid">
                    {blogs.map(blog => (
                        <div key={blog.id}>
                            <BlogCard
                                key={blog.id}
                                title={blog.title}
                                user={blog.user}
                                imageUrl={blog.imageUrl}
                                calendar={blog.calendar}
                                about={blog.about}
                                read={blog.read}
                                msg={blog.msg}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* blog section end */}
        </>
    )
}

export default About;