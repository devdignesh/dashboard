import CryptoDictionary from "@/components/cypto-dictionary/crypto-dictionary";
import HeroSection from "@/components/hero-section/hero-section";
import MainContentFlow from "@/components/main-content-flow/main-content-flow";
import TopCryptoCreators from "@/components/top-cypto-creators/top-cypto-creators";
import React from "react";

const page = () => {
  return (
    <>
      <HeroSection />
      <MainContentFlow/>
      <TopCryptoCreators />
      <CryptoDictionary />
    </>
  );
};

export default page;
