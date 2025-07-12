import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import AboutSection from "../components/AboutSection";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Video from "../components/Video";
import Collection from "../components/Collection";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Partners from "../components/Partners";
import Footer from "../components/Footer";
import SocialBar from "../components/SocialBar";
import About from "../components/About";
import SocialBarMobile from "../components/SocialBarMobile";
import { Helmet } from "react-helmet";

export default function Home() {

  return (
    <>
    <Helmet>
        <title>Lady Drama – Polska marka odzieżowa premium dla kobiet</title>
        <meta
          name="description"
          content="Lady Drama – Polska marka odzieżowa premium dla kobiet. Stylowe i wysokiej jakości ubrania, które podkreślą Twoją wyjątkowość."
        />
      </Helmet>
    
    
      <div className="bg-white text-gray-900 font-sans">
      {/* BANNER Z ODCZYWANIEM CZASU */}
      
        <div id="header">
    <Banner />
    <Menu />
  </div>
 <SocialBar />
       {/*<Video />*/}
       <Collection />
       <AboutSection />
       <About />
       <Gallery />
       <SocialBarMobile />
       <Contact />
       <Partners />

       <Footer />
       
     </div>
</>
);
}
