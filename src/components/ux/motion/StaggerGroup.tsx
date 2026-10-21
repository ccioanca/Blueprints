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

//TODO: This would just be better as a hook that uses a context, then we could set it up so that StaggerItem can just use the revealonscroll instead. 
export function RevealOnScrollDirection({ children, className}: { children: ReactNode; className?: string}) { 
    const { scrollY } = useScroll()
    const yRef = useRef(25)
    const { mode, viewport } = useContext(RevealContext)

    useMotionValueEvent(scrollY, "change", (current) => {
        const diff = current - (scrollY.getPrevious() ?? current)
        if (diff !== 0) yRef.current = diff > 0 ? 25 : -25
    })
    
    return (
        <motion.div
            className={className}
            variants={{
                // Resolved when the animation starts (on entry), so the offset follows the entry scroll direction
                hidden: { opacity: 0 },
                show: () => ({ 
                    opacity: 1, 
                    y: [yRef.current, 0],
                    transition: { duration: 0.7, ease: 'easeOut' }
                }),
            }}
            // if a Reveal context is provided ("inherit"), omit these so the parent's variant state (and stagger) is inherited
            {...mode === "inherit" ? {} : { initial: "hidden", whileInView: "show", viewport: viewport ?? { once: false } }}
        >
            {children}
        </motion.div>   
    );
}