import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";
import type { tabs } from "../../constance/data";




const Tabs: React.FC<tabs> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(
    localStorage.getItem("city") || "SY-DI"
  );
  const [activeCity, setActiveCity] = useState<string>("");

  useEffect(() => {
    // لما يتغير التاب، نخلي أول مدينة هي الافتراضية
    const tab = tabs.find((t) => t.id === activeTab);
    if (tab && tab.cities.length > 0) {
      setActiveCity(tab.cities[0].id);
    }

    const handleStorageChange = () => {
      const newCity = localStorage.getItem("city") || "SY-DI";
      setActiveTab(newCity);
    };

    window.addEventListener("storage", handleStorageChange);

    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, [key, value]);
      if (key === "city") handleStorageChange();
    };

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      localStorage.setItem = originalSetItem;
    };
  }, [activeTab, tabs]);

  return (
    <div className="w-full pt-8">
      {/* Tabs Buttons */}
      <div className="grid 
      lg:grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto]
      xl:grid-cols-[auto_auto_auto_auto_auto_auto_auto_auto]
      md:grid-cols-[auto_auto_auto]
      grid-cols-[auto_auto]
      justify-center mb-8 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-8 cursor-pointer py-1 rounded-3xl transition-colors duration-300 font-medium ${
              activeTab === tab.id
                ? "bg-[#f4bf3d] text-white"
                : "bg-transparent text-[#3983b2] border border-[#3983b2] hover:bg-blue-100"
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              if (tab.cities.length > 0) setActiveCity(tab.cities[0].id);
            }}
          >
            {tab.label}
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
        {tabs
          .filter((tab) => tab.id === activeTab)
          .map((tab) =>
            tab.cities.map((city) => (
              <button
                key={city.id}
                className={`px-8 cursor-pointer py-1 rounded-3xl transition-colors duration-300 font-medium ${
                  activeCity === city.id
                    ? "bg-[#3983b2] text-white"
                    : "bg-transparent text-[#3983b2] border border-[#3983b2] hover:bg-blue-100"
                }`}
                onClick={() => setActiveCity(city.id)}
              >
                {city.city}
              </button>
            ))
          )}
      </div>

      {/* PriceCards لو حابة تضيفيهم */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-8">
        {tabs
          .filter((tab) => tab.id === activeTab)
          .flatMap((tab) =>
            tab.cities
              .filter((city) => city.id === activeCity)
              .flatMap((city) =>
                city.cards.map((card, index) => (
                  <PriceCard key={index} card={card} />
                ))
              )
          )}
      </div>
    </div>
  );
};

export default Tabs;

