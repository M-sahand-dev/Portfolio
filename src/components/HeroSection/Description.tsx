import type { JSX } from 'react';
import { motion } from 'framer-motion';
import type { DescriptionProps } from '../../types';
import { textVariants, buttonVariants } from '../../constants';

export const Description = ({
  name,
  family,
  skils,
  info,
}: DescriptionProps): JSX.Element => {
  return (
    <motion.div
      className="md:w-1/2 mb-12 md:mb-0"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.1 }}
    >
      {/* Introductory greeting with accent color */}
      <motion.h4
        className="text-indigo-400 text-lg mb-2"
        variants={textVariants}
      >
        Hello, I'm
      </motion.h4>
      {/* Primary name display with last name accent */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        variants={textVariants}
      >
        {name}
        {/* Animated last name with separate transition */}
        <motion.span
          className="text-indigo-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {' '}
          {family}
        </motion.span>
      </motion.h1>
      {/* Professional title/skills */}
      <motion.h3 className="text-xl md:text-2xl mb-6" variants={textVariants}>
        {skils}
      </motion.h3>
      {/* Descriptive paragraph with constrained width */}
      <motion.p className="text-gray-400 mb-8 max-w-lg" variants={textVariants}>
        {info}
      </motion.p>
      {/* Call-to-action button group */}
      <motion.div className="flex space-x-4" variants={textVariants}>
        {/* Primary action button */}
        <motion.a
          href="#contact"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-md transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
        >
          Hire Me
        </motion.a>
        {/* Secondary action button */}
        <motion.a
          href="#"
          className="border border-indigo-600 text-indigo-400 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-md transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
        >
          Download CV
        </motion.a>
      </motion.div>
    </motion.div>
  );
};
