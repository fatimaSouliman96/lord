import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";
import type {  city } from "../../types/types";
import { cityIdMap } from "../../constance/data";


interface cities {
  cities: city[]
}

const Tabs: React.FC<cities> = ({ cities }) => {
    const [activeTab, setActiveTab] = useState<number>();
  const [activeCity, setActiveCity] = useState<number>();

  useEffect(() => {
    const handleSelectFromMap = () => {
      const regionId = localStorage.getItem("city"); // مثال: "sy-di"
      if (!regionId) return;

      const backendId = cityIdMap[regionId.toLowerCase()];
      if (!backendId) return;

      setActiveTab(backendId);

      const selectedTab = cities.find((c) => c.id === backendId);
      if (selectedTab && selectedTab.regions.length > 0) {
        setActiveCity(selectedTab.regions[0].id);
      }
    };

    // تشتغل أول مرة مباشرة:
    handleSelectFromMap();

    // تراقب تغييرات localStorage من خريطة:
    window.addEventListener("storage", handleSelectFromMap);

    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, [key, value]);
      if (key === "city") handleSelectFromMap();
    };

    return () => {
      window.removeEventListener("storage", handleSelectFromMap);
      localStorage.setItem = originalSetItem;
    };
  }, [cities]);

  return (
    <div className="w-full pt-8">

      <div className="grid 
      lg:grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto]
      xl:grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto]
      md:grid-cols-[auto_auto_auto]
      grid-cols-[auto_auto]
      justify-center mb-8 gap-2">
        {cities.map((tab) => (
          <button
            key={tab.id}
            className={`px-8 cursor-pointer py-1 rounded-3xl transition-colors duration-300 font-medium ${
              activeTab === tab.id
                ? "bg-[#f4bf3d] text-white"
                : "bg-transparent text-[#3983b2] border border-[#3983b2] hover:bg-blue-100"
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              if (tab.regions.length > 0) setActiveCity(tab.regions[0].id);
            }}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Cities Buttons */}
      <div className="grid 
      lg:grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto]
      xl:grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto]
      md:grid-cols-[auto_auto_auto]
      grid-cols-[auto_auto]
      justify-center mb-8 gap-2">
        {cities
          .filter((tab) => tab.id === activeTab)
          .map((tab) =>
            tab.regions.map((city) => (
              <button
                key={city.id}
                className={`px-8 cursor-pointer py-1 rounded-3xl transition-colors duration-300 font-medium ${
                  activeCity === city.id
                    ? "bg-[#3983b2] text-white"
                    : "bg-transparent text-[#3983b2] border border-[#3983b2] hover:bg-blue-100"
                }`}
                onClick={() => setActiveCity(city.id)}
              >
                {city.name}
              </button>
            ))
          )}
      </div>

      {/* PriceCards لو حابة تضيفيهم */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8">
        {cities
          .filter((tab) => tab.id === activeTab)
          .flatMap((tab) =>
            tab.regions
              .filter((city) => city.id === activeCity)
              .flatMap((city) =>
                city.packages.map((card, index) => (
                  <PriceCard key={index} card={card} city={city.name} />
                ))
              )
          )}
      </div>
    </div>
  );
};

export default Tabs;

