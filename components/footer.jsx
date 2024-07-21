import React from "react";

const footerdata = [
  {
    id: 1,
    name: "Contact nums",
    desc: "+91 000000000",
  },
  {
    id: 2,
    name: "Gmail",
    desc: "demo@gmail.com",
  },
  {
    id: 3,
    name: "Address",
    desc: "Mumbai, India",
  },
  {
    id: 4,
    name: "Leave a request",
    desc: "Leave a request",
  },
];

const Footer = () => {
  return (
    <div className=" px-10 max-sm:px-5  ">
      <div className="bg-black rounded-lg py-10 flex flex-col items-center">
        <div>
          <img src="/logo1.png" alt="" className="w-52" />
        </div>
        <div className="grid grid-cols-4 justify-items-center gap-40 max-md:grid-cols-3 max-md:gap-10 max-ss:grid-cols-2  ">
          {footerdata.map((data) => {
            return (
              <div className="flex flex-col gap-5">
                <p className=" font-normal text-[14px] leading-[18px] tracking-[-0.15px] text-gray-500">
                  {data.name}
                </p>
                <h1 className="font-semibold text-[17px] leading-[22px] tracking-[-0.41px] text-white">
                  {data.desc}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
