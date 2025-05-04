"use client";

import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const LocationDetails = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [isSatellite, setSatellite] = useState(true);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibWVzaGFjazMxOTciLCJhIjoiY202eXRzaXJhMTBvNzJrczYxZm95a2xyNCJ9.dsDXcxCIRKmN1BTBoFUdNA";

    if (map.current) return; // Prevent re-initialization

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: isSatellite
        ? "mapbox://styles/mapbox/satellite-v9"
        : "mapbox://styles/mapbox/streets-v11",
      center: [-1.8467374, 38.207778], // Exact Mutomo coordinates
      zoom: 13,
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl());

    // Add marker with popup for Mutomo Branch
    new mapboxgl.Marker()
      .setLngLat([-1.8467374, 38.207778])
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }).setHTML(
          "<h3>Mutomo Branch</h3><p>Kitui-Kibwezi Highway 114</p>"
        )
      )
      .addTo(map.current);

    return () => map.current?.remove();
  }, []); // Only run once on mount

  // Update map style when satellite view is toggled
  useEffect(() => {
    if (map.current) {
      map.current.setStyle(
        isSatellite
          ? "mapbox://styles/mapbox/satellite-v9"
          : "mapbox://styles/mapbox/streets-v11"
      );
    }
  }, [isSatellite]);

  return (
    <section className="relative w-full min-h-screen bg-[#111111] mt-15">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 py-16">
          {/* Property Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#E6D5B8] text-sm tracking-[0.25em] mb-4">
                OUR LOCATIONS
              </h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                Mutomo Branch
              </h1>
              <div className="text-xl md:text-2xl text-gray-300 font-serif">
                Kitui-Kibwezi Highway 114
                <br />
                Mutomo
              </div>

              <br />
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">
                  Wote Branch
                </h1>
                <div className="text-xl md:text-2xl text-gray-300 font-serif">
                  ABSA Bank Road next to Airtel Customer Care Shop
                  <br />
                  Wote
                </div>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              A state-of-the-art printing and distribution hub, our facility is
              strategically located to ensure efficient service delivery and
              seamless logistics. We specialize in high-quality printing,
              scanning, and book distribution, catering to businesses, students,
              and professionals with precision and speed.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4 border-b border-gray-200 pb-2">
                WHY CHOOSE OUR PRINTING & DISTRIBUTION SERVICES?
              </h2>
              <ul className="space-y-2 text-gray-300 text-left">
                <li>
                  • Premium-Quality Printing & Scanning – Crisp, clear prints
                  and high-resolution scans for all your needs.
                </li>
                <li>
                  • Wide Selection of Books & Office Supplies – From academic
                  textbooks to fiction, we provide diverse options.
                </li>
                <li>
                  • Fast & Reliable Order Fulfillment – Efficient processing to
                  meet deadlines without compromise.
                </li>
                <li>
                  • Tailored Solutions – Whether for personal, academic, or
                  business use, we customize our services to fit your needs.
                </li>
              </ul>
            </div>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-white ">
            <div
              id="map-container"
              ref={mapContainer}
              className="absolute inset-0 w-full h-full"
            />
            {/* Satellite Toggle */}
            <div className="absolute top-4 right-4 z-10">
              <button
                onClick={() => setSatellite(!isSatellite)}
                className="bg-white px-4 py-2 rounded-md shadow-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {isSatellite ? "Street View" : "Satellite View"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationDetails;
