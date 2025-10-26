import person from '../../../public/person.png'

export default function PersonCard() {
  return (

    <div className="h-[420px]  mb-72" >
      <img src={person} className='w-[80%] mx-auto h-72 rounded-full transform translate-y-28' />
      <div className="h-[80%] bg-white rounded-2xl pt-28 flex flex-col items-center" >
        <h1 className='text-[44px] text-center text-[#3983b2] font-semibold' >
          التطبيق<br/> سهل للغاية
        </h1>
        <p className='text-[35px] text-center text-[#e6bd49] font-semibold pt-2'>
          دعنا نتصل بك
          </p>
      </div>
    </div>
  )
}
