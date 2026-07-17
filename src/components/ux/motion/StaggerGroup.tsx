import { motion } from "framer-motion";
import { revealUp, staggerParent, motionTiming, easeOut } from "@/lib/motion";
import type { ReactNode } from "react";

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