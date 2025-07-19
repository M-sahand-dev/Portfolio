import type { JSX } from 'react';
import type { EducationProps } from '../../types';

export const EducationItem = ({
  id,
  years,
  education,
  university,
}: EducationProps): JSX.Element => {
  return (
    <div key={id} className="bg-gray-700 bg-opacity-50 p-6 rounded-lg">
      {/* Time period (e.g., "2019 - 2023") */}
      <h4 className="text-indigo-400 mb-1">{years}</h4>

      {/* Degree or field of study */}
      <h5 className="text-xl font-bold mb-2">{education}</h5>

      {/* Institution name */}
      <p className="text-gray-400">{university}</p>
    </div>
  );
};
