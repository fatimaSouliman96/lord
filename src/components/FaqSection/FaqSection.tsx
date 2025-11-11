import { useEffect, useState } from "react";
import Accordion from "../Accordion/Accordion";
import type { faq } from "../../types/types";
import { getData } from "../../api/services/getData";
import { useLoading } from "../LoadingContext/LoadingContext";

const FaqSection = () => {

     const [fags, setFags] = useState<faq[]>()
     const { startLoading, stopLoading } = useLoading();
    
        const fetchData = async () => {
           try{
            startLoading()
             const data: faq[] = await getData("show-faqs")
            setFags(data)
           } finally {
            stopLoading()
           }
        }
        useEffect(() => {
            fetchData()
    
        }, [])



    return (
        <section className="max-w-full w-full flex overflow-hidden lg:flex-row md:flex-col flex-col justify-between px-4 md:px-2 lg:px-44 pt-30">
            <div className="lg:w-[40%] md:w-full w-full flex lg:flex-col md:flex-row flex-row " >
                <div className="w-full px-5">
                    <h1 className="xl:text-[50px]  md:text-[30px]  lg:text-[30px]  text-[30px] font-semibold text-right" >
                        الأسئلة الشائعة
                    </h1>
                    <p className="text-lg text-[#5F6368]" >
                        لم تجد الإجابة التي تبحث عنها؟
                        للمزيد من المعلومات، تفضل بزيارة صفحة الدعم أو تواصل معنا عبر صفحة "اتصل بنا".
                    </p>
                </div>
            
            </div>
            <Accordion items={fags??[]} />

        </section>
    );
};

export default FaqSection;
