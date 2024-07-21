import React from "react";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Logobar from "@/components/logobar";
import Development from "@/components/development";
import Devloped from "@/components/Devloped";
import Contact from "@/components/Contact";
import AppD from "@/components/AppD";
import Team from "@/components/Team";
import Faq from "@/components/Faq";
import Footer from "@/components/footer";
const page = () => {
  return (
    <div className="  relavtive">
      <div className=" fixed  top-[40px] z-50 left-[80px] max-ss:left-[20px] ">
        <Navbar />
      </div>
      <Home />
      <div className=" px-10 max-md:px-5">
        <Logobar />
      </div>
      <div className="px-10 max-md:px-5 mb-20">
        <Development />
      </div>
      <div className="px-10 max-md:px-5 pb-20 bg-Backgr">
        <Devloped />
      </div>
      <div className="pb-20">
        <Contact />
      </div>
      <div className="pb-20">
        <AppD />
      </div>
      <div className="pb-20">
        <Team />
      </div>
      <div className="pb-20">
        <Faq />
      </div>
      <div className="pb-20">
        <Footer />
      </div>
    </div>
  );
};

export default page;
