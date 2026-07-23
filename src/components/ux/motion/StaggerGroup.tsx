import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { revealUp, staggerParent, motionTiming, easeOut } from "@/lib/motion";
import { useState, type ReactNode } from "react";

export function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div className={className} variants={staggerParent} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className, customDelay }: { children: ReactNode; className?: string; customDelay?: number; }) {
    const [hasAnimatedState, setHasAnimated] = useState(false);



    const itemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: ({ customDelay = 0 }: { customDelay?: number; }) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, delay: !hasAnimatedState ? (customDelay ?? 0) * 0.2 : 0 }, // Multiply position by seconds
        }),
        expanded: { opacity: 1, scale: 1.1 }
    };

    return (
        <motion.div className={className} variants={itemVariants} initial="hidden" whileInView={"visible"} onViewportEnter={() => setHasAnimated(true)} custom={{ customDelay }}>
            {children}
        </motion.div>
    );
}

export function RevealOnScrollDirection({ children, className}: { children: ReactNode; className?: string}) {
    const { scrollY } = useScroll()
    const [yValue, setyValue] = useState(25)

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - (scrollY.getPrevious() ?? current)
        setyValue(diff > 0 ? -25 : 25)
    })
    
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: yValue }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
        >
            {children}
        </motion.div>
    );
}