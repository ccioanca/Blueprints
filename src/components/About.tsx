import Timeline from './ui/timeline';
import Competencies from '@/components/Competencies';
import { RevealOnScrollDirection, StaggerGroup } from '@/components/ux/motion/StaggerGroup';


const About = () => {
  return (
    <section id="about" className="py-16 bg-accent">
      <div className='section'>
        <StaggerGroup>
          <RevealOnScrollDirection>
            <h2 className="mb-8">
              About Me
            </h2>
          </RevealOnScrollDirection>

          <RevealOnScrollDirection>
            <p className="mb-4">
              Hello! I'm Cristian, a Developer Lead with a passion for building innovative solutions and leading high-performing specialized teams in complex ecosystems. My current focus is on operational excellence & consistency while helping deliver scalable solutions & competent teams.
            </p>
          </RevealOnScrollDirection>
          <RevealOnScrollDirection>
            <p className="mb-4">
              I've had the privilege of working on a diverse range of projects, from intricate POCs to large-scale enterprise applications.
            </p>
          </RevealOnScrollDirection>
          <RevealOnScrollDirection>
            <p className="mb-4">
              My expertise lies in crafting robust, scalable, and user-centric applications. I thrive in environments where I can mentor developers, foster a culture of technical excellence, and drive strategic initiatives that align with business goals. I am constantly exploring new technologies and methodologies to stay at the forefront of the industry.
            </p>
          </RevealOnScrollDirection>
          <RevealOnScrollDirection>
            <p>
              When I'm not coding or leading, you can find me in the gym, hitting the winter slopes, creating digital art, or dabbling in game development (which I guess counts as coding).
            </p>
          </RevealOnScrollDirection>
        </StaggerGroup>

        <hr className='my-12'/>

        <StaggerGroup>
          <RevealOnScrollDirection>
            <h3 className="mb-4">
              Professional Competencies
            </h3>
          </RevealOnScrollDirection>
          <RevealOnScrollDirection>
            <Competencies/>
          </RevealOnScrollDirection>
        </StaggerGroup>
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
