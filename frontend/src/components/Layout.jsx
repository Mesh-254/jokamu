import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import config from "../config/index.jsx";
import Features from "./Features.jsx";
import OurStory from "./OurStory.jsx";
import OfficeLocation from "./OfficeLocations.jsx";

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />;
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero
                title={config.hero.title}
                description={config.hero.description}
              />

              <Features
                title={config.features.title}
                subtitle={config.features.subtitle}
                description={config.features.description}
                items={config.features.items}
              />
              <OurStory />
              <OfficeLocation />
            </>
          }
        />
        {/* <Route path="/about" element={<div>About</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/products" element={<div>Products</div>} />
        <Route path="/location" element={<div>Location</div>} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Layout;
