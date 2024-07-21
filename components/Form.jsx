import React from "react";
import { Button } from "./ui/button";

const Form = ({ Title, dutton }) => {
  return (
    <div
      className={`flex flex-col p-[24px] bg-white rounded-[12px]  gap-[32px] shadow-md max-ss:px-5 max-ss:py-[24px]`}
    >
      <div>
        <h2
          className={` font-bold text-[20px] leading-[24px] tracking-[0.38px]  ${Title} `}
        >
          Leave your contacts and we will call you back within 30 minutes
        </h2>
      </div>
      <div>
        <form className=" flex gap-[24px]  max-ss:flex-col  overflow-hidden">
          <div className="grid  grid-cols-2 gap-6 flex-1 max-ss:grid-cols-1 overflow-hidden ">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className=" font-normal text-[#9aa1ae] text-[14px] leading-[17px] tracking-[0.27px]"
              >
                Full name
              </label>
              <input
                type="text"
                placeholder="My Name"
                id="name"
                className=" border-b py-2 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className=" font-normal text-[#9aa1ae] text-[14px] leading-[17px] tracking-[0.27px]"
              >
                Phone Number
              </label>
              <input
                type="number"
                placeholder="+91 0000000000"
                id="phone"
                className="  border-b py-2  "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="Bname"
                className=" font-normal text-[#9aa1ae] text-[14px] leading-[17px] tracking-[0.27px]"
              >
                Business Name
              </label>
              <input
                type="text"
                id="Bname"
                placeholder="ABC Technologies PVT LTD"
                className=" border-b py-2 "
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className=" font-normal text-[#9aa1ae] text-[14px] leading-[17px] tracking-[0.27px]"
              >
                Business Mail
              </label>
              <input
                type="email"
                id="email"
                placeholder="demoaccount@gmail.com"
                className="  border-b  py-2 "
              />
            </div>
          </div>
          <div className="flex justify-end items-end max-ss:justify-start">
            <Button variant={dutton} size="Green" type="sumbit">
              Get Consultation
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
