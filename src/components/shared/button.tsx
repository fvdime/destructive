import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

interface ButtonProps {
  label: string
  secondary?: boolean
  fullWidth?: boolean
  disabled?: boolean
  large?: boolean
  type?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
  onClick?: () => void
}

const Button = ({ label, secondary, fullWidth, large, type, onClick, disabled }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={`rounded-full text-center text-semibold border border-zinc-100 transition-all ease-in duration-500 text-sm
    ${fullWidth ? 'w-full' : 'w-fit'} 
    ${secondary ? 'bg-transparent' : 'bg-zinc-100'} 
    ${secondary ? 'hover:bg-zinc-100' : 'hover:bg-zinc-800'} 
    ${secondary ? 'text-white' : 'text-black'}
    ${secondary ? 'hover:text-black' : 'hover:text-white'}
    ${large ? 'font-bold' : 'font-bold'}
    ${large ? 'px-8' : 'px-4'}
    ${large ? 'py-2' : 'py-1'}
    `} >
      {label}
    </button>
  )
}

export default Button