import type { JSX } from 'react';
import { ExperienceItem } from './index';
import type { ExperienceComponentProps } from '../../types';

export const Experience = ({
  experience,
}: ExperienceComponentProps): JSX.Element => {
  return (
    <div className="md:w-1/2 md:pr-6 mb-10 md:mb-0">
      {/* Section heading */}
      <h3 className="text-2xl font-bold mb-6">My Experience</h3>
      {/* Experience list */}
      <div className="space-y-6">
        {experience.map((item) => (
          // Each item represents a job or skill experience block
          <ExperienceItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
