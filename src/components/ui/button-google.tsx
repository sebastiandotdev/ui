import { ButtonHTMLAttributes } from 'react'
import { IconGoogle } from '../icons'

type PropsButton = ButtonHTMLAttributes<HTMLButtonElement>
// interface PropsDeInputs extends HTMLAttributes<HTMLInputElement>{
// }

export default function ButtonGoogle(props: PropsButton) {
  return (
    <button
      {...props}
      className=' flex justify-center gap-2 items-center bg-[#d5d8e5] rounded-2xl text-sm py-2 px-4 w-full hover:bg-[#c3c5d1]'
    >
      <IconGoogle />
      Continue wtih Google
    </button>
  )
}
