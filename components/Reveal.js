"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Reveal({ children, className = "", delay = 0, triggerOnce = true, slide = "up" }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const slideVariants = {
    hidden: {
      opacity: 0,
      y: slide === "up" ? 40 : slide === "down" ? -40 : 0,
      x: slide === "left" ? 40 : slide === "right" ? -40 : 0
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: delay / 1000 }
    }
  };

  return (
    <motion.div
      variants={slideVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, margin: "-10%" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
