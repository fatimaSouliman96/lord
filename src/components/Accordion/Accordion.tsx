import React from "react";
import AccordionItem from "../AccordionItem/AccordionItem";

type AccordionProps = {
  items: {
    title: string;
    content: string;
    defaultOpen?: boolean;
  }[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <div className=" lg:w-[50%] md:w-full w-full " id="accordionExample">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          defaultOpen={item.defaultOpen}
        />
      ))}
    </div>
  );
};

export default Accordion;
