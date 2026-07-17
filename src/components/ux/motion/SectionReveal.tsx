import { motion } from "framer-motion";
import { revealUp, easeOut, motionTiming } from "@/lib/motion";
import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    once?: boolean;
};

export function SectionReveal({ children, className, once = true }: Props) {
    return (
        <motion.section
            className={className}
            variants={revealUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once, amount: 0.25 }}
            transition={{ duration: motionTiming.slow, ease: easeOut }}
        >
            {children}
        </motion.section>
    );
}