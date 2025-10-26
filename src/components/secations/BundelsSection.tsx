import { useEffect, useState } from "react";
import { getData } from "../../api/services/getData";
import Tabs from "../Tabs/Tabs";
import type { city } from "../../types/types";



export default function BundelsSection() {
  const [cities, setCities] = useState<city[]>()

  const fetchData = async () => {
    const data: city[] = await getData("cities")
    setCities(data)
    console.log(data)
  }
  useEffect(() => {
    fetchData()

  }, [])

  return (
    <section id="bundels" className='w-full max-w-full 
        lg:px-24
        md:px-24
        px-4 
         xl:mt-44
            lg:mt-44
            md:mt-44
            mt-28 ' >
      <h1 className='xl:text-[58px]  md:text-[56px] text-[32px] font-medium text-center text-black' >باقات عائلية</h1>
      <h1 className='text-[18px] font-normal text-center text-[#5f6368]' >باقات عائلية</h1>
      {cities !== undefined ? <Tabs cities={cities ?? []} /> : "يتم تحميل المحافظات"}
    </section>
  )
}
