import React from "react";

const Team = () => {
  return (
    <div className="flex gap-20 px-10 max-sm:px-5 bg-Backgr items-center py-10 max-vmd:flex-col">
      <div className="flex flex-col gap-20 ">
        <div className="">
          <h1 className=" font-bold text-[36px] leading-[51.84px] tracking-[0.33px] mb-3 ">
            Our team
          </h1>
          <p className=" font-medium text-[15px] leading-[20px] tracking-[-0.24px]">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
        </div>
        <div>
          <div className=" grid grid-cols-3 mb-4 max-xs:grid-cols-2 gap-5">
            <div>
              <h1 className=" font-bold text-[36px] leading-[51.84px] tracking-[0.33px] mb-2">
                28
              </h1>
              <p className="font-medium text-[15px] leading-[20px] tracking-[-0.24px] text-gray-500">
                team Members
              </p>
            </div>
            <div>
              <h1 className=" font-bold text-[36px] leading-[51.84px] tracking-[0.33px] mb-2">
                +100
              </h1>
              <p className="font-medium text-[15px] leading-[20px] tracking-[-0.24px] text-gray-500">
                Projects
              </p>
            </div>
            <div>
              <h1 className=" font-bold text-[36px] leading-[51.84px] tracking-[0.33px] mb-2">
                +7 years
              </h1>
              <p className="font-medium text-[15px] leading-[20px] tracking-[-0.24px] text-gray-500">
                in IT sphere
              </p>
            </div>
          </div>
          <div>
            <p className="font-medium text-[15px] leading-[20px] tracking-[-0.24px]">
              All the necessary specialists - from a designer to a tester - are
              on our staff. We hire the best specialists in the market. It's
              expensive but worth it
            </p>
          </div>
        </div>
      </div>
      <div>
        <img src="/Team.png" />
      </div>
    </div>
  );
};

export default Team;
