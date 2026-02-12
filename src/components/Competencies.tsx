import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const items = [
  {
    value: "item-1",
    trigger: "Strategic Leadership",
    tagColor: "bg-chart-2",
    tags: [
      "Recruitment",
      "Budgeting",
      "Team Orchestration",
      "Stakeholder Management",
      "Agile Stewardship"
    ],
    content: [
      <ul className="list-inside">
        <li className="list-disc mb-1">Successfully directing specialized teams and distributed remote staff across Canada to function as high-velocity units.</li>
        <li className="list-disc mb-1">Championing Agile methodologies and implementing concrete delivery standards that have successfully raised sprint goal completion to over 90%.</li>
        <li className="list-disc mb-1">Participate in Continuous Improvement and Change Management Boards to elevate communication standards and enable quick iteration across business units.</li>
        <li className="list-disc mb-1">Acting as a bridge between technical teams and Product Owners to ensure predictable delivery, superior stakeholder alignment, and high satisfaction rates.</li>
        <li className="list-disc mb-1">Managing budgetary allocation and resource distribution to ensure team efficiency and project feasibility.</li>
      </ul>
    ],
  },
  {
    value: "item-2",
    trigger: "Technical Management",
    tagColor: "bg-chart-3",
    tags: [
      "CI/CD Management",
      "Architecture Review", 
      "Process Standardization",
      "Technical Story Writing"
    ],
    content:[
      <ul className="list-inside">
        <li className="list-disc mb-1">Guiding architectural decisions based on ecosystem needs rather than trends, providing high-level technical mentorship to complex teams.</li>
        <li className="list-disc mb-1">Established delivery and release frameworks that increased deployment visibility, reduced post-deployment incidents, and accelerated time-to-market.</li>
        <li className="list-disc mb-1">Leading rigorous architecture proposal reviews to ensure scalable system design, code extensibility, and the proactive reduction of technical debt.</li>
        <li className="list-disc mb-1">Participate </li>
        <li className="list-disc mb-1">Aligning application roadmaps with enterprise standards by coordinating with Security and Operations teams.</li>
        <li className="list-disc mb-1">Identifying and implementing process improvements to drive iterative change and reduce friction in ways-of-working between product and development teams.</li>
      </ul>
    ],
  },
  {
    value: "item-3",
    trigger: "Technical & Development Skills",
    tagColor: "bg-chart-4",
    tags: [
      ".NET Core",
      "C#",
      "SQL",
      "Restful APIs",
      "React",
      "Typescript",
      "HTML",
      "CSS",
      "JavaScript",
      "UI/UX Strategy",
      "CI/CD Pipelines",
      "Microservices"
    ],
    content: [
      <ul className="list-inside">
        <li className="list-disc mb-1">Expert proficiency in .NET Core, C#, and SQL, with a focus on building scalable microservices and high-performance RESTful APIs.</li>
        <li className="list-disc mb-1">Deep experience owning the lifecycle of services from requirement definition to national deployment on Microsoft Azure.</li>
        <li className="list-disc mb-1">Expert proficiency in front-end technologies and principles such as SEO, accessibility, and responsive design.</li>
        <li className="list-disc mb-1">Technical management of the Adobe stack, including Adobe Experience Manager (AEM), Customer Data Platform (CDP), Adobe Campaign Standard APIs (ACS), Analytics, and Target.</li>
      </ul>
    ],
  }
]


const Competencies = () => {
    return (
      <Accordion type="single" collapsible={true} className="rounded-lg border bg-card">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="border-b px-4 last:border-b-0">
            <AccordionTrigger className="cursor-pointer text-lg">
              <div className="mr-3">
                {item.trigger}
              </div>
              
              </AccordionTrigger>
            <AccordionContent>
              <div className="mb-5">
                {item.tags?.map((tag) => (
                  <Badge key={tag} className={item.tagColor + " mr-2 mb-2 text-white"}>
                    {tag}
                  </Badge>
                ))}
              </div>
              {(item.tags && item.content) && <hr className="mb-6" />}
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
}

export default Competencies;