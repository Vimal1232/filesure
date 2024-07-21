import React from "react";
import Form from "./Form";

const Contact = () => {
  return (
    <div className="flex backgroundgr pt-20 px-10 pb-20 gap-6 max-md:flex-col max-ss:px-5 ">
      <div>
        <h1 className="font-bold text-white text-[36px] leading-[51.84px] tracking-[0.33px] mb-4">
          Let's discuss Your project
        </h1>
        <p className="font-medium text-white text-[15px] leading-[20px]">
          Let's figure out how to create an effective application, its cost and
          terms of its development
        </p>
      </div>
      <div>
        <Form Title="hidden" dutton="Yellow" />
      </div>
    </div>
  );
};

export default Contact;
