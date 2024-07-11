import React from 'react';
import './Blog.css';
import BlogCard from './BlogCard';
import blog1 from '../../assets/images/blog/01.jpg';
import blog2 from '../../assets/images/blog/02.jpg';
import blog3 from '../../assets/images/blog/03.jpg';
import blog4 from '../../assets/images/blog/04.jpg';
import blog5 from '../../assets/images/blog/05.jpg';
import blog6 from '../../assets/images/blog/06.jpg';
import blog7 from '../../assets/images/blog/07.jpg';
import blog8 from '../../assets/images/blog/08.jpg';
import blog9 from '../../assets/images/blog/09.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faFilter } from '@fortawesome/free-solid-svg-icons';

const Blog = () => {

    const blogs = [
        {
            id: 1,
            title: 'Business Ueporting Rouncil Them Could Plan.',
            user: 'Rajib Raj',
            imageUrl: blog1,
            calendar: 'June 05,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 2,
            title: 'Financial Reporting Qouncil What Could More.',
            user: 'Rajib Raj',
            imageUrl: blog2,
            calendar: 'June 05,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 3,
            title: 'Consulting Reporting Qounc Arei Could More.',
            user: 'Rajib Raj',
            imageUrl: blog3,
            calendar: 'June 05,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 4,
            title: 'Strategic Social Media and of visual design.',
            user: 'Rajib Raj',
            imageUrl: blog4,
            calendar: 'June 05,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 5,
            title: 'Find the Right Path for your Group Course online.',
            user: 'Rajib Raj',
            imageUrl: blog5,
            calendar: 'June 05,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 6,
            title: 'Learn by doing with Real World Projects other countries.',
            user: 'Rajib Raj',
            imageUrl: blog6,
            calendar: 'June 05,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 7,
            title: 'The Importance Of Intrinsic for Students.',
            user: 'Rajib Raj',
            imageUrl: blog7,
            calendar: 'June 05,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 8,
            title: 'A Better Alternative To Grading Student Writing.',
            user: 'Rajib Raj',
            imageUrl: blog8,
            calendar: 'June 05,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
        {
            id: 9,
            title: 'The Challenge Global Learning In Public Education.',
            user: 'Rajib Raj',
            imageUrl: blog9,
            calendar: 'June 05,2022',
            about: 'Pluoresnts customize prancing apcentered customer service anding ands asing straelg Interacvely cordinate performe',
            read: 'Read More',
            msg: '3',
        },
    ];

    return (
        <>
        <div className="blog-top-bg-container">
                <div className="blog-top-container">
                    <div>
                        <h1>Our Blog Posts</h1>
                    </div>
                    <div>
                        <Link to={'/'}>Home</Link>
                        <span className='top-blog-link'> / Blogs</span>
                    </div>
                </div>
                </div>
            <div className='blog-container'>
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
                <div className="blog-pagination">
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

export default Blog;