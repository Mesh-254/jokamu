import QualityServices from "../../assets/Quality_services.jpeg"

const ClientFocus = () => {
  return (
    <section className="relative w-full py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-16 text-gray-900">
          At Jokamu, Our Clients and Their Needs Always Come First
        </h2> */}
      </div>
      <div className="absolute inset-0 bg-gray-100/10" /> {/* Light overlay */}
      {/* Image Container - Changed from absolute bottom positioning to full container */}
      <div className="w-full h-full absolute inset-0 z-0">
        <img
          src={QualityServices || "/placeholder.svg"}
          alt="Quality Services"
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
      </div>
    </section>
  )
}

export default ClientFocus
