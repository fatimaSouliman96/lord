import React, { useState } from "react";
import PriceCard from "../PriceCard/PriceCard";// المسار حسب مشروعك


interface CardData {
  link: string;
  speed: string;
  unlimited: string;
  offerDuration: string;
  city: string;
  price: string;
  buttonText: string;
  animationData?: any;
}

interface Tab {
  id: string;
  label: string;
  cards: CardData[]; // مصفوفة بيانات الكروت
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div className="w-full pt-8">
      {/* Tabs Buttons */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-10 cursor-pointer py-1 rounded-3xl transition-colors duration-300 font-medium ${
              activeTab === tab.id
                ? "bg-[#f4bf3d] text-white"
                : "bg-transparent text-[#3983b2] border border-[#3983b2] hover:bg-blue-100"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6 min-h-[150px] ">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div
                key={tab.id}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {tab.cards.map((card, index) => (
                  <PriceCard key={index} {...card} />
                ))}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;

