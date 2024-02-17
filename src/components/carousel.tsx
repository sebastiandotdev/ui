'use client'

import { useCallback } from 'react'
import useCarousel from 'embla-carousel-react'
import pluginAutoplay from 'embla-carousel-autoplay'

import type { EmblaPluginType } from 'embla-carousel'
import { type ReactNode, HTMLAttributes } from 'react'
import { IconArrowLeft, IconArrowRight } from './icons'

interface CarouselProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  autoplay?: boolean
  buttons?: boolean
  loop?: boolean
}

export default function Carousel({
  children,
  autoplay,
  buttons,
  loop = false,
  ...props
}: CarouselProps) {
  const plugins: EmblaPluginType[] = []

  if (autoplay) {
    plugins.push(pluginAutoplay({ delay: 3000 }))
  }

  const [emblaNode, emblaApi] = useCarousel({ loop: loop }, plugins)

  const handleScrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const handleScrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div ref={emblaNode} className='overflow-hidden relative ml-2'>
      <div {...props}>{children}</div>
      {buttons && (
        <>
          <button
            className='absolute top-0  left-10 md:right-[6rem] md:left-auto z-20'
            onClick={handleScrollPrev}
          >
            <IconArrowLeft />
          </button>
          <button
            className='absolute top-0 left-20 md:right-[3rem] md:left-auto z-20 '
            onClick={handleScrollNext}
          >
            <IconArrowRight />
          </button>
        </>
      )}
    </div>
  )
}
