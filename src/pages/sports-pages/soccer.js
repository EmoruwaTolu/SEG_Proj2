import React, {useState} from 'react';
import Ball from './soccerball.png';
import { Link } from 'react-router-dom';
import './soccer.css';

const Soccer = () => {
    return (
      <div className="soccer-body-container">
          <div className='soccer-info-container'>
                <div className='circle-container'>
                    <div className='top-left-circle'></div>
                    <div className='bottom-right-circle'></div>
                </div>
            <div className='sport-info'>
                <h2>SOCCER</h2>
                <div className='sports-times'>
                    <p>
                        The soccer fields are open to everyone for drop-ins unless another event in the event section is happening there. Remember to be kind and respectful.
                    </p>
                    <div className='sports-time-details'>
                        <p>Weekdays</p>
                        <p>2p.m. to 11p.m.</p>
                    </div>
                    <div className='sports-time-details'>
                        <p>Weekends and Holidays</p>
                        <p>9a.m. to 11 p.m.</p>
                    </div>
                </div>
                <div className='soccer-button-container'>
                    <Link to={'/events'}>
                        Click here to see what soccer events are happening
                    </Link>
                </div>
            </div>
          </div>
          <div className='soccer-image-container'>
            <img src={Ball} alt="soccer ball"/>
          </div>
      </div>
    );
}
  
export default Soccer;