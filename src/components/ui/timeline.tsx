import { motion } from "framer-motion"
import { RevealOnScrollDirection } from "../ux/motion/StaggerGroup"

type TimelineProps = {
    dateStart: string,
    dateEnd: string,
    title: string,
    subtitle?: string,
    company: string, 
    data?: React.ReactElement[]
}

const TimelineItem = (
    props: TimelineProps
) => {
    return (
        <li className="box my-6">
            <RevealOnScrollDirection>
                <div className="info">
                    <div className="date">
                        <span>{props.dateStart}</span>
                        <span>{props.dateEnd}</span>
                    </div>
                    <div className="header">
                        <div className="title">
                            <span className="font-bold uppercase text-shadow-md text-shadow-primary/30 dark:text-shadow-primary/40">{props.title}</span>
                            {props.subtitle?
                                <span className="text-shadow-md text-shadow-primary/30 dark:text-shadow-primary/40">&nbsp;{props.subtitle}</span>
                                :
                                <></>
                            }
                            
                        </div>
                        <div className="sub-title">{props.company}</div>
                    </div>
                    {props.data && (
                        <ul className="list-inside">
                            {props.data?.map((item, index) => (
                                <li key={index} className="list-disc mb-2">{item}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </RevealOnScrollDirection>
        </li>
    )
}



const Timeline = () => {
    return (
        <div className="timeline-container">
            <ul>
                <TimelineItem
                    dateStart="September 2023"
                    dateEnd="Present"
                    title="Lead Software Developer"
                    subtitle="(Acting Engineering Manager)"
                    company="GoodLife Fitness"
                    data={[
                        <span><b>Orchestrate two high-impact cross-functional teams</b> comprising Senior/Intermediate Developers and QA; manage a distributed team of remote developers from <b>coast to coast in Canada.</b></span>,
                        <span>Implemented concrete software delivery & deployment standards that <b>increased sprint goal completion to over 90%</b>, directly resulting in significantly higher Product Owner satisfaction through predictable delivery.</span>,
                        <span>Established a delivery & release framework that <b>increased deployment visibility and transparency</b>. The new framework accelerated the team's time-to-market while <b>significantly reducing post-deployment incidents.</b></span>,
                        <span><b>Lead rigorous architecture proposal reviews</b>, ensuring scalable system design while proactively reducing the development of technical debt.</span>,
                        <span>Designed and implemented custom coding challenges and technical interview rubrics; <b>mentored direct reports in the recruitment process</b> to elevate internal skillsets.</span>
                    ]}
                />

                <TimelineItem
                    dateStart="September 2022"
                    dateEnd="September 2023"
                    title="Senior Full-Stack Developer"
                    company="GoodLife Fitness"
                    data={[
                        <span>Acted as a <b>bridge between Architecture, Infrastructure, and Security</b> teams to <b>align application roadmaps</b> with enterprise standards.</span>,
                        <span>Served as an <b>advisor and coach to junior developers</b>, leveraging strong diplomacy and communication skills to foster a high-energy, positive team culture focused on technical excellence.</span>,
                        <span><b>Conducted comprehensive peer reviews and architecture evaluations</b> to ensure code extensibility, reusability, and strict adherence to reference architectures.</span>,
                        <span>Identified and implemented process improvements to drive <b>iterative change</b>, gathering complex business requirements to produce high-level system design documentation.</span>,
                        <span>Managed the <b>development, deployment, and performance tuning</b> of .NET components while collaborating with QA Specialists to resolve mission-critical system issues.</span>
                    ]}
                />

                <TimelineItem
                    dateStart="December 2020"
                    dateEnd="September 2022"
                    title="Full-Stack Developer"
                    company="GoodLife Fitness"
                    data={[
                        <span>Engineered <b>enterprise-grade web services and APIs</b>, owning the lifecycle from requirement definition through to national deployment and operation on Microsoft Azure.</span>,
                        <span>Designed <b>high-performance services</b> to support comprehensive web/mobile requirements.</span>
                    ]}
                />

                <TimelineItem
                    dateStart="May 2017"
                    dateEnd="December 2020"
                    title="Web Developer"
                    company="GoodLife Fitness"
                    data={[
                        <span><b>Led the fusion of UI/UX design with front-end and back-end technology</b>, resulting in optimal usability across mission-critical web applications.</span>,
                        <span>Facilitated Agile ceremonies and authored technical specifications for enterprise-wide properties.</span>
                    ]}
                />

                <TimelineItem
                    dateStart="September 2015"
                    dateEnd="April 2017"
                    title="Junior C# Programmer"
                    company="CarProof"
                />

                <TimelineItem
                    dateStart="May 2014"
                    dateEnd="August 2015"
                    title="IT Support"
                    company="Ivey Spencer Leadership Centre"
                />
                
            </ul>
        </div>
    )
}

export default Timeline;