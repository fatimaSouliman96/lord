import Lottie from "lottie-react";
import { motion } from "framer-motion";

type LottieJSON = {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
  markers: any[];
};

type ServiceCardProps = {
  bgColor: string;
  iconAnimation: LottieJSON;
  title: string;
  description: string;
};

export default function ServiceCard({
  bgColor,
  iconAnimation,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      viewport={{ once: true, amount: 0.5 }}
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >

      <div className="w-full  h-[308px]  flex flex-col justify-center items-center">
        <div className="relative group">
          {/* المربع الخلفي الملون */}
          <div
            className={`absolute inset-0 w-full  lg:w-full  h-[308px] rounded-2xl ${bgColor} transform rotate-6 transition-transform duration-500 group-hover:rotate-0`}
          ></div>

          {/* الكارد الأساسي */}
          <div className="relative w-full  lg:w-full  h-[308px] backdrop-blur-md bg-[#ffffff95] rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center transform transition-all duration-1000 group-hover:pb-10">
            {/* أيقونة الأنميشن */}
            <div className="w-16 h-16 ">
              <Lottie animationData={iconAnimation} loop={true} />
            </div>

            {/* المحتوى */}
            <div className="text-center w-full ">
              <h3 className="text-xl font-semibold mb-2">{title}</h3>

              {/* الوصف مخفي افتراضيًا ويظهر عند الهوفر */}
              <p className="text-gray-500 text-sm max-h-0 overflow-hidden transform transition-all duration-1000 group-hover:max-h-40">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>

  );
}



