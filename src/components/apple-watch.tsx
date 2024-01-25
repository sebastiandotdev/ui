import Image from 'next/image'
import backWatch from '../../public/BackWatch.png'
import fontWatch from '../../public/FrontWatch.png'
const AppleWatch = () => {
  return (
    <article className='flex justify-around p-[20px] xl:m-[100px] lg:m-[80px] md:m-[100px] m-[20px] xl:p-[30px] lg:p-[50px] md:p-[50px]  xl:gap-0 lg:gap-0 md:gap-0 gap-[10px] items-center bg-black rounded-[22px] cursor-pointer relative '>
      <figure>
        <Image src={backWatch} alt='back Whact' />
      </figure>

      <h2 className='text-white xl:text-[96px] lg:text-[96px] md:text-[70px] text-[30px]  font-bold text-center'>
        Apple Watch
      </h2>
      <figure>
        <Image src={fontWatch} alt='font Whact' />
      </figure>
    </article>
  )
}
export default AppleWatch
