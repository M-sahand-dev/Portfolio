import type {JSX} from 'react'
import {Category}from "./index"


// Container for rendering category filter buttons or tags in a centered, wrapped layout
export const CategorisContainer = ({filterItems}: {filterItems: (category: string) => void}):JSX.Element => {
    return (
        <div className="flex justify-center mb-12">
            {/* Inner wrapper for responsive and flexible child elements */}
            <div className="inline-flex flex-wrap justify-center gap-2">
                <Category onClick={() => filterItems("all")}>All</Category>
                <Category onClick={() => filterItems("Design")}>Design</Category>
                <Category onClick={() => filterItems("Development")}>Development</Category>
                <Category onClick={() => filterItems("Branding")}>Branding</Category>
            </div>
        </div>
    )
}
