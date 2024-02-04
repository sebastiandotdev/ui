'use client'
import { Watch } from '@/utils/const'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ButtonBuy } from '@/components/ui/button-buy'
import { useCallback } from 'react'
import arrowLeft from 'public/arrowleft.png'
import arrowRight from 'public/arrowright.png'

export default function WathcCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  return (
    <>
      <div className='flex justify-end mb-[-50px]  relative z-[10] gap-[20px]'>
        <button className='embla__prev z-[5] ' onClick={scrollPrev}>
          <span>
            <Image src={arrowLeft} alt='arrow left' />
          </span>
        </button>
        <button className='embla__next   relative ' onClick={scrollNext}>
          {' '}
          <span>
            <Image src={arrowRight} alt='arrow Right' className='' />
          </span>
        </button>
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
              <ButtonBuy padding='px-8 py-1 mt-2' />
            </Link>
          ))}
        </div>
      </article>
    </>
  )
}
