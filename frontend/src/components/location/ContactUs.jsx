import { ArrowRight } from "lucide-react";
import ContactForm from "../ContactForm";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/our-story");
  };
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl text-left font-bold text-gray-900 sm:text-4xl">
              Get in Touch with Us
            </h2>
            <p className="text-lg text-gray-600 text-left">
              At <span className="text-[green] font-bold">Jokamu</span>
              <span className="text-[black] font-bold"> ltd</span>, We provide
              top-tier printing, scanning, and book-selling solutions, ensuring
              precision, efficiency, and quality in every service. Whether you
              need crisp prints, high-resolution scans, or a diverse selection
              of books, we cater to your needs with reliability and excellence.
              Your documents, prints, and reading materials—handled with care.
            </p>
            <p className="text-lg text-gray-600 text-left">
              Fill out the form on the right to get in touch with us. Our team
              is ready to assist you with tailored interior designs and
              solutions that elevate your space and enhance your lifestyle.
            </p>

            <div className="space-y-4 font-medium">
              {[
                "Seamless Printing & Scanning Solutions",
                "Precision in Quality and Execution",
                "Scalable Services for Every Need",
              ].map((feature, index) => (
                <div key={index} className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
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

export default ContactUs;
