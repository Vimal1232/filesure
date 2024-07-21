import React from "react";
import Form from "./Form";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className=" flex relative overflow-hidden pl-20 pb-40 bg-Backgr max-lg:px-20 max-sm:pl-5 max-ss:p-0">
      <div className="flex flex-col gap-20">
        <div>
          <h1 className=" font-medium text-[39px] tracking-[0.33px] leading-[47.2px] w-[600px] pt-40 max-ss:text-[28px] max-ss:w-[400px] max-xs:w-screen max-xs:text-[24px] ">
            <span className="text-[#fac223] font-bold">
              User-Centric Excellence
            </span>
            : Our App Development services Tackles Your Pain Points
          </h1>
          <p className=" w-[600px] text-[18px] tracking-[-0.24px] leading-[21.48px] font-normal mt-[20px] max-ss:w-screen max-ss:text-[14px]">
            Experience a Seamless Digital Journey with{" "}
            <span className=" font-bold text-[#80a947]  ">Desun</span> - Where
            Every Line of Code Resolves Your Challenges and{" "}
            <span className=" font-bold text-[#fac223]">
              Elevates Your App Experience
            </span>{" "}
            to Unparalleled Heights.
          </p>
        </div>
        <div>
          <Form dutton="Green" />
        </div>
      </div>
      <div className=" absolute right-[-200px] top-0 w-[860px] max-lg:right-[-300px] max-md:right-[-400px] max-vmd:hidden">
        <img src="/MainImg.png" />
      </div>
    </div>
  );
};

export default Home;
