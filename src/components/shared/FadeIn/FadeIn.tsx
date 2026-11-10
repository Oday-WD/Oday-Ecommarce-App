"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

interface FadeInProps {
  index?: number;
  className?: string;
  children: ReactNode;
}

// fades up when scrolled into view, staggered by index
export const FadeIn = ({ index = 0, className, children }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className={className}
  >
    {children}
  </motion.div>
);
