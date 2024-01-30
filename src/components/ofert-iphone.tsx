import { ButtonBuy } from '@/components/ui/button-buy'
import Image from 'next/image'
import Link from 'next/link'
import FigureIphone from 'public/figure.png'

export default function OfertIphone() {
  return (
    <>
      <div className='flex flex-col items-center  gap-8  '>
        <div className='text-white text-center mt-20'>
          <h2 className='text-4xl md:text-5xl font-bold'>Lynx.iphones.</h2>
          <p className='mt-6 text-sm md:text-base'>
            From ₹25,000 to ₹10,000,0. Every Model Ever Built
          </p>
        </div>

        <div className='flex md:w-1/3 justify-center  items-center gap-4 mb-10'>
          <ButtonBuy padding='px-8 py-2' />
          <Link href={'/'} className='text-[#2563EB] hover:text-[#2055c6]'>
            Learn More
          </Link>
        </div>
        <Image
          src={FigureIphone}
          alt='Figure Iphone'
          className='object-cover   lg:w-[60.063rem] lg:h-[24.563rem]'
        />
      </div>
    </>
  )
}
