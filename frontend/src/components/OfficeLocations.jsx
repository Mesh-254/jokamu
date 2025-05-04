import OurValues from "../assets/our_values.jpeg";

const OfficeLocation = () => {
  return (
    <section className="relative w-full bg-[#111111] flex flex-col md:flex-row">
      {/* Image - Changed from fixed height to auto height and object-contain */}
      <div className="relative w-full md:w-1/2 flex items-center justify-center py-8 md:py-0">
        <img
          src={OurValues || "/placeholder.svg"}
          alt="Our Values"
          className="w-full h-auto max-h-[80vh] object-contain"
        />
      </div>

      {/* Content */}
      <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center w-full md:w-1/2">
        <h3 className="text-[#E6D5B8] text-sm tracking-[0.25em] mb-6">
          OFFICE LOCATION
        </h3>
        <h2 className="text-4xl text-left md:text-5xl lg:text-6xl font-serif text-white mb-8">
          Our Office Location
        </h2>
        <p className="text-lg text-left text-white/90 leading-relaxed mb-12">
          We have offices in Mutomo & Wote.
        </p>

        {/* Custom Link with Arrow */}
        <a href="/location" className="inline-flex items-center group">
          <span className="text-white text-lg text-left tracking-wider mr-4 transition-transform duration-300 group-hover:translate-x-2">
            LOCATE OUR OFFICES
          </span>
          <div className="relative">
            <div className="absolute top-1/2 -translate-y-1/2 h-[2px] w-12 bg-red-500 group-hover:w-16 transition-all duration-300" />
            <div className="relative z-10 w-6 h-[2px] bg-red-500 translate-x-11 rotate-45 origin-right transition-transform duration-300 group-hover:translate-x-14" />
            <div className="relative z-10 w-6 h-[2px] bg-red-500 translate-x-11 -rotate-45 origin-right transition-transform duration-300 group-hover:translate-x-14" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default OfficeLocation;
