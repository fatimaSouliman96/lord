import RatedShape from '../rateShape/RatedShape'
import SyriaMap from '../syriaMap/SyriaMap'

export default function Map() {
    const array = [1, 2, 3, 4];

    // 0 + 1 + 2 + 3 + 4
    const initialValue = 1;
    const sumWithInitial = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue,
    );

    console.log(sumWithInitial);
    return (
        <div className="
        xl:mt-44
            lg:mt-44
            md:mt-44
            mt-28
            w-[90%]
            max-w-[1400px]   
            map-continar
            lg:min-h-[140vh]    
            xl:min-h-[140vh]    
            md:min-h-[140vh]
                 
            mx-auto
            rounded-[60px]
            bg-[url('/rated-bg.jpg')]
            bg-no-repeat
            bg-cover
            overflow-hidden
            relative
            ">
            <RatedShape />

            <div className="tp-rated-shape-1 hidden lg:block absolute 
            top-[6%] 
            translate-y-[-6%]
            right-[7%] 
            translate-x-[-7%]
            origin-top-right">
                <img
                    src="/rate-shape-1.png"
                    alt="Rate Shape 1"
                    className="max-w-full pointer-events-none"
                />
            </div>
            <h1 className='xl:text-[58px]  md:text-[56px] text-[32px] font-medium text-center text-white' >نطاق خدماتنا</h1>
            <div className="w-full h-auto flex justify-center items-center py-10">
                <div className="w-full max-w-[1000px] h-auto">
                    <SyriaMap />
                </div>
            </div>
        </div>
    )
}
