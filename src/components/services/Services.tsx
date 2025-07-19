import type { JSX } from "react";
import {servicesProps} from "../../constants"
import type { ServicesProps } from "../../types";

export const Services = (): JSX.Element => {
    return (
      <div id="services" className="py-20">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <h4 className="text-indigo-400 text-lg mb-2">What I Do?</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How I Can Help Your Next Project
            </h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesProps.map((service: ServicesProps, index: number) => (
              <div
                key={index}
                id={String(service.id)}
                className="bg-gray-800 p-8 rounded-lg hover:bg-indigo-600 transition duration-300 group"
              >
                {/* Icon with hover color change */}
                <div className="text-indigo-400 group-hover:text-white text-4xl mb-4">
                  {<service.icon />}
                </div>

                {/* Skill title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-white">
                  {service.skill}
                </h3>

                {/* Skill description */}
                <p className="text-gray-400 group-hover:text-gray-200">
                  {service.poraghraph}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}