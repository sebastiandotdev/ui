import { ButtonHTMLAttributes } from 'react'

type PropsButton = ButtonHTMLAttributes<HTMLButtonElement>
// interface PropsDeInputs extends HTMLAttributes<HTMLInputElement>{
// }

export default function ButtonLogin(props: PropsButton) {
  return (
    <button
      {...props}
      className='bg-[#2563EB] text-white py-2 px-4 rounded w-full hover:bg-[#2055c6]'
    >
      {' '}
      Ingresar
    </button>
  )
}
