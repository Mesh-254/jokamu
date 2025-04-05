"use client";

import { ChevronDown } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import ourStoryImage from "../assets/office_space.jpg";

const Hero = ({title, description}) => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={ourStoryImage}
          alt="Office environment"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full mt-11">
        <div className="container mx-auto px-8 lg:px-24 h-full">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <h1 class="font-mirador  text-left font-extrabold text-5xl sm:text-6xl lg:text-7xl xl:text-6xl text-white">
             {title}
            </h1>

            <p className="text-xl font-light text-left sm:text-xl text-gray-200 max-w-6xl mt-12 mb-12">
              {description}
            </p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <ScrollLink
          to="features"
          smooth={true}
          duration={500}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer group"
        >
          <div className="p-4 border border-red-500 hover:bg-red-500/10 transition-colors">
            <ChevronDown className="h-6 w-6 text-white animate-bounce" />
          </div>
        </ScrollLink>
      </div>
    </div>
  );
};

export default Hero;
