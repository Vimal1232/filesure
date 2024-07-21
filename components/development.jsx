import React from "react";
import { Button } from "./ui/button";

const Data2 = [
  {
    id: 1,
    name: "iOS development",
  },
  {
    id: 2,
    name: "Andorid development",
  },
  {
    id: 3,
    name: "Web development",
  },
  {
    id: 4,
    name: "Ui/Ux design",
  },
  {
    id: 5,
    name: "Testing",
  },
  {
    id: 6,
    name: "Launch",
  },
  {
    id: 7,
    name: "IT consulting",
  },
];

const Development = () => {
  return (
    <div>
      <div className="grid  grid-cols-2 gap-20 max-vmd:grid-cols-1">
        <div className="flex flex-col gap-10">
          <div>
            <h1 className=" font-bold text-[36px] leading-[51.84px] tracking-[0.33px] mb-4">
              Full development cycle
            </h1>
            <p className=" font-medium text-[15px] leading-[20px] tracking-[-0.24pxs]">
              We use proven technologies
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className=" font-semibold text-[20px] leading-[24px] tracking-[0.38px] mb-2">
                Web
              </h1>
              <p className=" font-normal text-[17px] leading-[22px] tracking-[-0.41px] text-gray-500 ">
                PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js/
                Nuxt / MySQL / Laravel / GO lang / django / Python
              </p>
            </div>
            <div>
              <h1 className=" font-semibold text-[20px] leading-[24px] tracking-[0.38px] mb-2">
                Mobile
              </h1>
              <p className=" font-normal text-[17px] leading-[22px] tracking-[-0.41px] text-gray-500 ">
                Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm
                / Coroutine / RxJava / RxSwift / Unit Test / Navigation
              </p>
            </div>
          </div>
        </div>
        <div className="grid gap-5 max-md:grid-cols-2 max-ss:grid-cols-1">
          {Data2.map((data) => {
            return (
              <div className=" font-normal text-[20px] leading-[24px] tracking-[0.38px] underline-offset-4 cursor-pointer hover:underline hover:duration-1000 hover:ease-in-out">
                {data.name} <span className="text-[#80a947]">{">"}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Development;
