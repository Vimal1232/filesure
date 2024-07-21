import React from "react";
import Industry from "../Data/industry.json";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Devloped = () => {
  return (
    <div>
      <div className="flex flex-col gap-10 pt-10 ">
        <div>
          <h1 className="font-bold text-[36px] leading-[51.84px] tracking-[0.33px]">
            Developed more than <span className="text-[#80a947]">100</span>{" "}
            projects in <span className="text-[#80a947]">15</span> industries
          </h1>
        </div>
        <div className=" grid grid-cols-3 max-sm:grid-cols-2 max-xs:grid-cols-1">
          {Industry.map((data) => {
            return (
              <div className="flex gap-4 p-3">
                <div>
                  <Avatar>
                    <AvatarImage
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5kHhnxbgh3QYK0mbUBQWCtMHmBoD30npzcA&s"
                      alt={data.name}
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div>{data.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Devloped;
