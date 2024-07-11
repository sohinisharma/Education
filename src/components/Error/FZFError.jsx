import React from 'react';
import './FZFError.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';

const FZFError = () => {
    return (
        <>
            <div className='error-container'>
                <div className="error">
                    <h1>ERROR 404!</h1>
                    <p>Oops! The Page You Are Looking For Could Not Be Found</p>
                    <button><a href="#">Go Back To Home &nbsp;
                        <FontAwesomeIcon icon={faExternalLink} /></a></button>
                </div>
                <div className="error-img">
                </div>
            </div>
        </>
    )
}

export default FZFError;