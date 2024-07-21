"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={` px-[25px]  bg-white rounded-[8px] justify-evenly max-sm:h-auto  shadow-xl `}
    >
      <div className="flex  gap-20 max-sm:flex-1   items-center max-m:flex-row max-sm:justify-between max-sm:items-center">
        <div className="">
          <img src="/logo.png" className="w-[174px] h-[60px] object-contain" />
        </div>
        <div className={`flex gap-4  max-sm:hidden`}>
          <div
            className={` font-LeagueGothic text-[18px] tracking-[0.02em] leading-[1.2em]  cursor-pointer `}
          >
            Service
          </div>

          <div
            className={` font-LeagueGothic text-[18px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer `}
          >
            Media
          </div>

          <div
            className={` font-LeagueGothic text-[18px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer `}
          >
            Case
          </div>

          <div
            className={` font-LeagueGothic text-[18px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer `}
          >
            Contact
          </div>
        </div>
        <div className="flex gap-5 text-[#80a947] max-md:hidden ">
          <p>+91 0000000000</p>
          <p>Demo@gmail.com</p>
        </div>
        <div>
          <img
            src={open === true ? "/close.png" : "/hamburger.png"}
            alt=""
            width={32}
            height={32}
            className={` w-[32px] max-sm:flex hidden cursor-pointer h-[32px]`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <motion.div
        initial={{ height: "0vh" }}
        animate={{ height: open === true ? "100vh" : "0vh" }}
        transition={{ duration: 0.5 }}
        className={`${
          open === true ? "h-screen " : "h-0"
        } max-sm:flex  w-full bg-Primary`}
      >
        <div
          className={`${open === true ? "flex" : "hidden"}  flex-col pt-20 `}
        >
          <div className={`flex flex-col `}>
            <div
              className={` font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em]  cursor-pointer`}
              onClick={() => setOpen(!open)}
            >
              Service
            </div>

            <div
              className={` font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer`}
              onClick={() => setOpen(!open)}
            >
              Media
            </div>

            <div
              className={` font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer`}
              onClick={() => setOpen(!open)}
            >
              Case
            </div>

            <div
              className={` font-LeagueGothic text-[40px] tracking-[0.02em] leading-[1.2em] text-start cursor-pointer`}
              onClick={() => setOpen(!open)}
            >
              Contact
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
