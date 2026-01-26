import React from "react";
import Navbar from "../../components/navbar";
import Hero from "../../components/my/hero";
import Brand from "../../components/my/brand";
import Location from "../../components/location";
import Footer from "../../components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
      <Location />
      <Footer />
    </div>
  );
};

export default page;
