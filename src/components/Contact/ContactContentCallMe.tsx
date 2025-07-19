import type { JSX } from 'react';
import { ContactContentCallMeItem } from './index';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export const ContactContentCallMe = (): JSX.Element => {
  return (
    // Container holding contact information items (location, email, phone)
    <div className="space-y-6">
      <ContactContentCallMeItem
        icon={<FaMapMarkerAlt />}
        title={'Location'}
        description={'Dezful , Khozestan , IRAN'}
      />
      <ContactContentCallMeItem
        icon={<MdEmail />}
        title={'Email'}
        description={'mehdileilaei443@gmail.com'}
      />
      <ContactContentCallMeItem
        icon={<FaPhone />}
        title={'Phone'}
        description={'+98 9019467300'}
      />
    </div>
  );
};
