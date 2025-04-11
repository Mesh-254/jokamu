const ClientFocus = () => {
    return (
      <section className="relative w-full py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-16 text-gray-900">
            At Jokamu, Our Clients and Their Needs Always Come First
          </h2>
        </div>

        <div className="absolute inset-0 bg-gray/100" /> {/* Dark overlay */}
        {/* Decorative Line */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <img
            src= "https://images.unsplash.com/photo-1594286851359-8e5a51b36bba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full"
            aria-hidden="true"
          />
        </div>
      </section>
    )
  }
  
  export default ClientFocus
  
  