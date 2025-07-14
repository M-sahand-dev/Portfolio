import type { JSX } from "react";

export const LinkApp = ({href , icon} : {href : string , icon : JSX.Element}):JSX.Element=> {
  return (
        // Link button with icon and hover styles for contact methods
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-indigo-600 hover:text-white transition"
        >
            {icon}
        </a>
);
};