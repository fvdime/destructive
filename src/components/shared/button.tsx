import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

interface ButtonProps {
  label: string;
  secondary?: boolean;
  fullWidth?: boolean;
  disabled?: boolean;
  large?: boolean;
  type?: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >;
  onClick?: () => void;
}

const Button = ({
  label,
  secondary,
  fullWidth,
  large,
  type,
  onClick,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type="submit"
      className={`rounded text-center text-semibold border border-secondary transition-all ease-in duration-300 text-sm hover:shadow-md
    ${fullWidth ? "w-full" : "w-fit"} 
    ${secondary ? "bg-white" : "bg-secondary"} 
    ${secondary ? "text-black" : "text-white"}
    ${large ? "font-bold" : "font-bold"}
    ${large ? "px-8" : "px-4"}
    ${large ? "py-2" : "py-1"}
    `}
    >
      {label}
    </button>
  );
};

export default Button;
