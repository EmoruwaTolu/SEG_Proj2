import React from 'react';
import Landing from './landing.jpg';
import Ellipses from './ellipses.png';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
    return (
      <div className="home-body-container">
          <div className='home-body'>
            <img src={Landing} />
          </div>
          <div className='home-info-container'>
            <div className='home-info'>
              <div className='logo-container'><img src={Ellipses}/></div>
              <div className='home-info-body'>
                <div className='header'>
                  <p>SANDY HILL</p>
                  <p>COMMUNITY</p>
                  <p>CENTRE</p>
                </div>
                <p>
                  See what's happening in Sandy Hill today!
                </p>
                <div className='events-button-container'>
                  <Link to={'/events'}>EVENTS</Link>
                </div>
                <p>305 King Edward Drive, Ottawa, ON, K2H 9E8</p>
              </div>
            </div>
          </div>
      </div>
    );
}
  
export default Home;