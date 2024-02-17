'use client'

import {
  Password,
  IconEye,
  IconUser,
  IconPhon,
  IconEmail,
} from '@/components/icons'
import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { ButtonGoogle, ButtonLogin, Input } from '@/components/ui'
import { Toaster, toast } from 'sonner'

function App() {
  return (
    <div>
      <Toaster />
      <button onClick={() => toast('My first toast')}>Give me a toast</button>
    </div>
  )
}

export default function FormRegister() {
  const [showIconConfirmPassword, setShowIconConfirmPassword] = useState(false)
  const [showIconPassword, setShowIconPassword] = useState(false)
  const [messageErrorPassword, setMessageErrorPassword] = useState('')
  const [messageEmail, setMessageEmail] = useState('') // Maneja estado de Email registrado
  const [messagename, setMessageName] = useState('') // Maneja estado de name usuario
  const [messageErrorPhoneNumber, setMessageErroPhoneNumber] = useState('') // Maneja mesaje de error PhoneNumber
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState({
    confirmPassword: '',
  })

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
  })

  const togglePasswordVisibility = () => {
    setShowIconPassword((showIconPassword) => !showIconPassword)
  }

  const togglePasswordConfirmVisibility = () => {
    setShowIconConfirmPassword(
      (showIconConfirmPassword) => !showIconConfirmPassword,
    )
  }

  // Stores the input values Confirm Password
  const handleGetInputConfimPassword = (key: string, value: string) => {
    setConfirmPasswordValidation((prev) => ({ ...prev, [key]: value }))
    setMessageName('')
  }

  const handleGetInputsValue = (key: string, value: string) => {
    setUser((prev) => ({ ...prev, [key]: value }))
    setMessageEmail('')
    setMessageName('')
  }

  const handleRegisterUser = async (e: FormEvent) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    console.log(user)

    const url_api = process.env.NEXT_PUBLIC_URL_BACKEND ?? ''

    // Validation UserName

    if (user.name.length < 6) {
      setMessageName('The username must be more than 6 characters')
      return
    } else if (/\d/.test(user.name)) {
      setMessageName('The username cannot contain numbers.')
      return
    } else {
      setMessageName('')
    }

    // Validation PASSWORD

    if (user.password !== confirmPasswordValidation.confirmPassword) {
      setMessageErrorPassword('Passwords do not match.')
      return
    } else {
      setMessageErrorPassword('')
    }

    // Validartion Phone
    const REGULARVALIDATIONEXPRESSIONNUMBER = /^[0-9]+$/
    if (!REGULARVALIDATIONEXPRESSIONNUMBER.test(user.phone)) {
      setMessageErroPhoneNumber(
        'El usuario no puede contener caracteres, ejemplo: 3123840933',
      )
      return
    } else {
      setMessageErroPhoneNumber('')
    }

    try {
      const res = await fetch(`${url_api}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...user,
        }),
      })
      const data = await res.json()

      console.log(data)

      // Message errors
      if (data.detail) {
        toast(data.detail.message)
      }
    } catch (error) {
      console.error('Error processing the request', error)
    }
  }

  return (
    <>
      <form
        className='bg-[#F5F5F7] px-8 pt-6 mb-4 '
        onSubmit={handleRegisterUser}
      >
        <h3 className='mt-2 mb-4 text-[#8B8E99] font-semibold text-2xl text-center md:text-left'>
          SingUp
        </h3>
        <Toaster position='top-right' />
        <div className='mb-2 relative'>
          <label
            htmlFor='username'
            className='block text-[#8B8E99] text-xs mb-2'
          >
            Username
          </label>
          <div className='relative'>
            <Input
              type='text'
              name='username'
              id='username'
              placeholder='Jhon Doe'
              onChange={(e) =>
                handleGetInputsValue('name', e.currentTarget.value)
              }
            />
            <IconUser />
          </div>
          {messagename && (
            <div style={{ color: 'red', fontSize: '10px', padding: '4px' }}>
              {messagename}
            </div>
          )}
        </div>
        <div className='mb-2 relative'>
          <label htmlFor='email' className='block text-[#8B8E99] text-xs mb-2'>
            Email
          </label>
          <div className='relative'>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='example@gmail.com'
              onChange={(e) =>
                handleGetInputsValue('email', e.currentTarget.value)
              }
            />
            <IconEmail />
          </div>
          {messageEmail && (
            <div style={{ color: 'red', fontSize: '10px', padding: '4px' }}>
              {messageEmail}
            </div>
          )}
        </div>
        <div className='mb-2 relative'>
          <label
            htmlFor='password'
            className='block text-[#8B8E99] text-xs mb-2'
          >
            Password
          </label>
          <div className='relative'>
            <Input
              type={showIconPassword ? 'text' : 'password'}
              name='password'
              id='password'
              placeholder='Enter your password'
              onChange={(e) =>
                handleGetInputsValue('password', e.currentTarget.value)
              }
            />
            <Password />
            <button
              type='button'
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
              onClick={togglePasswordVisibility}
            >
              {showIconPassword ? (
                <IconEye />
              ) : (
                <svg height='15' width='15' viewBox='0 0 640 512'>
                  <path
                    fill='#ababab'
                    d='M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {messageErrorPassword && (
          <div style={{ color: 'red', fontSize: '10px', padding: '4px' }}>
            {messageErrorPassword}
          </div>
        )}

        <div className='mb-2 relative'>
          <label
            htmlFor='confirmPassword'
            className='block text-[#8B8E99] text-xs mb-2'
          >
            Confirm Password
          </label>
          <div className='relative'>
            <Input
              type={showIconConfirmPassword ? 'text' : 'password'}
              name='confirmPassword'
              id='confirmPassword'
              placeholder='Enter your password'
              onChange={(e) =>
                handleGetInputConfimPassword(
                  'confirmPassword',
                  e.currentTarget.value,
                )
              }
            />
            <Password />
            <button
              type='button'
              className='absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer'
              onClick={togglePasswordConfirmVisibility}
            >
              {showIconConfirmPassword ? (
                <IconEye />
              ) : (
                <svg height='15' width='15' viewBox='0 0 640 512'>
                  <path
                    fill='#ababab'
                    d='M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div className='mb-2 relative'>
          <label
            htmlFor='phoneNumber'
            className='block text-[#8B8E99] text-xs mb-2'
          >
            Phone Number
          </label>
          <div className='relative'>
            <Input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              placeholder='Enter your phone number'
              onChange={(e) =>
                handleGetInputsValue('phone', e.currentTarget.value)
              }
            />
            <IconPhon />
          </div>
        </div>
        <div style={{ color: 'red', fontSize: '10px', padding: '4px' }}>
          {messageErrorPhoneNumber}
        </div>
        <div className='mb-2 mt-4 flex items-center justify-center font-semibold'>
          <Link href='/' className='text-[#2563EB] text-sm'>
            Forgot Password?
          </Link>
        </div>

        <div className='mb-2'>
          <ButtonLogin type='submit'></ButtonLogin>
        </div>
        <div className='mb-2 mt-4 flex gap-2'>
          <p className='text-sm'>Already have an account?</p>
          <Link href='/Login' className='text-[#2563EB] text-sm font-semibold'>
            Login Now
          </Link>
        </div>
        <div className='relative mt-6 text-center'>
          <hr className='text-[#dfdfe1] mt-4' />
          <p className='text-gray-dark text-sm absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#F5F5F7] w-9 px-2 md:-top-0.7 md:left- md:right-2'>
            OR
          </p>
        </div>
        <div className='mt-6'>
          <ButtonGoogle />
        </div>
      </form>
    </>
  )
}
