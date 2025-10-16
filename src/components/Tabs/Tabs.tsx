import React, { useEffect, useState } from "react";
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
  const [activeTab, setActiveTab] = useState<string>(
    localStorage.getItem("city") || "SY-DI"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      const newCity = localStorage.getItem("city") || "SY-DI";
      setActiveTab(newCity);
    };

    // الاستماع لتغير localStorage (يشتغل بين التبويبات أو داخل نفس الصفحة إذا استدعيت الحدث)
    window.addEventListener("storage", handleStorageChange);

    // في حال تغيّر داخل نفس التبويب
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      originalSetItem.apply(this, [key, value]);
      if (key === "city") handleStorageChange();
    };

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      localStorage.setItem = originalSetItem; // رجّع الأصل
    };
  }, []);

  return (
    <div className="w-full pt-8">
      {/* Tabs Buttons */}
      <div className="flex flex-wrap justify-center mb-8 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-8 cursor-pointer py-1 rounded-3xl transition-colors duration-300 font-medium ${activeTab === tab.id
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
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
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

