import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faExternalLink, faMessage, faUser } from '@fortawesome/free-solid-svg-icons';

const BlogCard = ({ title, imageUrl, read, user, calendar, about, msg }) => {
    return (
        <>
            <div className="blog-card">
                <img src={imageUrl} alt={title} />

                <div className="blog-title"><h1>{title}</h1></div>
                <div className="blog-card-content">
                    <div className="user-blog">
                        <FontAwesomeIcon icon={faUser} className='blog-icon' />
                        <span>{user}</span></div>
                    <div className='blog-calendar'>
                        <FontAwesomeIcon icon={faCalendar} className='blog-icon' />
                        <span>{calendar}</span></div>
                </div>
                <div className="blog-details">
                    <p>{about}</p>
                </div>

                <div className="about-blog">
                    <div className="read-blog">
                        <span className='read-span'>{read}</span>
                        <span><FontAwesomeIcon icon={faExternalLink} className='blog-icon' />
                        </span>
                    </div>

                    <div className="blog-msg">
                        <span className='msg-span'>{msg}</span>
                        <span><FontAwesomeIcon icon={faMessage} className='blog-msg-icon' />
                        </span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default BlogCard;