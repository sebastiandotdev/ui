'use client'
import { categories } from '@/utils/const'
import Link from 'next/link'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import arrowLeft from 'public/arrowleft.png'
import arrowRight from 'public/arrowright.png'

export default function CategoriesSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [Autoplay()])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
  return (
    <>
      <h2 className=' text-center text-3xl md:text-5xl text-gray-dark m-6 font-bold'>
        Newest Collection Available
      </h2>

      <article ref={emblaRef} className='overflow-hidden'>
        <div className='flex gap-4 lg:justify-center '>
          {categories.map((data, index) => (
            <Link
              href={'/'}
              key={index}
              className=' shrink-0 snap-start hover:scale-110 text-center bg-white p-4 rounded-md drop-shadow-lg transition-transform ease-in-out duration-500'
            >
              <Image
                src={data.src}
                alt={`Imagen de ${data.title}`}
                className='w-32 h-20 rounded-md mb-2 object-contain'
              />
              <p className='text-sm font-bold'>{data.title}</p>
            </Link>
          ))}
        </div>
        <button
          className='embla__prev absolute top-36 md:top-28  lg:top-28'
          onClick={scrollPrev}
        >
          <Image src={arrowLeft} alt='arrow left' className='w-10 md:w-16 ' />
        </button>
        <button
          className='embla__next  absolute top-36  right-0 md:top-28 lg:top-28'
          onClick={scrollNext}
        >
          <Image src={arrowRight} alt='arrow Right' className='w-10 md:w-16' />
        </button>
      </article>
    </>
  )
}
