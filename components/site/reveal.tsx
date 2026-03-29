"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  amount?: number;
  y?: number;
};

const easing = [0.22, 1, 0.36, 1] as const;

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.7,
  amount = 0.24,
  y = 28
}: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(10px)" }}
      transition={{ duration, delay, ease: easing }}
      viewport={{ once: true, amount }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  amount?: number;
  delayChildren?: number;
  staggerChildren?: number;
};

export function Stagger({
  children,
  className,
  amount = 0.14,
  delayChildren = 0.04,
  staggerChildren = 0.1
}: StaggerProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: {},
    show: {
      transition: {
        delayChildren,
        staggerChildren
      }
    }
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={variants}
      viewport={{ once: true, amount }}
      whileInView="show"
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  y?: number;
};

export function StaggerItem({ children, className, y = 24 }: StaggerItemProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.68,
        ease: easing
      }
    }
  };

  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
