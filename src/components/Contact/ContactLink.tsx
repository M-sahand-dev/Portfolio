import type { JSX } from 'react';
import { LinkApp } from './index';
import { ContactLinks } from '../../constants/data';

export const ContactLink = (): JSX.Element => {
  return (
    <div className="flex space-x-4">
      {ContactLinks.map((data) => (
        <LinkApp key={data.id} href={data.link} icon={<data.icon />} />
      ))}
    </div>
  );
};
