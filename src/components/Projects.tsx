import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon, LockIcon } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { RevealOnScrollDirection, StaggerGroup, StaggerItem } from './ux/motion/StaggerGroup';

interface ProjectProps {
  title: string;
  description: React.ReactElement;
  image: string;
  tags: string[];
  githubLink?: string;
  pos?: number;
}

const projectData: ProjectProps[] = [
  {
    title: "ccioan.ca",
    description: <span>Site-ception! You are here, this is <a href='#' className='underline'><b>ccioan.ca</b></a>! This is my personal website, built with modern tools, and a sprinkle of magic. Feel free to explore and check out the code on GitHub! There's not much to say in this description that you can't see for yourself by scrolling!</span>,
    image: "/images/ccioanca.png",
    tags: ["React", "Node.js", "Typescript", "Tailwind CSS", "HTML", "CSS"],
    githubLink: "https://github.com/ccioanca/Blueprints"
  },
  {
    title: "Tankathon",
    description: <span>A Tankathon is a hackathon I threw together for teams of developers to write an atonomous tank brain that would end up battling other autonomous tanks in the arena! <i>(Winner took home some 3D printed trophies!)</i> The aim was for the event to be a digital version of Battle Bots. The repository is public, and anyone is free to pick it apart or use it for their own fun projects! The project is  written in GDScript and the Tank API and brains are written in C#</span>,
    image: "/images/tankathon.png",
    tags: ["C#", "GDScript", "Godot"],
    githubLink: "https://github.com/ccioanca/Tankathon-v2",
  },
  {
    title: "Open Dungeon",
    description: <span>Open Dungeon aims to be a completely Free, open-source, and community-driven tabletop roleplaying system that employs modularity as a driving principle of the engine. This project is an exercise in DevOps & management as contributing to the project is dead simple, but managing <b>what</b> and <b>how</b> contributions are merged and managed is a challenge. There is also a privately developed companion application to make the compilation of the system simple.</span>,
    image: "/images/OD.png",
    tags: ["Markdown", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/ccioanca/OpenDungeon",
  },
  {
    title: "Open Dungeon Compiler (CODeX)",
    description: <span>Compiler for Open Dungeon Edition X (or CODeX) is a companion application to the TTRPG system Open Dungeon. This application is meant to allow for a simple interface to compile the rulesets and modules (and versions) into consumable PDFs for players and GMs. This project is currently private as I work on the core features, but the plan is to open source it once it's ready for the spotlight.</span>,
    image: "/images/CODeX.png",
    tags: [".NET", "C#", "SQL", "React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dungeon n' Display",
    description: <span>This application is a tool I developed to display TTRPG maps and assets to my players during play. The tool handles the idea of 'Regions', 'Maps', and 'Floors'. It handles autonomous time-of-day tracking and map lighting and animated assets like light-sources and water. The tool is even fully capable of handling weather effects such as cloud coverage, rain (and lightning!), snow, and fog. It is built to allow quick additions of new maps and assets. Currently it is a private project as it relies on the Godot engine to set up the maps but I plan on externalizing those features eventually so that the tool can be used by anyone.</span>,
    image: "/images/GDNDisplay.png",
    tags: ["GDScript"],
  },
  {
    title: "Monster Battler",
    description: <span>This project is a dream. It's an idea I've been toying around for a few years now, and even created (and recreated) many disperate systems and prototypes. It is a nostalgic calling card to the games I grew up with and always thought could be <i>more</i>. It aims to be an in-depth monster battler that leans into the tactics strategy game-style. Simply clicking the strongest move is not the answer, as positioning and movement, coverage and strategy are keys to success just as much as leveling is.</span>,
    image: "/images/mon.png",
    tags: ["GDScript"],
  },
  
];

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, tags, githubLink, pos }) => {
  return (
    <StaggerItem className="flex flex-col h-full" customDelay={pos ?? 0}>
      <Card className="flex flex-col h-full overflow-hidden dark:bg-card">
        <img src={image} alt={title} className="w-full h-0 lg:h-80 object-cover" />
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <CardDescription className="mt-2 flex flex-wrap gap-2">
            {tags.map((tag) => (  
              <Badge key={tag} className="bg-chart-4">
                {tag}
              </Badge>
            ))}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex">
        {description}
        </CardContent>
        <CardFooter className="flex justify-start gap-4 p-6 pt-4 mt-auto">
          {githubLink ? (
            <Button asChild variant="outline" className="flex items-center gap-2">
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="size-4" /> GitHub <ExternalLinkIcon className="size-4" />
              </a>
            </Button>
          ) : 
          (
              <Badge className="bg-amber-500 py-3 my-2">
                <LockIcon/> Private Repository
              </Badge>
          )}
        </CardFooter>
      </Card>
    </StaggerItem>
    
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 relative">
      <div className='section'>
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <p className="mb-16">
          As a developer raised right, this is a small collection of started projects that I don't have the time to dedicate to. Here's a peek into some of my currently ongoing projects that exist outside of my professional experience. 
        </p>
      </div>
      <div className="section-wide">
        <div className='flex w-full justify-center pr-12 sm:pr-0'>
          <Carousel className="max-w-full"
            opts={{
              align: "center",
              loop: true,
            }}>
            <CarouselContent className='py-2'>
              {projectData.map((project, index) => {
                // we want to add animation delays to the first, second, and last items in the carousel.
                // first item shows first (0), second item shows second (1), last item shows third (2), all other items show with no delay (undefined) as they never show. 
                const showPos = index === 0 ? 0 : index === 1 ? 1 : index === projectData.length - 1 ? 2 : undefined;

                return(
                <CarouselItem key={index} className='lg:basis-1/2 select-none'>
                  <ProjectCard key={index} pos={showPos} {...project} />
                </CarouselItem>)
              })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
          
      </div>
    </section>
  );
};

export default Projects;
