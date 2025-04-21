"use client";

import { useState } from "react";
import {
  FileText,
  Camera,
  FileCheck,
  FileSpreadsheet,
  Shield,
  CreditCard,
  Calendar,
  Receipt,
  Briefcase,
} from "lucide-react";

const ServicesDetails = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Service categories with icons
  const serviceCategories = [
    {
      id: "document",
      name: "Document Services",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      id: "photo",
      name: "Photo & Media Services",
      icon: <Camera className="w-6 h-6" />,
    },
    {
      id: "government",
      name: "Government & Application Services",
      icon: <FileCheck className="w-6 h-6" />,
    },
    {
      id: "kra",
      name: "KRA & Tax Services",
      icon: <FileSpreadsheet className="w-6 h-6" />,
    },
    {
      id: "insurance",
      name: "Insurance Services",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      id: "card",
      name: "Card & Invitation Services",
      icon: <CreditCard className="w-6 h-6" />,
    },
    {
      id: "programme",
      name: "Programmes & Certificates",
      icon: <Calendar className="w-6 h-6" />,
    },
    {
      id: "invoice",
      name: "Invoice & Payslip Services",
      icon: <Receipt className="w-6 h-6" />,
    },
    {
      id: "misc",
      name: "Miscellaneous Services",
      icon: <Briefcase className="w-6 h-6" />,
    },
  ];

  // All services data organized by category
  const servicesData = {
    document: [
      { name: "Photocopying (one-sided, B&W)", price: 5 },
      { name: "Photocopying (both-sided, B&W)", price: 10 },
      { name: "Photocopying (colored)", price: 10 },
      { name: "Photocopying ID (both sides)", price: 10 },
      { name: "Printing Documents (B&W)", price: 10 },
      { name: "Printing Documents (both-sided B&W)", price: 10 },
      { name: "Printing ID (B&W)", price: 10 },
      { name: "Printing ID (Colored)", price: 10 },
      { name: "Scanning Documents", price: 30 },
      { name: "Editing Documents", price: 20 },
      { name: "Typesetting", price: 30 },
      { name: "Binding", price: 50 },
      { name: "Lamination", price: 50 },
      { name: "Printing Envelopes", price: 30 },
    ],
    photo: [
      { name: "Passport Photo Printing", price: 50 },
      { name: "Photo Printing (Standard)", price: 30 },
      { name: "Photo Taking & Printing", price: 50 },
    ],
    government: [
      { name: "E-Citizen Account Creation", price: 100 },
      { name: "Good Conduct Certificate Application", price: 200 },
      { name: "Emigration Passport Application", price: 600 },
      { name: "Business Registration", price: 2500 },
      { name: "Log Book Change", price: 300 },
      { name: "Vehicle Transfer", price: 300 },
      { name: "PDL Application", price: 250 },
      { name: "PSV Badge Application", price: 300 },
      { name: "Smart Driving License Application", price: 200 },
      { name: "Reflective Number Plate Application", price: 300 },
      { name: "Driving License Renewal", price: 200 },
      { name: "TSC Registration", price: 300 },
      { name: "HELB Application", price: 500 },
      { name: "KUCCPS Application", price: 300 },
      { name: "SHA Registration", price: 200 },
      { name: "Checking SHA Status", price: 50 },
    ],
    kra: [
      { name: "KRA PIN Registration", price: 200 },
      { name: "KRA Returns Filing", price: 150 },
      { name: "Tax Compliance Certificate Application", price: 300 },
      { name: "VAT Returns Filing", price: 300 },
      { name: "KRA PIN Retrieval", price: 100 },
    ],
    insurance: [
      { name: "Insurance Application", price: 150 },
      { name: "Insurance Document Printing", price: 50 },
    ],
    card: [
      { name: "Designing Business Cards", price: 100 },
      { name: "Printing Business Cards", price: 40 },
      { name: "Designing Occasional Cards", price: 100 },
      { name: "Printing Occasional Cards", price: 40 },
      { name: "Wedding Cards (Custom Design & Print)", price: 100 },
    ],
    programme: [
      { name: "Designing Programmes", price: 100 },
      { name: "Programme Printing", price: 40 },
      { name: "Designing Certificates", price: 100 },
      { name: "Certificate Printing", price: 40 },
      { name: "Calendar Design", price: 100 },
      { name: "Calendar Printing", price: 40 },
    ],
    invoice: [
      { name: "Invoice Design", price: 600 },
      { name: "Invoice Printing", price: 100 },
      { name: "Payslip Downloading/Printing", price: 30 },
    ],
    misc: [
      { name: "Posters Printouts", price: 50 },
      { name: "Browsing (per PMT unit)", price: "1 PMT" },
      { name: "Email Creation", price: 50 },
      { name: "Phone Update Services", price: 50 },
    ],
  };

  // Get categories to display based on filter
  const categoriesToDisplay =
    activeCategory === "all"
      ? serviceCategories
      : serviceCategories.filter((cat) => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your document, government
            application, and business needs.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${
                activeCategory === "all"
                  ? "bg-teal-600 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            All Services
          </button>

          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2
                ${
                  activeCategory === category.id
                    ? "bg-teal-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesToDisplay.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 bg-teal-600 text-white flex items-center gap-3">
                {category.icon}
                <h2 className="text-xl font-bold">{category.name}</h2>
              </div>

              <div className="divide-y divide-gray-200">
                {servicesData[category.id].map((service, index) => (
                  <div
                    key={index}
                    className="p-4 flex justify-between items-center hover:bg-gray-50"
                  >
                    <span className="text-gray-800">{service.name}</span>
                    <span className="font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                      {typeof service.price === "number"
                        ? `Ksh. ${service.price}`
                        : service.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-teal-500 to-emerald-600 text-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Need a Custom Service?</h3>
            <p className="mb-6">
              We offer tailored solutions for businesses and individuals.
              Contact us to discuss your specific requirements.
            </p>
            <button className="bg-white text-teal-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;
