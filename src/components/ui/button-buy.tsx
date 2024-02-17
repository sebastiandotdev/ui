'use client'
import Link from 'next/link'
import { ButtonHTMLAttributes } from 'react'

// type PropsButton = ButtonHTMLAttributes<HTMLButtonElement>
// // type Props = {
// //     padding: string,
// // }

interface PropsDeButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  padding: string
}

export function ButtonBuy(props: PropsDeButton) {
  return (
    <button
      {...props}
      className={`bg-[#1c4060] text-white ${props.padding}  font-bold rounded  hover:bg-[#2a4054] shadow-xl`}
    >
      {' '}
      Buy
    </button>
  )
}
