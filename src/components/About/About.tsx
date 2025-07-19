import type { JSX } from 'react';
import {
  Title,
  Info,
  InformationSection,
  Education,
  Experience,
  SkilsItem,
  LanguageSkils,
} from './index';
import { calculateAge } from '../../constants';
import { education, experience } from '../../constants';

export const About = (): JSX.Element => {
  const birthDate = '2007-10-28';
  const age = calculateAge(birthDate);

  return (
    <div className="">
      <div id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          {/* Section Title */}
          <Title />
          <div className="flex flex-col md:flex-row">
            <Info
              id={'info'}
              name={'Mehdi Leylaei'}
              Info={
                'I help you build brand for your business at an affordable price. Thousands of clients have procured exceptional results while working with our dedicated team. when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
              }
              Info2={
                "Delivering work within time and budget which meets client's requirements is our moto. Lorem Ipsum has been the industry's standard dummy text ever when an unknown printer took a galley."
              }
            />

            <InformationSection
              id={'information'}
              classStyle={'flex justify-between border-b border-gray-700 py-2'}
              name={'Mehdi Leylaei'}
              email={'mehdileilaei443@gmail.com'}
              age={age}
              from={'Dezful , IRAN'}
            />
          </div>

          {/* Experience and Education Section */}
          <div className="mt-20">
            <div className="flex flex-col md:flex-row">
              <Experience experience={experience} />
              <Education education={education} />
            </div>
          </div>
          <div className="mt-20">
            {/* Section heading: technical skills */}
            <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>

            {/* Renders list of technical skills */}
            <SkilsItem />

            {/* Section heading: language skills */}
            <h3 className="text-2xl font-bold mt-8 mb-8 text-center">
              Language Skills
            </h3>

            {/* Renders list of language skills with animated bars */}
            <LanguageSkils />
          </div>
        </div>
      </div>
    </div>
  );
};
