'use client'
import { Watch } from '@/utils/const'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from './ui'
import Carousel from './carousel'

export default function WathcCarousel() {
  return (
    <>
      <Carousel className='flex md:gap-4 lg:justify-center' buttons>
        {Watch.map((data, index) => (
          <Link
            href={'/'}
            key={index}
            className=' shrink-0 snap-start hover:scale-105 text-center bg-white p-4 rounded-md  transition-transform ease-in-out duration-500'
          >
            <figure>
              {' '}
              <Image
                src={data.src}
                alt={`Imagen de ${data.name}`}
                className='md:w-48 md:h-72 rounded-md mb-2 object-contain'
                height={200}
              />
            </figure>
            <span className='text-[#BF4800] text-xs font-bold'>New</span>
            <h3 className='text-sm font-bold'>{data.name}</h3>
            <p className='text-xs font-semibold'>{data.price}</p>
            <Button className='px-8 py-1 mt-2 hover:px-12 transition-all duration-700 ease-in-out bg-[#1c4060] text-white font-bold rounded  hover:bg-[#2a4054] shadow-xl'>
              Buy
            </Button>
          </Link>
        ))}
      </Carousel>
    </>
  )
}
