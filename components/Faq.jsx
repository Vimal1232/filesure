import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqdata = [
  {
    id: 1,
    title: "What is the cost of a mobile application?",
    desc: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.Average development time from start to finished application:Medium projects up to 3 months.Large projects about 4-6 months.To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
  },
  {
    id: 2,
    title: "Do you provide a guarantee for the mobile application?",
    desc: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.Average development time from start to finished application:Medium projects up to 3 months.Large projects about 4-6 months.To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
  },
  {
    id: 3,
    title: "How long will development take?",
    desc: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.Average development time from start to finished application:Medium projects up to 3 months.Large projects about 4-6 months.To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
  },
  {
    id: 4,
    title: "I will not tell my idea, do you guarantee confidentiality?",
    desc: "Development terms directly depend on the requirements for the mobile application, the characteristics of the company, as well as the wishes of the customer.Average development time from start to finished application:Medium projects up to 3 months.Large projects about 4-6 months.To get a more accurate estimate of the project completion time, it is necessary to determine the main task of the application, think over its logic and functionality.",
  },
];

const Faq = () => {
  return (
    <div className=" px-10 max-sm:px-10">
      <div>
        <h1 className="font-bold text-[36px] leading-[51.84px] tracking-[0.33px] mb-5">
          FAQ
        </h1>
      </div>
      <div className=" grid grid-cols-2 gap-10 max-ss:grid-cols-1">
        {faqdata.map((data) => {
          return (
            <div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>{data.title}</AccordionTrigger>
                  <AccordionContent>{data.desc}</AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
