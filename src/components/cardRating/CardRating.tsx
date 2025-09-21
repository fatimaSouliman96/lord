import user from '../../../public/testi-icon-2-2.png'


interface CardProps {
  text: string;
  name: string,
  service: string
}
const CardRating: React.FC<CardProps> = ({ text, name, service }) => {
  return (
    <div className='bg-[url(/BODY-rating.png)] rounded-2xl text-right bg-no-repeat bg-cover flex flex-col p-8 gap-8' >
            <p className='text-white text-[20px] ' >{text}</p>
            <div className='flex items-center gap-2'>
                <img className='w-[50px] h-[50px] rounded-xl' src={user}  />
                <div className='flex flex-col'>
                    <p  className='text-white text-[18px]'>{name}</p>
                    <p  className='text-[#ffffffb3] text-[14px]'>{service}</p>
                </div>
            </div>
    </div>
  )
}

export default CardRating
