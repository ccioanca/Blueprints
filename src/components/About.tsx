import React from 'react';
import Timeline from './ui/timeline';
import Competencies from '@/components/competencies';


const About = () => {
  return (
    <section id="about" className="py-16 bg-accent">
      <div className='section'>
        <h2 className="mb-8">
          About Me
        </h2>

        <p className="mb-4">
          Hello! I'm Cristian, a Developer Lead with a passion for building innovative solutions and leading high-performing specialized teams in complex ecosystems. My current focus is on operational excellence & consistency while helping deliver scalable solutions & competent teams.
        </p>
        <p className="mb-4">
          I've had the privilege of working on a diverse range of projects, from intricate POCs to large-scale enterprise applications.
        </p>
        <p className="mb-4">
          My expertise lies in crafting robust, scalable, and user-centric applications. I thrive in environments where I can mentor developers, foster a culture of technical excellence, and drive strategic initiatives that align with business goals. I am constantly exploring new technologies and methodologies to stay at the forefront of the industry.
        </p>
        <p>
          When I'm not coding or leading, you can find me in the gym, hitting the winter slopes, creating digital art, or dabbling in game development (which I guess counts as coding).
        </p>

        {/* <hr className='my-6' />

        <h3 className="mb-4">
          Impact by the Numbers
        </h3>
        <ul className="list-inside">
          <li className="list-disc mb-2">90%+ Sprint Goal Completion Rate achieved through new delivery standards. </li>
          <li className="list-disc mb-2">20% Acceleration in Time-to-Market via improved release frameworks. </li>
          <li className="list-disc mb-2">2 High-Impact Teams Managed across distributed locations.</li>
        </ul> */}

        <hr className='my-12'/>

        <h3 className="mb-4">
          Professional Competencies
        </h3>

        <Competencies/>

        <hr className='my-12'/>

        <h3 className="mb-4">
          Professional Journey
        </h3>

        <Timeline/>

      </div>
    </section>
  );
};

export default About;
