import React, { useEffect, useState } from "react";

interface HeroProps {
  title: string
}

const HeroAbout: React.FC<HeroProps> = ({title}) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // نحدد حد أقصى للتحرك
      const maxOffset = 200; // بالبكسل
      // نستخدم Math.min لعدم تجاوز الحد
      setOffset(Math.min(scrollY, maxOffset));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#3983b2] pt-56 pb-18">
      <h1
        className="text-7xl text-center font-semibold text-white transform transition-transform duration-2000"
        style={{ transform: `translateY(${offset}px)` }}
      >
        {title}
      </h1>
    </div>
  );
}

export default HeroAbout;
