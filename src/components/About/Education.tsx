import type { JSX } from 'react';
// import  { education } from '../../constants';
import { EducationItem } from './index';
import type { EducationProps } from '../../types';

interface EducationComponentProps {
  education: EducationProps[];
}

export const Education = ({
  education,
}: EducationComponentProps): JSX.Element => {
  return (
    <div className="md:w-1/2 md:pl-6">
      {/* Section heading */}
      <h3 className="text-2xl font-bold mb-6">My Education</h3>

      {/* Education list */}
      <div className="space-y-6">
        {education.map(
          (item: {
            id: number;
            years: string;
            education: string;
            university: string;
          }) => (
            // Each item renders a single education entry
            <EducationItem key={item.id} {...item} />
          )
        )}
      </div>
    </div>
  );
};
