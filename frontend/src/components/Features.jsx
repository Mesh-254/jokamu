import React from "react";
import config from "../config/index.jsx";

const Features = ({ title, subtitle, description, items }) => {
  return (
    <div id="features"className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-red-500 tracking-wide uppercase mb-5 text-xl">
            {subtitle}
          </p>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-5">
            {title}
          </h2>
          <p className="mt-4 text-xl text-left text-gray-500 mx-auto text-auto ">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
            {items.map((feature, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center  h-12 w-12 rounded-md bg-background text-tertiary border-secondary border-4">
                    <img
                      src={feature.icon} // This will display the image/icon now
                      alt={feature.title}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 text-left">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 text-left">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
