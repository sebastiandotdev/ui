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
      className={`bg-[#2563EB] text-white ${props.padding}  font-bold rounded  hover:bg-[#2055c6]`}
    >
      {' '}
      Buy
    </button>
  )
}
