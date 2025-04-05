import { ArrowRight } from "lucide-react";
import ContactForm from "./ContactForm";
import { useNavigate } from "react-router-dom";

const OurStory = () => {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl text-left font-bold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="text-lg text-gray-600 text-left text-lg ">
              At <span className="text-[green] font-bold"> Lireno</span>{" "}
              <span className="text-[purple] font-bold"> Interiors</span>, We
              deliver seamless, high-quality interior decoration solutions,
              transforming spaces with precision, creativity, and innovation.
              From modern designs to timeless aesthetics, we craft environments
              that reflect your vision and enhance your lifestyle. Your dream
              space, our priority.
            </p>
            <div className="space-y-4 font-medium">
              {[
               "Seamless Interior Design Solutions",  
               "Precision in Craftsmanship and Execution",  
               "Scalable Designs for Every Space", 
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <button className="flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
