import type { Variants, Transition } from "framer-motion";

export const motionTiming = {
  fast: 0.25,
  base: 0.45,
  slow: 0.7,
};

export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1];

export const revealUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export const staggerParent: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};