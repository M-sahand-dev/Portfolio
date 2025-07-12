import type { JSX } from 'react';
import { useState } from 'react';
import {portForioData}from "../../constants"
import {CategorisContainer , PortfolioItemsContainer}from "./index"
export const Portfolio = (): JSX.Element => {
      // Local state for current filtered items
    const [portforioItem, setPortforioItem] = useState(portForioData)

      // Handle category filtering
    const filterItems = (category:string) => {
        console.log("Filtering by category:", category); // Debug: can be removed in production
        // setPortforioItem(portForioData)

        if (category === "all") {
        setPortforioItem(portForioData)
        return
        }

        // Filter portfolio data by category
        const newCategory = portForioData.filter((item) => item.category === category)
        setPortforioItem(newCategory)
    }
    return (
        <section id="portfolio" className="py-20 bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    {/* Section subtitle */}
                    <h4 className="text-indigo-400 text-lg mb-2">
                        My Work
                    </h4>

                    {/* Main title */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Featured Projects
                    </h2>

                    {/* Decorative underline */}
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                </div>

                <CategorisContainer filterItems={filterItems}/>

                
        {/* Filtered Portfolio Items */}
        <PortfolioItemsContainer  portforioItem={portforioItem} />

            </div>
        </section>
    );
};