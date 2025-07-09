import type { JSX } from 'react';
//for test
export const About = (): JSX.Element => {
  return (
    <div className="flex flex-col text-white items-center justify-center">
      <h1 className="text-4xl font-bold text-center">About Me</h1>
      <p className="text-xl mt-4">
        I am a passionate full-stack developer with a strong foundation in
        JavaScript and React. I have experience building dynamic and
        user-friendly web applications using React and other technologies.
      </p>
      <p className="text-xl mt-4">
        In my free time, I enjoy exploring new technologies and learning about
        web development trends. I am always looking to expand my skills and
        stay up-to-date with the latest developments in the industry.
      </p>
    </div>
  );
};