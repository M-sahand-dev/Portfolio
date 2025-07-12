import type { JSX } from "react"
interface Category {
    children : string;
    onClick : () => void;
}
export const Category = ({ children, onClick } : Category) : JSX.Element => {
    return (
        // Calls onClick handler when clicked
        <button className="portfolio-filter-btn" onClick={onClick}>
            {children}
        </button>
    )
}