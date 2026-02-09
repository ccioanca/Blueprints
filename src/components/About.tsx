import React from 'react';
import Timeline from './ui/timeline';
import Competencies from './ui/competencies';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';


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

        {/* <svg width="453" height="8" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-sm:hidden lg:origin-left lg:scale-x-130"><path d="M2 6.75068C53.4722 -1.10509 368.533 2.14284 451.5 6.75085" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"></path></svg> */}

        <h3 className="mb-4">
          Professional Competencies
        </h3>

        <Competencies/>

        <hr className='my-12'/>

        <h3 className="mb-4">
          Professional Journey
        </h3>

        <Timeline/>

        <hr className='my-12' />



      </div>
    </section>
  );
};

export default About;
