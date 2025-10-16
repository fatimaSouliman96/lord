
import phone from '../../../public/Phone.json'
import mail from '../../../public/email.json'
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-[#eeeef5] text-[#595B62] font-medium row-start-2">
      {/* tp-footer-area-start */}
      <div className="pt-[80px] ">

        <div className="grid grid-cols-1 xl:px-40 lg:px-36 md:px-16 px-12 lg:grid-cols-4 md:grid-cols-2
        gap-8 lg:gap-0 xl:gap-0 md:gap-0 justify-center items-start pb-[45px]">
          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className='' >
              <a href="/" aria-label="الرئيسية" className="inline-block pb-4">
                <img src="/logo.svg" alt="شعار هاي سبيد" width={110} />
              </a>

              <p className="text-md leading-relaxed">سرعة عالية<br />أسرع من الضوء</p>

              <ul className="mt-2 text-md h-24">
                <li className="flex items-center gap-2 h-1/2">

                  <div className="w-8 bg-transparent icon h-full">
                    <Lottie className="bg-transparent  h-full " animationData={phone} loop={true} />
                  </div>
                  <a className="text-md" href="http://wa.me/908508503131" target="_blank" rel="noreferrer">+90 850 850 31 31</a>
                </li>
                <li className="flex items-center gap-2 h-1/2 ">
                  <div className="w-8 icon  h-full">
                    <Lottie className='h-full' animationData={mail} loop={true} />
                  </div>
                  <a className="text-md" href="mailto:destek@highspeed.com.tr">destek@highspeed.com.tr</a>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3 }}
          ><div>
              <h4 className="text-lg font-semibold mb-3">من نحن</h4>
              <ul className="space-y-2 text-md">
                <li><Link to="/about" className="hover:underline">تعرّف علينا</Link></li>
                <li><Link to="/contact" className="hover:underline">تواصل معنا</Link></li>
                {/* <li><a href="#" className="hover:underline">المدوّنة</a></li> */}
              </ul>
            </div></motion.div>

          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          > <div>
              <h4 className="text-lg font-semibold pb-4">المساعدة</h4>
              <ul className="space-y-2 text-md">
                <li><Link to="faq" className="hover:underline">الأسئلة المتكررة</Link></li>
                <li><Link to="testemonials" className="hover:underline">شكاوى المستهلكين</Link></li>
                {/* <li><a href="/kvk" className="hover:underline">سياسة الخصوصية (KVKK)</a></li> */}
              </ul>
            </div></motion.div>

          <motion.div
            viewport={{ once: true, amount: 0.5 }}
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.7 }}
          ><div className='pb-10'>
              <h4 className="text-lg font-semibold pb-4">وسائل التواصل الاجتماعي</h4>
              <div className="flex items-center gap-4">
                <a href="https://www.facebook.com/highspeediss" target="_blank" rel="noreferrer" aria-label="فيسبوك" className="text-xl w-[38px] h-[38px] rounded-lg bg-white flex items-center justify-center shadow-md">
                  <FaFacebookF color="#4F5055" size={14} />
                </a>
                <a href="https://www.instagram.com/highspeediss" target="_blank" rel="noreferrer" aria-label="انستغرام" className="text-xl w-[38px] h-[38px] rounded-lg bg-white flex items-center justify-center shadow-md">
                  <FaInstagram color="#4F5055" size={14} />
                </a>
              </div>
            </div></motion.div>

        </div>

        <div className="border-t border-gray-200 bg-[#eeeef5]">
          <div className="container mx-auto px-4 pt-[25px] pb-[40px] text-center ">
            <motion.div
              viewport={{ once: true, amount: 0.5 }}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.9 }}
            >    <p className="text-md font-medium text-[#4188b5]">جميع الحقوق محفوظة ©2025 High Speed</p>
            </motion.div>

          </div>
        </div>
        
      </div>

    </footer>
  );
}
