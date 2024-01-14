import Navbar from '@/components/navbar'
import Image from 'next/image'
import bgHome from '../../public/bgHome.png'
import { IconLupa } from '@/components/icons'

export default function Home() {
  return (
    <>
      <div className='relative bg-gradient-to-br from-black via-opacity-50 to-black'>
        <header>
          <Navbar />
        </header>
        <section className='  text-white p-24 font-poppins'>
          <div className='w-2/5 flex flex-col gap-4'>
            <h1 className=' text-6xl'>
              Discover Most Affordable Apple products
            </h1>
            <p className='text-[#8B8E99] text-base font-bold'>
              Find the best, reliable and affordable apple products here. We
              focus on the product quality. Here you can find all the products
              apple ever made. Even the products apple officially stopped
              selling. So why you are waiting? Just order now!
            </p>
            <div className='flex items-center gap-1 justify-around bg-white p-2 rounded-2xl'>
              <IconLupa />
              <input
                type='text'
                placeholder='Find the best product'
                className='placeholder:text-gray-dark placeholder:font-bold  text-gray-dark pl-1'
              />
              <button className='bg-[#2563EB] text-white py-2 px-4 rounded  hover:bg-[#2055c6] '>
                Search
              </button>
            </div>
          </div>

          {/* <Image src={bgHome} alt="Hero Pattern" /> */}
        </section>
      </div>
    </>
  )
}
