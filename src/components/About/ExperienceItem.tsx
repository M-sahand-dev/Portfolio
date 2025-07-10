import type { JSX } from 'react';
import type { ExperienceProps } from '../../types';

export const ExperienceItem = ({ 
  id, 
  present,
  skills,
  sourcePractice
}: ExperienceProps): JSX.Element => {
  return (
    <div id={String(id)} className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
      <h4 className="text-indigo-400 mb-1">{present}</h4>
      <h5 className="text-xl font-bold mb-2">{skills}</h5>
      <p className="text-gray-400">{sourcePractice}</p>
    </div>
  );
};
