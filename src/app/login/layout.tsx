import { ImageAuth } from '@/components/icons'
import Navbar from '@/components/navbar'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
     <Navbar background="shadow-md shadow-gray-dark" />
      <section className='flex flex-col md:flex-row justify-around bg-[#F5F5F7] mb-5'>
        <figure className='md:w-[300px] lg:w-[500px] hidden md:flex'>
          <ImageAuth />
        </figure>
        {children}
      </section>
    </>
  )
}
