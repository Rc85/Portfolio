import React, { useEffect, useState} from 'react';
import { path } from '../../constants';
import { NavLink, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faBrowser, faEnvelope, faBars } from '@fortawesome/pro-solid-svg-icons';

export const TopBar = (props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    setShowMobileNav(false);
  }, [props.location.key]);

  const handleMobileNavButtonClick = (e) => {
    console.log('click');
    setShowMobileNav(!showMobileNav);
  }

  return(
    <nav id='top-bar'>
      <div className='logo-container' onClick={handleMobileNavButtonClick}><img src='/images/logo_black.png' alt='Logo' /></div>

      <div className='mobile-nav-container'>
        <FontAwesomeIcon icon={faBars} size='3x' className='text-white' onClick={handleMobileNavButtonClick} />
        <div className={`mobile-nav-background ${showMobileNav ? 'show' : ''}`} onClick={handleMobileNavButtonClick}></div>

        <div className={`mobile-nav-menu ${showMobileNav ? 'show' : ''}`}>
            <NavLink to={path.main} className='mobile-nav-link'><FontAwesomeIcon icon={faUserCircle} className='mr-1' />About</NavLink>
            <NavLink to={path.projects} className='mobile-nav-link'><FontAwesomeIcon icon={faBrowser} className='mr-1' />Projects</NavLink>
            <NavLink to={path.contact} className='mobile-nav-link'><FontAwesomeIcon icon={faEnvelope} className='mr-1' />Contact</NavLink>
          </div>
      </div>

      <NavLink to={path.main} className='nav-link'><FontAwesomeIcon icon={faUserCircle} className='mr-1' />About</NavLink>
      <NavLink to={path.projects} className='nav-link'><FontAwesomeIcon icon={faBrowser} className='mr-1' />Projects</NavLink>
      <NavLink to={path.contact} className='nav-link'><FontAwesomeIcon icon={faEnvelope} className='mr-1' />Contact</NavLink>
    </nav>
  );
}

export default withRouter(TopBar);