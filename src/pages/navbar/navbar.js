import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css';
import { useTranslation } from "react-i18next";
import Switcher from "../switcher";

function Navbar() {
  const { t } = useTranslation();
    return (
      <div className="navbar">
          <div className="logo">
            <Link to={'/'}>SCC</Link>
          </div>
          <ul className='navbar-links'>
                <li className='navbar-link'>
                    <div className="dropdown">
                      <Link>{t('Facilities')}</Link>
                      <div className="dropdown-content">
                        <div className="dropdown-submenu">
                          <Link>{t('Sports')}</Link>
                          <div className="dropdown-subcontent">
                            <Link to={'/facilities/sports/soccer'}>{t('Soccer')}</Link>
                            <Link to={'/facilities/sports/basketball'}>{t('Basketball')}</Link>
                            <Link to={'/facilities/sports/volleyball'}>{t('Volleyball')}</Link>
                          </div>
                        </div>
                        <Link to={'/facilities/libraries'}>{t('Libraries')}</Link>
                      </div>
                    </div>
                </li>
                <li className='navbar-link'>
                  <Link to={'/events'}>{t('Events')}</Link>
                </li>
                <li className='navbar-link'>
                  <Link to={'/volunteer'}>{t('Volunteer')}</Link>
                </li>
                <li className='navbar-link'>
                  <Link to={'/contact'}>{t('Contact')}</Link>
                </li>
                <li>
                  <Switcher />
                </li>
          </ul>
      </div>
    );
}
  
export default Navbar;