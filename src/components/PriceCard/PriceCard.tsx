import React from "react";
import Speedometer from '../../../public/Speedometer.json'
import Lottie from "lottie-react";
import HoverButton from "../hoverBtn/HoverBtn";

interface PriceCardProps {
  link?: string;
  speed: string;
  unlimited: string;
  offerDuration: string;
  city: string;
  price: string;
  buttonText: string;
}

const PriceCard: React.FC<PriceCardProps> = ({
  speed,
  unlimited,
  offerDuration,
  city,
  price,
  buttonText
}) => {
  return (
    <div className="relative border border-gray-200 bg-white shadow-[0_1px_0px_rgba(1,16,61,0.1),0_-20px_70px_rgba(1,16,61,0.03)] rounded-[30px] p-[50px_60px] text-center overflow-hidden transition-all duration-500 hover:bg-[#3983b2] group">
      <div >
        <div className="mb-5 flex justify-center">
          <div className="w-[100px] h-[100px]">
            <div className="w-full h-full bg-gray-100 rounded-full flex items-center justify-center">
              <Lottie animationData={Speedometer} loop={true} />
            </div>
          </div>
        </div>
        <hr className="w-[80%] mx-auto text-gray-200 " />
        <div className="mb-5">
          <ul className="space-y-2 text-center">
            <li className="font-semibold text-2xl text-[#5f6368] group-hover:text-white">{speed}</li>
            <li className="font-semibold text-2xl text-[#5f6368] group-hover:text-white">{unlimited}</li>
            <li className="font-semibold text-2xl text-[#5f6368] group-hover:text-white">{offerDuration}</li>
            <li className="font-semibold text-xl text-[#e6bd49] group-hover:text-white">{city}</li>
          </ul>
        </div>
        <hr className="w-[85%] mx-auto text-gray-200 " />
        <div className="mb-5">
          <h1 className="text-[40px] font-bold text-[#3983b2] group-hover:text-white">{price}</h1>
        </div>
      </div>
      <hr className="w-[85%] mx-auto text-gray-200 " />
       <HoverButton text={buttonText} link="/apply" />
    </div>

  );
};

export default PriceCard;
