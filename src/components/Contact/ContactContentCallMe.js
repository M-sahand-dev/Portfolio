import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ContactContentCallMeItem } from './index';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
export const ContactContentCallMe = () => {
    return (
    // Container holding contact information items (location, email, phone)
    _jsxs("div", { className: "space-y-6", children: [_jsx(ContactContentCallMeItem, { icon: _jsx(FaMapMarkerAlt, {}), title: 'Location', description: 'Dezful , Khozestan , IRAN' }), _jsx(ContactContentCallMeItem, { icon: _jsx(MdEmail, {}), title: 'Email', description: 'mehdileilaei443@gmail.com' }), _jsx(ContactContentCallMeItem, { icon: _jsx(FaPhone, {}), title: 'Phone', description: '+98 9019467300' })] }));
};
