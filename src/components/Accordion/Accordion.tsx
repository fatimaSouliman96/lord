import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";
import type { faq } from "../../types/types";

type AccordionProps = {
  items: faq[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className=" lg:w-[50%] md:w-full w-full " id="accordionExample">
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.question}
          content={item.answer}
        />
      ))}
    </div>
  );
};

export default Accordion;
