import React from 'react';
import './Creators.css';
import CreatorsCard from './CreatorsCard';
import creator1 from '../../assets/images/instructor/01.jpg';
import creator2 from '../../assets/images/instructor/02.jpg';
import creator3 from '../../assets/images/instructor/03.jpg';
import creator4 from '../../assets/images/instructor/04.jpg';
import creator5 from '../../assets/images/instructor/05.jpg';
import creator6 from '../../assets/images/instructor/06.jpg';
import creator7 from '../../assets/images/instructor/07.jpg';
import creator8 from '../../assets/images/instructor/08.jpg';
import { Link } from 'react-router-dom';

const Creators = () => {

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
        {
            id: 5,
            title: 'Tomi Hensley',
            about: 'Master of Education Degree',
            imageUrl: creator5,
            course: '08 Courses',
            student: '30 Students',
        },
        {
            id: 6,
            title: 'Foley Patrik',
            about: 'Master of Education Degree',
            imageUrl: creator6,
            course: '08 Courses',
            student: '30 Students',
        },
        {
            id: 7,
            title: 'Lily Forster',
            about: 'Master of Education Degree',
            imageUrl: creator7,
            course: '08 Courses',
            student: '30 Students',
        },
        {
            id: 8,
            title: 'Alex Itzel',
            about: 'Master of Education Degree',
            imageUrl: creator8,
            course: '08 Courses',
            student: '30 Students',
        },
    ];

    return (
        <>
            <div className="creators-top-bg-container">
                <div className="creators-top-container">
                    <div>
                        <h1>All Team Members</h1>
                    </div>
                    <div>
                        <Link to={'/'}>Home</Link>
                        <span className='top-creators-link'> / Team</span>
                    </div>
                </div>
            </div>
            <div className='creators-container'>
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
                <div className="achieve-inner-box">
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
        </>
    )
}

export default Creators;