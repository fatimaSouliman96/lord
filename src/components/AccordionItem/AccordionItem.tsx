import React, { useState, useRef, useEffect } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

type AccordionItemProps = {
  title: string;
  content: string;
  defaultOpen?: boolean;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const ref = useRef<HTMLDivElement>(null);

  // إغلاق عند الكليك خارج الأكورديون
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${isOpen ? "" : "border-b"} w-full border-[#EBECF0] relative`}
    >
      <h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex text-right justify-between items-center py-4 px-5  font-['Poppins'] 
          lg:text-[22px]
          xl:text-[22px]
          md:text-[22px]
          text-[16px]
          font-normal leading-[1.3] text-[#5F6368] transition duration-300"
        >
          {title}
          <span
            className={`ml-2 inline-block w-5 h-5 transform transition-[rotate] duration-500 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {!isOpen ? <IoAddCircleOutline /> : <IoRemoveCircleOutline />}
          </span>
        </button>
      </h2>

      <div
        className={`overflow-hidden rounded-[20px] transition-[max-height,padding,box-shadow] duration-700 ease-in-out ${
          isOpen
            ? "max-h-96 pb-4 w-full shadow-md shadow-gray-300 px-5"
            : "max-h-0 pb-0 shadow-none"
        }`}
      >
        <div className="text-[#5F6368] text-[22px] font-normal font-['Poppins'] leading-[1.3]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;

