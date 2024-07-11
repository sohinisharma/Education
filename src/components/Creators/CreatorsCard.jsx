import React from 'react';
import './Creators.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBook, faStar, faUsers} from '@fortawesome/free-solid-svg-icons';

const CreatorsCard = ({ title, about, imageUrl, course, student }) => {
    return (
        <>

            <div className="creator-cards">
                <img src={imageUrl} alt={title} />

                <div className="creator-title">{title}</div>
                <div className='creators-about'><span>{about}</span></div>

                <div className="creators-card-content">
                    <div className="creators-rating"><span>
                        {[...Array(5)].map((_, index) => (
                            <FontAwesomeIcon key={index} icon={faStar} className='creator-icon' />
                        ))}
                    </span></div>
                </div>

                <div className="creators-footer">
                    <div className='creators-icons'>
                    <span><FontAwesomeIcon icon={faBook} className='creator-icon' /></span>
                        <span>{course}</span>
                    </div>
                    <div className='creators-icons'>
                    <span><FontAwesomeIcon icon={faUsers} className='creator-icon' /></span>
                        <span>{student}</span>                        
                    </div>
                </div>               
            </div>
            

        </>
    )
}

export default CreatorsCard;