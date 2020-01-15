import React from 'react';
import Main from './Main/Main';
import Projects from './Projects/Projects';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contact/Contact';

export const Pages = {
  Main: () => <Main />,
  Projects: () => <Projects />,
  Testimonials: () => <Testimonials />,
  Contact: () => <Contact />
}