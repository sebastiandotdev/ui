import Image from 'next/image'
import ImagenLogin from '@/../public/imageAuth.svg'

export default function AuthLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <section className='flex flex-col md:flex-row justify-around bg-[#F5F5F7] mb-5'>
      <figure className='md:w-[300px] lg:w-[500px] hidden md:flex'>
        <Image src={ImagenLogin} alt='Imagen Login' />
      </figure>
      {children}
    </section>
  )
}
