import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  liveLink?: string;
}

const projectData: ProjectProps[] = [
  {
    title: "ccioan.ca",
    description: "Site-ception! You are here, this is ccioan.ca!",
    image: "/images/test.jpg",
    tags: ["React", "Node.js", "Typescript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    title: "Open Dungeon",
    description: "A description.",
    image: "/images/test.jpg",
    tags: ["Markdown", "HTML", "CSS", "JavaScript"],
    githubLink: "https://github.com/your-username/ecommerce-platform",
  },
  {
    title: "Open Dungeon Compiler",
    description: "A description.",
    image: "/images/test.jpg",
    tags: [".NET", "C#", "SQL", "React", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Monster Battler",
    description: "A description.",
    image: "/images/test.jpg",
    tags: ["GDScript"],
  },
  {
    title: "Dungeon Map Display",
    description: "A description.",
    image: "/images/test.jpg",
    tags: ["GDScript"],
  }
];

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, tags, githubLink, liveLink }) => {
  return (
    <Card className="flex flex-col h-full overflow-hidden bg-card shadow-sm hover:shadow-xl transition-shadow duration-300 shadow-white">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
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
      <CardFooter className="flex justify-start gap-4 p-6 pt-4">
        {githubLink ? (
          <Button asChild variant="secondary" className="flex items-center gap-2 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
          </Button>
        ) : 
        (
            <Badge className="bg-amber-500">
              Private Project
            </Badge>
        )}
        {/* {liveLink && (
          <Button asChild className="flex items-center gap-2">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="h-4 w-4" /> Live Demo
            </a>
          </Button>
        )} */}
      </CardFooter>
    </Card>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 relative">
      <div className='section'>
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <p className="mb-16">
          As a developer raised right, this is a small collection of started projects that I don't have the time to dedicate to. Here's an insight into some of my currently ongoing projects
        </p>
      </div>
      <div className="section-wide">
        <div className='flex w-full justify-center pr-12 sm:pr-0'>
          <Carousel className="max-w-full"
            opts={{
              align: "center",
              loop: true,
            }}>
            <CarouselContent>
              {projectData.map((project, index) => (
                <CarouselItem key={index} className='lg:basis-1/2'>
                <ProjectCard key={index} {...project} />
                </CarouselItem>

              ))}
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
