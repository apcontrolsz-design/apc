import React from "react";
import Navbar from "../../../components/navbar";
import Hero from "../../../components/hero";
import Brand from "../../../components/brand";
import History from "../../../components/history";
import Customer from "../../../components/customer";
import Location from "../../../components/location";
import Footer from "../../../components/footer";
const page = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Brand></Brand>
      <History></History>
      <Customer></Customer>
      <Location></Location>
      <Footer></Footer>
      <div
        className="fixed bottom-7 right-7 text-2xl animate-bounce lg:hidden z-50 
                bg-black/40 rounded-full w-12 h-12 flex items-center justify-center pointer-events-none"
      >
        ↓
      </div>
    </div>
  );
};

export default page;
