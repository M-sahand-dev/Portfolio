import type { JSX } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../../constants';

export const SkilsItem = (): JSX.Element => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skills.map((item, index) => (
        <div key={index}>
          {/* Skill name and percentage */}
          <div className="flex justify-between mb-2">
            <span className="text-gray-300">{item.skill}</span>
            <span className="text-gray-300">{item.grade}%</span>
          </div>

          {/* Background progress bar */}
          <div className="w-full bg-gray-700 rounded-full h-2">
            {/* Animated foreground bar */}
            <motion.div
              className="bg-indigo-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${item.grade}%` }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
                delay: item.id * 0.2, // stagger animation by item id
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
