import React from "react";
import HeroSection from "../../../components/Home/HeroSection";
import HowItWorks from "../../../components/Home/HowItWork";
import WhyChooseUs from "../../../components/Home/WhyChooseUs";
import LatestTutor from "../../../components/Home/LatestTutor";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <LatestTutor></LatestTutor>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
