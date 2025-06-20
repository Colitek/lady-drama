import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AboutSection from "./components/AboutSection";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Video from "./components/Video";
import Collection from "./components/Collection";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* BANNER Z ODCZYWANIEM CZASU */}
      <Banner />
      <Menu />
      <Video />
      <Collection />
      <AboutSection />
      <Gallery />
      <Contact />
      <Partners />
      <Footer />
    </div>
  );
}
