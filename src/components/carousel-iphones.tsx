'use client'

import { newest } from '@/utils/const'
import Link from 'next/link'
import Image from 'next/image'
<<<<<<< HEAD
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback } from 'react'
import { IconArrowLeft, IconArrowRight } from './icons'
import { Button } from './ui'
=======
import { ButtonBuy } from '@/components/ui/button-buy'
import Carousel from './carousel'
>>>>>>> ab08d0a792f15b1679e40089f4ad96e686c1ca30

export default function CaruselIphones() {
  return (
    <section className='max-w-7xl mx-auto mt-10'>
      <Carousel className='flex relative gap-5 md:gap-4' autoplay>
        {newest.map((data, index) => (
          <Link
            href={'/'}
            key={index}
            className=' shrink-0 snap-start hover:opacity-90 text-center rounded-xl transition-transform ease-in-out duration-500 flex flex-col
              items-center '
          >
            <div className='rounded-xl p-2 flex w-auto'>
              <Image
                src={data.src}
                alt={`Imagen de ${data.name}`}
                className=' size-44 object-contain'
              />
            </div>

            <span className='text-[#BF4800] text-xs font-bold mt-2'>New</span>
            <div className='flex justify-between items-center gap-10 mt-2 mb-4 '>
              <h3 className='text-sm font-bold '>{data.name}</h3>
              <p className='text-xs font-semibold '>{data.price}</p>
            </div>

<<<<<<< HEAD
              <Button className='px-8 py-1 mt-2 hover:px-12 transition-all duration-700 ease-in-out bg-[#1c4060] text-white font-bold rounded  hover:bg-[#2a4054] shadow-xl'>
                Buy
              </Button>
            </Link>
          ))}
        </div>
        <button
          className='embla__prev absolute top-0  left-10 md:right-[6rem] md:left-auto z-20'
          onClick={scrollPrev}
        >
          <IconArrowLeft />
        </button>
        <button
          className='embla__next  absolute top-0 left-20 md:right-[3rem] md:left-auto z-20 '
          onClick={scrollNext}
        >
          <IconArrowRight />
        </button>
      </article>
    </>
=======
            <ButtonBuy padding='px-8 py-1 mt-2 hover:px-12 transition-all duration-700 ease-in-out' />
          </Link>
        ))}
      </Carousel>
    </section>
>>>>>>> ab08d0a792f15b1679e40089f4ad96e686c1ca30
  )
}
