import React, { useState } from 'react';
import Badge from '../../components/Badge/Badge';

export const Projects = (props) => {
  const [expand, setExpand] = useState(0);

  const handleExpand = (num) => {
    if (expand === num) {
      setExpand(0);
    } else {
      setExpand(num);
    }
  }

  return(
    <section id='projects' className='main'>
      <div className='content'>
        <h1>Projects</h1>

        <div className='project-screenshots'>
          <div className={`screenshot ${expand === 1 ? 'expand' : ''}`} onClick={() => handleExpand(1)}><img src='/images/hw.jpg' alt='Hire World screenshot #1' /></div>
          <div className={`screenshot ${expand === 2 ? 'expand' : ''}`} onClick={() => handleExpand(2)}><img src='/images/hw2.jpg' alt='Hire World screenshot #2' /></div>
          <div className={`screenshot ${expand === 3 ? 'expand' : ''}`} onClick={() => handleExpand(3)}><img src='/images/hw3.jpg' alt='Hire World screenshot #3' /></div>
        </div>

        <h4 className='mb-0'>Hire World</h4>
        <div><a href='https://www.hireworld.ca' rel='noreferrer noopener' target='_blank'>https://www.hireworld.ca</a></div>
        <Badge className='badge-red badge-sm' text='React' />
        <Badge className='badge-red badge-sm' text='SCSS' />
        <Badge className='badge-red badge-sm' text='Node.js' />
        <Badge className='badge-red badge-sm' text='PostgreSQL' />
        <Badge className='badge-red badge-sm' text='Nginx' />

        <p>Hire World is a job board and a freelancer platform that was launched on December 2019. Job recruiters can post jobs, freelancers can list their profiles, and both clients and freelancers can work with each other through Hire World by starting a contract. A contract consists of milestones where the client deposit the required funds and when the milestone is complete, the client can then release the funds to the freelancer. It also features file upload, messaging, adding user to friends, blocking users, reporting, profile reviews, and much more. The entire project took a little over the year, on and off to develop.</p>
      </div>
    </section>
  );
}

export default Projects;