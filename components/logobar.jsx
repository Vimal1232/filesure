import React from "react";
import Logoimg from "../Data/Logo.json";

const Logobar = () => {
  return (
    <div className="mt-10 mb-20">
      <div className=" border-b border-t border-gray-300 px-[55px] max-md:px-[25px] py-[60px] ">
        <div className="grid grid-cols-6 gap-6 place-content-center max-ss:grid-cols-3 max-xs:grid-cols-2">
          {Logoimg.map((data) => {
            return (
              <div className="w-[120px] h-[120px]">
                <img src={data.img} className="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Logobar;
