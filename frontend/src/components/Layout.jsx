import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import config from "../config/index.jsx";
import Features from "./Features.jsx";
import OurStory from "./OurStory.jsx";
import OfficeLocation from "./OfficeLocations.jsx";
import ServicesDetails from "./services/ServicesDetails.jsx";
import ClientFocus from "./services/ClientFocus.jsx";
import ProductList from "./products/ProductList.jsx";
import ContactUs from "./location/ContactUs.jsx";
import LocationDetails from "./location/LocationDetails.jsx";

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
        <Route
          path="/services"
          element={
            <>
              <ServicesDetails />

              <ClientFocus />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <ProductList />
            </>
          }
        />
        <Route
          path="/location"
          element={
            <>
              <LocationDetails />
              <ContactUs />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Layout;
