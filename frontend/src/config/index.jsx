import stationery from "../assets/stationery-svgrepo-com.svg";
import photocopying from "../assets/teacher-photocopying-text-material-for-class-svgrepo-com.svg";
import printing from "../assets/printing-page-svgrepo-com.svg";
import scanner from "../assets/document-scanner-svgrepo-com.svg";
import book from "../assets/book-open-svgrepo-com.svg";
import logo from "../assets/jokamu.png";

const config = {
  company: {
    name: "Jokamu Ltd",
    logo: logo,
  },
  navigation: [
    { name: "Product", href: "product" },
    { name: "Features", href: "features" },
    { name: "About", href: "about" },
  ],
  callToAction: {
    text: "Call to action",
    href: "#",
  },
  hero: {
    title:
      "Professional Printing & Online Services Fast, Reliable, Affordable!",
    description:
      "Looking for high-quality printing and seamless online services? We provide expert solutions for all your printing, document processing, and internet needs. Whether it's business reports, school projects, or custom designs, we deliver efficiency and precision every time.",
  },
  features: {
    title: "Your One-Stop Shop for Printing, Scanning & Stationery!",
    subtitle: "HIGH-QUALITY PRINTING, SCANNING & BOOK SUPPLIES",
    description:
      "At Jokamu, we provide top-tier printing, scanning, and book-related services tailored to meet your needs. Whether you're a student, business professional, or book lover, we offer efficient solutions for all your document and stationery requirements. From high-resolution printing to bulk book sales, we've got you covered.",
    items: [
      {
        title: "Professional Printing",
        description:
          "Get sharp, high-quality prints in black & white or color on A4, A3, and specialty papers for all your documents and designs.",
        icon: printing,
      },
      {
        title: "Fast & Reliable Scanning",
        description:
          "Digitize your documents with precision. We offer high-resolution scanning for books, contracts, forms, and more.",
        icon: scanner,
      },
      {
        title: "Book Sales & Distribution",
        description:
          "Find a wide range of books for study, business, and leisure. We also supply in bulk for schools and institutions.",
        icon: book,
      },
      {
        title: "A4 Reams & Office Stationery",
        description:
          "Stock up on premium A4 reams, notebooks, pens, and other essential office supplies at competitive prices.",
        icon: stationery,
      },
      {
        title: "Photocopying Services",
        description:
          "Quick and affordable photocopying services with clear, smudge-free prints for all your document duplication needs.",
        icon: photocopying,
      },
      {
        title: "Customized Printing Solutions",
        description:
          "Personalized printing for business cards, flyers, posters, and booklets to help you stand out.",
        icon: photocopying,
      },
    ],
  },
  pricing: {
    title: "Pricing",
    plans: [
      {
        name: "Free",
        price: "$0",
        period: "for one user",
        features: [
          "1 user",
          "Basic Support",
          "1 GB of storage",
          "Email support",
        ],
      },
      {
        name: "Pro",
        price: "$15",
        period: "per user",
        features: [
          "5 users",
          "Priority Support",
          "10 GB of storage",
          "Phone and Email support",
        ],
      },
      {
        name: "Enterprise",
        price: "$29",
        period: "per user",
        features: [
          "50 users",
          "24/7 Support",
          "100 GB of storage",
          "Phone and Email support",
        ],
      },
    ],
  },
};

export default config;
