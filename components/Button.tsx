import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
