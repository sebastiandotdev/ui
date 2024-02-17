'use client'
import { Watch } from '@/utils/const'
import Link from 'next/link'
import Image from 'next/image'
<<<<<<< HEAD
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import arrowLeft from 'public/arrowleft.png'
import arrowRight from 'public/arrowright.png'
import { Button } from './ui'
=======
import { ButtonBuy } from '@/components/ui/button-buy'
import Carousel from './carousel'
>>>>>>> ab08d0a792f15b1679e40089f4ad96e686c1ca30

export default function WathcCarousel() {
  return (
    <>
<<<<<<< HEAD
      <div className='flex justify-end mb-[-50px]  relative z-[10] gap-[20px]'>
        <Button className='embla__prev z-[5] ' onClick={scrollPrev}>
          <span>
            <Image src={arrowLeft} alt='arrow left' />
          </span>
        </Button>
        <Button className='embla__next   relative ' onClick={scrollNext}>
          {' '}
          <span>
            <Image src={arrowRight} alt='arrow Right' className='' />
          </span>
        </Button>
      </div>
      <article ref={emblaRef} className='overflow-hidden relative p-[30px]'>
        <div className='flex md:gap-4  lg:justify-center  relative'>
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
        </div>
      </article>
=======
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
            <ButtonBuy padding='px-8 py-1 mt-2' />
          </Link>
        ))}
      </Carousel>
>>>>>>> ab08d0a792f15b1679e40089f4ad96e686c1ca30
    </>
  )
}
