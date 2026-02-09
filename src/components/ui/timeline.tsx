type TimelineProps = {
    dateStart: string,
    dateEnd: string,
    title: string,
    company: string, 
    data: React.ReactElement[]
}

const TimelineItem = (
    props: TimelineProps
) => {
    return (
        <li className="box">
            <div className="info">
                <div className="date">
                    <span>{props.dateStart}</span>
                    <span>{props.dateEnd}</span>
                </div>
                <div className="header">
                    <div className="title text-shadow-md text-shadow-primary/50">{props.title}</div>
                    <div className="sub-title">{props.company}</div>
                </div>
                <ul className="list-inside">
                    {props.data.map((item, index) => (
                        <li key={index} className="list-disc mb-2">{item}</li>
                    ))}
                </ul>
            </div>
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
                    company="GoodLife Fitness"
                    data={[
                        <span><b>Orchestrate two high-impact cross-functional teams</b> comprising Senior/Intermediate Developers and QA; manage a distributed team of remote developers from coast to coast in Canada.</span>,
                        <span>Implemented concrete software delivery & deployment standards that increased sprint goal completion to over 90%, directly resulting in significantly higher Product Owner satisfaction through predictable delivery.</span>,
                        <span>Established a delivery & release framework that increased deployment visibility and transparency. The new framework accelerated the team's time-to-market by nearly 20% while significantly reducing post-deployment incidents.</span>,
                        <span>Lead rigorous architecture proposal reviews, ensuring scalable system design while proactively reducing the development of technical debt.</span>,
                        <span>Designed and implemented custom coding challenges and technical interview rubrics; mentored direct reports in the recruitment process to elevate internal skillsets.</span>
                    ]}
                />

                <TimelineItem
                    dateStart="September 2022"
                    dateEnd="September 2023"
                    title="Senior Full-Stack Developer"
                    company="GoodLife Fitness"
                    data={[
                        <span><b>Orchestrate two high-impact cross-functional teams</b> comprising Senior/Intermediate Developers and QA; manage a distributed team of remote developers from coast to coast in Canada.</span>
                    ]}
                />

                <TimelineItem
                    dateStart="December 2020"
                    dateEnd="September 2022"
                    title="Full-Stack Developer"
                    company="GoodLife Fitness"
                    data={[
                        <span><b>Orchestrate two high-impact cross-functional teams</b> comprising Senior/Intermediate Developers and QA; manage a distributed team of remote developers from coast to coast in Canada.</span>
                    ]}
                />

                <TimelineItem
                    dateStart="May 2017"
                    dateEnd="December 2020"
                    title="Web Developer"
                    company="GoodLife Fitness"
                    data={[
                        <span><b>Orchestrate two high-impact cross-functional teams</b> comprising Senior/Intermediate Developers and QA; manage a distributed team of remote developers from coast to coast in Canada.</span>
                    ]}
                />

                <TimelineItem
                    dateStart="September 2015"
                    dateEnd="April 2017"
                    title="Junior C# Programmer"
                    company="CarProof"
                    data={[
                        <span><b>Orchestrate two high-impact cross-functional teams</b> comprising Senior/Intermediate Developers and QA; manage a distributed team of remote developers from coast to coast in Canada.</span>
                    ]}
                />

                <TimelineItem
                    dateStart="May 2014"
                    dateEnd="August 2015"
                    title="IT Support"
                    company="Ivey Spencer Leadership Centre"
                    data={[
                        <span><b>Orchestrate two high-impact cross-functional teams</b> comprising Senior/Intermediate Developers and QA; manage a distributed team of remote developers from coast to coast in Canada.</span>
                    ]}
                />
                
            </ul>
        </div>
    )
}

export default Timeline;