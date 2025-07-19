import { jsx as _jsx } from "react/jsx-runtime";
import { LinkApp } from './index';
import { ContactLinks } from '../../constants/data';
export const ContactLink = () => {
    return (_jsx("div", { className: "flex space-x-4", children: ContactLinks.map((data) => (_jsx(LinkApp, { href: data.link, icon: _jsx(data.icon, {}) }, data.id))) }));
};
