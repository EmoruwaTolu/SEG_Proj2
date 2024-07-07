import React, {useState} from 'react';
import Books from './library.png';
import { Link } from 'react-router-dom';
import './soccer.css';

const Library = () => {
    return (
      <div className="soccer-body-container">
          <div className='soccer-info-container'>
                <div className='circle-container'>
                    <div className='top-left-circle'></div>
                    <div className='bottom-right-circle'></div>
                </div>
            <div className='sport-info'>
                <h2>LIBRARY</h2>
                <div className='sports-times'>
                    <p>
                        The library is open to everyone unless another event in the event section is happening there. Remember to be kind and respectful.
                    </p>
                    <div className='sports-time-details'>
                        <p>Weekdays</p>
                        <p>8a.m. to 11p.m.</p>
                    </div>
                    <div className='sports-time-details'>
                        <p>Weekends and Holidays</p>
                        <p>9a.m. to 11 p.m.</p>
                    </div>
                </div>
                <div className='soccer-button-container'>
                    <Link to={'/events'}>
                        Click here to see what library events are happening
                    </Link>
                </div>
            </div>
          </div>
          <div className='soccer-image-container'>
            <img src={Books} style={{height: `120vh`, width: `auto`, transform: `translate(0%, -10%)`}}/>
          </div>
      </div>
    );
}
  
export default Library;