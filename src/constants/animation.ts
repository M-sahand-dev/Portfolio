import type { Variants } from 'framer-motion';

export const pageVariants: Variants = {
  initial: { opacity: 0 },
  in: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  out: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: 'easeIn',
    },
  },
};

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

export const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
};

export const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};

export const borderVariants: Variants = {
  hidden: { opacity: 0, x: -30, y: -30 },
  visible: {
    opacity: 1,
    x: -6,
    y: -6,
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.8,
    },
  },
};
