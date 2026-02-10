import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "Strategic Leadership",
    content: [
      <span>test</span>
    ],
  },
  {
    value: "item-2",
    trigger: "Technical Management",
    content:[
      <span>test</span>
    ],
  },
  {
    value: "item-3",
    trigger: "Backend Development",
    content: [
      <span>test</span>
    ],
  },
  {
    value: "item-4",
    trigger: "Frontend Development",
    content: [
      <span>test</span>
    ],
  },
  {
    value: "item-5",
    trigger: "Design",
    content: [
      <span>test</span>
    ],
  },
]


const Competencies = () => {
    return (
      <Accordion type="single" collapsible={true} className="rounded-lg border bg-card">
        {items.map((item) => (
          <AccordionItem key={item.value} value={item.value} className="border-b px-4 last:border-b-0">
            <AccordionTrigger className="cursor-pointer text-lg">{item.trigger}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
}

export default Competencies;