import React from 'react';
import Navigation from './Navigation';

const About = () => {
    document.title = 'About Us';
  return (
    <div>
        <Navigation />
      <h1>About This Application</h1>
      <p>This is a simple React application with routing.</p>
    </div>
  );
};

export default About;
