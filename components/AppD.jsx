import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const appdata = [
  {
    id: 1,
    name: "Analysis",
    desc: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
  },
  {
    id: 2,
    name: "Design",
    desc: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
  },
  {
    id: 3,
    name: "Development",
    desc: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
  },
  {
    id: 4,
    name: "Testing",
    desc: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
  },
  {
    id: 5,
    name: "Launching",
    desc: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
  },
  {
    id: 6,
    name: "Support",
    desc: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
  },
];

const AppD = () => {
  return (
    <div className="px-10 max-sm:px-5">
      <div>
        <h1 className="font-bold text-[36px] leading-[51.84px] tracking-[0.33px] mb-5">
          Application Development Stages
        </h1>
      </div>
      <div className=" grid grid-cols-3 gap-6 max-vmd:grid-cols-1 ">
        <div className="">
          {appdata.slice(0, 3).map((data) => {
            return (
              <div className="flex flex-col gap-10 ">
                <div className="flex flex-col gap-4 bg-white p-6 shadow-lg">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage src="/images.jpeg" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className=" font-semibold text-[20px] leading-[24px] tracking-[0.38px]">
                      {data.name}
                    </h1>
                  </div>
                  <div>
                    <p className=" font-normal text-[15px] leading-[20px] tracking-[-0.24px] text-[#101828]">
                      {data.desc}
                    </p>
                  </div>
                </div>

                <div></div>
              </div>
            );
          })}
        </div>

        <div>
          <img src="/hope-gif1.png" className=" max-vmd:hidden" />
        </div>
        <div>
          {appdata.slice(3).map((data) => {
            return (
              <div className="flex flex-col gap-10 ">
                <div className="flex flex-col gap-4 bg-white p-6 shadow-lg">
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarImage src="/images.jpeg" alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className=" font-semibold text-[20px] leading-[24px] tracking-[0.38px]">
                      {data.name}
                    </h1>
                  </div>
                  <div>
                    <p className=" font-normal text-[15px] leading-[20px] tracking-[-0.24px] text-[#101828]">
                      {data.desc}
                    </p>
                  </div>
                </div>

                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AppD;
