import Accordion from "../Accordion/Accordion";

const FaqSection = () => {



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
            <Accordion items={items} />

        </section>
    );
};

export default FaqSection;
