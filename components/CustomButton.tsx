// Components are server side, button components are client side 
// So wee need to:
// Tell our program to "use clinet" with each click of this button component
"use client";

import { CustomButtonProps } from '@/types';

// In order ot make this button component we need to use props in th elocation we are calling from
// IE> Hero.tsx

import Image from 'next/image'

const CustomButton = ({ title, containerStyles, handleClick, btnType }: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className='flex-1'>
        {title}
      </span>
    </button>
  )
}

export default CustomButton