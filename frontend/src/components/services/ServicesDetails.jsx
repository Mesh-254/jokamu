"use client"

import { useState } from "react"

const ServicesDetails = () =>{
  const [enlargedImage, setEnlargedImage] = useState(null)

  const services = [
    {
      id: "01",
      title: "Professional Printing Services",
      description:
        "Get crisp, high-quality prints for all your documents, presentations, reports, and promotional materials. We offer black & white and color printing on A4, A3, and specialty papers. Whether you need bulk printing or single copies, we ensure fast and efficient service with premium paper options.",
      image: "https://images.unsplash.com/photo-1693031630369-bd429a57f115?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "02",
      title: "Fast & Reliable Scanning",
      description:
        "Preserve your documents and books with our high-resolution scanning services. We offer fast, accurate scanning for text, images, and official documents, ensuring digital clarity. Whether you need PDFs, JPEGs, or OCR-enabled files, we deliver top-notch digitization for individuals and businesses.",
      image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "03",
      title: "Book Sales & Distribution",
      description:
        "Find a wide range of books for education, business, and leisure. We stock textbooks, novels, reference materials, and business guides. Our bulk distribution services cater to schools, colleges, libraries, and corporate institutions, ensuring easy access to quality reading materials.",
      image: "https://media.istockphoto.com/id/496878713/photo/book-sale.jpg?s=1024x1024&w=is&k=20&c=Ee-I5O-3AUFFuaMaZS3PMNHhg3a2oXcpvswkEekpS-A=",
    },
    {
      id: "04",
      title: "A4 Reams & Office Stationery",
      description:
        "Get high-quality A4 reams, notebooks, pens, files, and other essential stationery supplies at unbeatable prices. Our premium paper is perfect for printing, copying, and professional document preparation, ensuring durability and crisp print quality for all your office needs.",
      image: "https://d1yfjw4ro643jd.cloudfront.net/7_2023/e95863b6-303d-4ff7-bc53-42decd38ea1c.PNG",
    },
    {
      id: "05",
      title: "Photocopying & Document Duplication",
      description:
        "We provide sharp and clear photocopies with high-speed duplication services. Whether you need single or bulk copies, our professional photocopying ensures smudge-free and long-lasting prints. Ideal for businesses, students, and institutions.",
      image: "https://images.unsplash.com/photo-1630327722923-5ebd594ddda9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: "06",
      title: "Customized Printing Solutions",
      description:
        "Stand out with personalized prints for business cards, flyers, posters, and booklets. Our custom printing services allow you to bring your branding and marketing ideas to life with professional finishes, vibrant colors, and premium paper choices.",
      image: "https://images.unsplash.com/photo-1650094980833-7373de26feb6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  

  const handleImageClick = (image) => {
    setEnlargedImage(image)
  }

  const handleCloseEnlarged = () => {
    setEnlargedImage(null)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 mt-30">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600">Professional solutions for all your printing, scanning, and book needs.</p>
      </div>

      <div className="grid gap-16">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              index % 2 === 0 ? "md:grid-flow-col" : "md:grid-flow-col-dense"
            }`}
          >
            <div className={`space-y-4 ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
              <div className="flex items-center gap-4">
                <span className="text-orange-500 text-xl font-semibold">{service.id}</span>
                <h2 className="text-2xl font-bold">{service.title}</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
            </div>
            <div
              className={`relative h-[300px] md:h-[400px] ${index % 2 === 0 ? "md:order-2" : "md:order-1"} cursor-pointer`}
              onClick={() => handleImageClick(service.image)}
            >
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {enlargedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleCloseEnlarged}
        >
          <div className="relative w-[90vw] h-[90vh]">
            <img
              src={enlargedImage || "/placeholder.svg"}
              alt="Enlarged service image"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
export default ServicesDetails;

