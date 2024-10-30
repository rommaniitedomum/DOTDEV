import React from "react";
import HeroSection from "./HeroSection";
import Features from "./Features";
import Workflow from "./Workflow";
import Price from "./Price";
import Testimonial from "./Testimonial";

const index = () => {
  return (
    <div className="home">
      <div className="container">
        <HeroSection />
        <Features />
        <Workflow />
        <Price />
        <Testimonial />
      </div>
    </div>
  );
};

export default index;
