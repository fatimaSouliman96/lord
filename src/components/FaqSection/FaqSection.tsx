import Accordion from "../Accordion/Accordion";
import { motion, useSpring, useScroll, useTransform } from "framer-motion";

const FaqSection = () => {
    const { scrollYProgress } = useScroll();
    const xRange = useTransform(scrollYProgress, [0, 1], [300, -200]);
    const x = useSpring(xRange, { stiffness: 50, damping: 50 });
    const items = [
        {
            title: "ما هو الإنترنت عالي السرعة وكيف يعمل؟",
            content:
                "الإنترنت عالي السرعة هو خدمة نوفرها باستخدام تقنية لاسلكية لتقديم اتصال سريع وموثوق للمنازل. يتم إرسال البيانات عبر إشارات لاسلكية.",
            defaultOpen: true,
        },
        {
            title: "كيف تتم عملية التركيب؟",
            content:
                "يقوم فريقنا بتركيب الجهاز واختبار الاتصال للتأكد من جاهزيته. عادةً ما تستغرق عملية التركيب حوالي ساعة واحدة فقط.",
        },
        {
            title: "هل يمكنني استخدام الخدمة في أي مكان؟",
            content:
                "نعم، يمكن استخدام الخدمة في أي منطقة ضمن نطاق تغطيتنا. يمكنك التواصل معنا للتحقق من توفر الخدمة في منطقتك.",
        },
        {
            title: "هل توجد عقود طويلة الأمد؟",
            content:
                "لا نلزم عملاءنا بعقود طويلة. يمكنك الاشتراك أو الإلغاء متى شئت بسهولة.",
        },
    ];

    return (
        <section className="max-w-full w-full flex overflow-hidden lg:flex-row md:flex-col flex-col justify-between px-4 md:px-2 lg:px-44 pt-30">
            <div className="lg:w-[40%] md:w-full w-full flex lg:flex-col md:flex-row flex-row " >
                <div className="w-[70%] ">
                    <span className="text-base border-b-2 border-[#f4bf3d]" >يدعم</span>
                    <h1 className="xl:text-[58px]  md:text-[56px] text-[30px] font-semibold text-right" >
                        الأسئلة الشائعة
                    </h1>
                    <p className="text-lg text-[#5F6368]" >
                        لم تجد الإجابة التي تبحث عنها؟
                        للمزيد من المعلومات، تفضل بزيارة صفحة الدعم أو تواصل معنا عبر صفحة "اتصل بنا".
                    </p>
                </div>
                <div className="lg:block md:block hidden" >
                    <motion.div
                        style={{
                            x,

                            perspective: 800,
                            margin: "100px auto",
                        }}
                    > <img
                            src="/faq-1.png"
                            alt="faq illustration"
                            width={400}
                            height={400}
                            className="w-auto mt-16 h-auto"
                        /></motion.div>

                </div>
            </div>
            <Accordion items={items} />

        </section>
    );
};

export default FaqSection;
