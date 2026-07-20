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

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <motion.div className={className} variants={revealUp} transition={{ duration: motionTiming.base, ease: easeOut }}>
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