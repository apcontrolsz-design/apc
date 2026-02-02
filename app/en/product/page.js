import React from "react";
import Navbar from "../../../components/navbar";
import Hero from "../../../components/id/hero";
import ProductAccordion from "../../../components/id/productAccordion";
import Footer from "../../../components/footer";
import ProductContact from "../../../components/id/ProductContact";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductAccordion />
      <ProductContact />
      <Footer />
    </div>
  );
};

export default page;
