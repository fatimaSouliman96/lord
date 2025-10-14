import { Link } from "react-router-dom";

export default function Box() {
    return (
        <div className="w-full relative z-2" >
            <div className="w-[90%]  mt-16 mx-auto bg-[url('/cta-bg.jpg')] bg-no-repeat bg-cover rounded-[40px] py-[70px] px-[40px] flex flex-col justify-center items-center gap-4" >
            <h1 className="xl:text-[65px]  md:text-[60px] text-[32px] text-white font-semibold">
                فرصتك العظيمة تبدأ هنا!
            </h1>
            <Link to={"campaigns"} className="w-[226px] text-2xl border-0 py-1.5 px-4.5 font-semibold rounded-[10px] flex  items-center justify-center bg-[linear-gradient(180deg,#ffd15d_-23%,#ff9900_100%)] text-[#357faf]" >
                    اشترك
            </Link>
            <div className="h-2/6 w-full bg-[#eeeef5] absolute bottom-0 left-0 -z-1" >

            </div>
        </div>
        </div>
    )
}
