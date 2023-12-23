'use client'
import Link from 'next/link'
import { navbar } from '@/lib/const'
import Logo from '@/../public/logo.png'
import { useState } from 'react'
export default function Navbar() {
  const [isOpenMenuHamburger, setIsOpenMenuHamburger] = useState(false)
  const [isClosingMenu, setIsClosingMenu] = useState(false)

  const handleIsOpenMenuHamburger = () => {
    if (isOpenMenuHamburger) {
      setIsClosingMenu(true)
      setTimeout(() => {
        setIsOpenMenuHamburger(false)
        setIsClosingMenu(false)
      }, 200)
    } else {
      setIsOpenMenuHamburger(true)
    }
  }

  return (
    <>
      {/* Version Tablets - Desktop  */}
      <nav
        className={
          'flex relative w-full h-[70px] bg-transparent shadow-md shadow-gray-dark justify-around items-center font-poppins '
        }
      >
        <div className='flex items-center w-2/3 sm:w-20 hover:animate-pulse'>
          <Link
            href='/'
            className='flex items-center w-full justify-around sm:w-20 gap-1 '
          >
            <img src={Logo.src} alt='' className='h-6 w-6 ' />
            <span className='text-[#8B8E99] hover:text-[#3858D6]'>Lynx</span>
          </Link>
        </div>
        <div className='gap-8 hidden sm:flex text-[#8B8E99] font-semibold font-inter'>
          {navbar.map((data, index) => (
            <Link
              href={data.src}
              className=' hover:text-[#3858D6]'
              key={index}
              onClick={() => setIsClosingMenu(true)}
            >
              {data.title}
            </Link>
          ))}
        </div>

        <div className='font-semibold hidden sm:flex gap-2'>
          <a href='/login' className='text-[#8B8E99] hover:text-[#3858D6]'>
            Login
          </a>
          <span className='text-[#8B8E99]'>|</span>
          <a href='/register' className='text-[#8B8E99] hover:text-[#3858D6]'>
            Sign Up
          </a>
        </div>

        <button onClick={handleIsOpenMenuHamburger} className=' flex sm:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            style={{ fill: '#8B8E99', transform: '', msFilter: '' }}
          >
            <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z'></path>
          </svg>
        </button>
      </nav>

      {/* Version Mobile   */}
      {isOpenMenuHamburger ? (
        <div
          className={`fixed z-10 top-0 left-0 right-0 bottom-0 sm:hidden bg-black bg-opacity-20 bg-blend-darken ${
            isClosingMenu ? 'scale-out-tr' : 'scale-in-tr'
          }`}
        >
          <div className=' flex flex-col text-2xl items-center justify-center font-semibold font-inter bg-white bg- w-full h-[100vh]'>
            <Link
              href='/'
              className='flex gap-2 items-center absolute left-2 top-4'
            >
              <img src={Logo.src} alt='' className='h-10 w-10' />
              <span className='text-[#8B8E99] text-lg'>Lynx</span>
            </Link>
            <button
              onClick={handleIsOpenMenuHamburger}
              className={` p-1 icon icon-tabler icon-tabler-x absolute right-3 top-6 cursor-pointer text-[#8B8E99] ${
                isClosingMenu ? 'rotate-out' : ''
              }`}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 24 24'
                stroke-width='2'
                stroke='currentColor'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                <path d='M18 6l-12 12' />
                <path d='M6 6l12 12' />
              </svg>
            </button>
            {navbar.map((data, index) => (
              <Link
                href={data.src}
                className=' text-left font-inter m-6 text-[#8B8E99] hover:text-[#3858D6]'
                key={index}
                onClick={handleIsOpenMenuHamburger}
              >
                {data.title}
              </Link>
            ))}
            <div className='font-semibold sm:flex gap-2 m-6'>
              <Link
                href='/login'
                className='text-[#8B8E99] hover:text-[#3858D6]'
                onClick={handleIsOpenMenuHamburger}
              >
                Login
              </Link>
              <span className='text-[#8B8E99]'>|</span>
              <Link
                href='/register'
                className='text-[#8B8E99] hover:text-[#3858D6]'
                onClick={handleIsOpenMenuHamburger}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  )
}
