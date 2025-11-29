import React from "react";
import Banner from "../Components/Home/Banner";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/features";
import Testimonial from "../Components/Home/Testimonial";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen grid grid-raws-13">
      <Banner className="grid row-span-2" />
      <div className="mt-0 grid row-span-3">
      <Hero />
      </div>
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
