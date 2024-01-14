import { ImageAuth } from '@/components/icons'
import Navbar from '@/components/navbar'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <section className='flex flex-col w-full md:flex-row justify-around bg-[#F5F5F7] mb-5'>
        <figure className='md:w-[300px] lg:w-[500px] hidden md:flex w-2/5'>
          <ImageAuth />
        </figure>
        {children}
      </section>
    </>
  )
}
