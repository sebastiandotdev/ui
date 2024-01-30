import Navbar from '@/components/navbar'
import Categories from '@/components/categories-section'
import { IconLupa } from '@/components/icons'
import OfertIphone from '@/components/ofert-iphone'
import CaruselIphones from '@/components/carousel-iphones'
import AppleWatch from '@/components/apple-watch'
import WathcCarousel from '@/components/watch-carosel'

export default function Home() {
  return (
    <>
      <div className='bg-home bg-container w-full bg-no-repeat bg-left  md:bg-top lg:bg-center lg:bg-cover   '>
        <header>
          <Navbar background='' />
        </header>
        <section className='text-white p-4 md:px-24 '>
          <div className='w-full p-4 md:w-2/4  lg:w-2/5 flex flex-col  gap-6 lg:gap-10'>
            <h1 className='text-3xl text-wrap   md:text-[3rem] lg:text-[3.8rem]  font-bold leading-none'>
              Discover Most Affordable Apple products
            </h1>
            <p className='text-[#8B8E99] text-base text-wrap font-bold leading-snug'>
              Find the best, reliable and affordable Apple products here. We
              focus on the product quality. Here you can find all the products
              Apple ever made, even the ones they officially stopped selling. So
              why wait? Just order now!
            </p>
            <div className='w-full   flex  md:flex-row items-center gap-2 md:gap-1 justify-around bg-white p-2 rounded-2xl'>
              <div className='flex items-center gap-4 w-full md:w-auto md:justify-center'>
                <IconLupa />
                <input
                  type='text'
                  placeholder='Find the best product'
                  className='placeholder:text-gray-dark placeholder:font-bold  md:placeholder:text-[12px]  md:placeholder:text-center lg:placeholder:text-[18px] text-gray-dark focus:outline-none  focus:border focus:border-blue-500 focus:border-blue-700 rounded px-2 py-1 w-full'
                />
              </div>
              <button className='bg-[#2563EB] text-white py-3 px-4 rounded-2xl hover:bg-[#2055c6] w-1/3 md:w-1/3'>
                Search
              </button>
            </div>
          </div>
        </section>
      </div>
      <section className='mb-4 relative'>
        <Categories />
      </section>
      <section className='bg-black  px-6'>
        <OfertIphone />
      </section>
      <section className='relative mb-4'>
        <div className='absolute inset-y-0 z-10 left-0 w-1/12 md:w-[11%] bg-gradient-to-r from-white to-transparent '></div>
        <div className='absolute inset-y-0 z-10 right-0 w-1/12 md:w-[11%] bg-gradient-to-l from-white to-transparent'></div>
        <CaruselIphones />
      </section>
      <section className='p-[5px] relative'>
        <div className='absolute inset-y-0 z-10 left-0 w-1/12 md:w-[11%] bg-gradient-to-r from-white to-transparent '></div>

        <AppleWatch />
        <WathcCarousel />
        <div className='absolute inset-y-0 z-10 right-0 w-1/12 md:w-[11%] bg-gradient-to-l from-white to-transparent'></div>
      </section>
    </>
  )
}
