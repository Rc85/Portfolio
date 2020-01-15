import React, { useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileAndroidAlt, faDatabase, faServer, faShield, faCloudUpload } from '@fortawesome/pro-duotone-svg-icons';
import { NavLink } from 'react-router-dom';
import { path } from '../../constants';

export const Main = (props) => {
  return(
    <section id='main' className='main'>
      <header className='main-title'>
        <h1>Roger Chin</h1>
        <h3>Full Stack Web Developer</h3>
      </header>

      <div className='container'>
        <div className='content'>
          <div className='content-section'>
            <div className='grid-container'>
              <div className='card'>
                <h4 className='d-flex-center'><FontAwesomeIcon icon={faGlobe} className='duo-tone-red mr-1' /> Web</h4>
  
                <p>Create and maintain websites and web applications</p>
              </div>
  
              <div className='card'>
                <h4 className='d-flex-center'><FontAwesomeIcon icon={faMobileAndroidAlt} className='duo-tone-red mr-1' /> Mobile</h4>
  
                <p>Make websites and web applications responsive to all screen sizes</p>
              </div>
  
              <div className='card'>
                <h4 className='d-flex-center'><FontAwesomeIcon icon={faDatabase} className='duo-tone-red mr-1' /> Database</h4>
  
                <p>Design, model, and maintain SQL databases</p>
              </div>
  
              <div className='card'>
                <h4 className='d-flex-center'><FontAwesomeIcon icon={faServer} className='duo-tone-red mr-1' /> Servers</h4>
  
                <p>Develop and create API servers, web servers, and implement web securities</p>
              </div>
            </div>
          </div>

          <div className='content-section'>
            <h1 className='d-flex-center'><FontAwesomeIcon icon={faShield} className='duo-tone-red mr-1' /> Security</h1>

            <p>Handling and storing personal data has become a big legal issue now a days and must comply with many IP law in different region. It is important to have an expert who knows how to encrypt and keep data private and also know how to request consent from your users.</p>
          </div>

          <div className='content-section'>
            <h1 className='d-flex-center'><FontAwesomeIcon icon={faCloudUpload} className='duo-tone-red mr-1' /> Deployment</h1>

            <p>How your idea is deployed to the world-wide web is an important part of web development. With a seemless and easy deployment strategy, it will save you time when you request to deploy an update and when you save time, you also save money.</p>
          </div>

          <div className='content-section text-center'>
            <p>Have a project in mind? Let's chat.</p>

            <NavLink to={path.contact}><button className='btn btn-highlight-blue'>Contact Me</button></NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

Main.propTypes = {

}

export default Main;