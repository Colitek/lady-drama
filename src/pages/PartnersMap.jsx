import React from "react";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function PartnersMap() {
  return (
    <>
      <Banner />
      <Menu />
      <main className="min-h-screen bg-white">
        <section className="w-full flex justify-center py-12">
        <div className="w-[90%] md:w-[70%] h-[600px]">
          <iframe
  src="https://www.google.com/maps/d/u/0/embed?mid=1OHuIgs52-4g0RqhpvCKQKjIpoU6WLuPq&ehbc=2E312F"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  
  title="Mapa partnerów Lady Drama"
/>
</div>
        </section>
      </main>
      <Footer />
    </>
  );
}
