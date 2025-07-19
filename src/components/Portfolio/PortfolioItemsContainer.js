import { jsx as _jsx } from "react/jsx-runtime";
import { PortforioItem } from './index';
export const PortfolioItemsContainer = ({ portforioItem, }) => {
    return (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: portforioItem.map((item) => (_jsx(PortforioItem, { ...item }, item.id))) }));
};
