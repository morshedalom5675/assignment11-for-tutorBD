import React from "react";
import HeroSection from "../../../components/Home/HeroSection";
import HowItWorks from "../../../components/Home/HowItWork";
import WhyChooseUs from "../../../components/Home/WhyChooseUs";
import LatestTutor from "../../../components/Home/LatestTutor";
import LatestTuition from "../../../components/Home/LatestTuition";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <HowItWorks></HowItWorks>
      <LatestTuition></LatestTuition>
      <LatestTutor></LatestTutor>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
