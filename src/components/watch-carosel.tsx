'use client'
import { Watch } from '@/lib/const'
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
      console.log('Scrolling to previous')
    }
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
      console.log('Scrolling to next')
    }
  }, [emblaApi])

  return (
    <>
      <article ref={emblaRef} className='overflow-hidden relative '>
        <div className='flex md:gap-4  lg:justify-center  relative'>
          {Watch.map((data, index) => (
            <Link
              href={'/'}
              key={index}
              className=' shrink-0 snap-start hover:scale-105 text-center bg-white p-4 rounded-md  transition-transform ease-in-out duration-500'
            >
              <Image
                src={data.src}
                alt={`Imagen de ${data.name}`}
                className='md:w-48 md:h-72 rounded-md mb-2 object-contain'
              />
              <span className='text-[#BF4800] text-xs font-bold'>New</span>
              <h3 className='text-sm font-bold'>{data.name}</h3>
              <p className='text-xs font-semibold'>{data.price}</p>
              <ButtonBuy padding='px-8 py-1 mt-2' />
            </Link>
          ))}
        </div>
        <button
          className='embla__prev absolute top-1/3 z-20'
          onClick={scrollPrev}
        >
          <Image src={arrowLeft} alt='arrow left' />
        </button>
        <button
          className='embla__next  absolute top-1/3  right-0 z-20'
          onClick={scrollNext}
        >
          <Image src={arrowRight} alt='arrow Right' className='' />
        </button>
      </article>
    </>
  )
}
