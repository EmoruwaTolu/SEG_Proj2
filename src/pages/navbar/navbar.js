import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css';

function Navbar() {
    return (
      <div className="navbar">
          <div className="logo">
            <Link to={'/'}>SCC</Link>
          </div>
          <ul className='navbar-links'>
                <li className='navbar-link'>
                    <div className="dropdown">
                      <Link>Facilities</Link>
                      <div className="dropdown-content">
                        <div className="dropdown-submenu">
                          <Link>Sports</Link>
                          <div className="dropdown-subcontent">
                            <Link to={'/facilities/sports/soccer'}>Soccer</Link>
                            <Link to={'/facilities/sports/basketball'}>Basketball</Link>
                            <Link to={'/facilities/sports/volleyball'}>Volleyball</Link>
                          </div>
                        </div>
                        <Link to={'/facilities/libraries'}>Libraries</Link>
                      </div>
                    </div>
                </li>
                <li className='navbar-link'>
                  <Link to={'/events'}>Events</Link>
                </li>
                <li className='navbar-link'>
                  <Link to={'/volunteer'}>Volunteer</Link>
                </li>
          </ul>
      </div>
    );
}
  
export default Navbar;