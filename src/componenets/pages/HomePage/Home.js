import React from "react";
import HeroSection from "../HeroSection";
import { homeObjOne, homeObjTwo, homeObjFour } from "../../../Data";
import Pricing from "../../Pricing";
import InputImage from "../InputImg/InputImage";

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <InputImage />
      <HeroSection {...homeObjTwo} />
      <Pricing />
      <HeroSection {...homeObjFour} />
    </>
  );
}

export default Home;
