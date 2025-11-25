import React from "react";
import Banner from "../Components/Home/Banner";
import Hero from "../Components/Home/Hero";
import Features from "../Components/Home/features";
import Testimonial from "../Components/Home/Testimonial";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-0 lg:mb-50 sm:mb-15 mb-10">
      <Hero />
      </div>
      <Features />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
