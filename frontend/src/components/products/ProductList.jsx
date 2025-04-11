"use client"

import { useState, useEffect } from "react"


const products = [
    {
      id: 1,
      name: "A4 Printing Paper (Ream)",
      category: "stationery",
      price: 700.99,
      image: "https://officemart.co.ke/media/cache/6d/d2/6dd2683b5882870695b8b1a3bf592ae9@2x.webp",
      description: "High-quality A4 printing paper for everyday office and academic use.",
    },
    {
      id: 2,
      name: "Black & White Printing Service",
      category: "printing",
      price: 5,
      image: "https://www.bretonsidecopy.com/wp-content/uploads/2015/11/bwporint.png",
      description: "Sharp, high-contrast black and white prints for documents and reports.",
    },
    {
      id: 3,
      name: "Full-Color Printing Service",
      category: "printing",
      price: 10,
      image: "https://i1.adis.ws/i/canon/h-FFP-Generals2_1200x676(1)-d87cb15d-0466-11ea-97ff-b083fea00e77?w=1146&qlt=70&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)",
      description: "Vibrant color prints for flyers, posters, and presentations.",
    },
    {
      id: 4,
      name: "Document Scanning (Per Page)",
      category: "scanning",
      price: 10,
      image: "https://news.leavitt.com/wp-content/uploads/2015/06/scanning-documents.jpg",
      description: "High-resolution document scanning with PDF or JPEG output.",
    },
    {
      id: 5,
      name: "Book Sales – Academic & Fiction",
      category: "books",
      price: 199.99,
      image: "https://cdn.shopify.com/s/files/1/1222/5206/files/1_540x_8e91df8f-c41b-49d4-bb2a-4898426ccb44_large.png?v=1597906810",
      description: "A wide range of academic textbooks and popular fiction novels.",
    },
    {
      id: 6,
      name: "Customized Business Cards (100 pcs)",
      category: "printing",
      price: 1500.00,
      image:"https://cloudprint.uk/wp-content/uploads/2023/06/Business-card-768x512.jpg" ,
      description: "Professional business cards printed on premium cardstock with custom designs.",
    },
  ];
  
const ProductList = () =>{
  const [category, setCategory] = useState("all")
  const [filteredProducts, setFilteredProducts] = useState(products)
  const [enlargedProduct, setEnlargedProduct] = useState(null)

  useEffect(() => {
    setFilteredProducts(category === "all" ? products : products.filter((product) => product.category === category))
  }, [category])

  const handleProductClick = (productId) => {
    setEnlargedProduct(enlargedProduct === productId ? null : productId)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-16 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-emerald-600">
          Our Products & Accessories
        </h1>

        <div className="flex justify-center space-x-4 mb-12">
          {["all", "product", "accessory"].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ease-in-out
                ${
                  category === cat
                    ? "bg-teal-600 text-white shadow-lg shadow-teal-500/50"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer
                ${
                  enlargedProduct === product.id
                    ? "scale-105 shadow-2xl z-10 ring-2 ring-teal-500"
                    : "hover:shadow-xl hover:scale-107"
                }`}
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative h-64">
                <img src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6 mt-10">
                <h2 className="text-xl font-semibold mb-2 text-teal-300">{product.name}</h2>
                <p className="text-gray-400 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-emerald-500">ksh. {product.price.toFixed(2)}</span>
                  <button className="bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default ProductList;
