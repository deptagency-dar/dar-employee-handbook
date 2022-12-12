interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={`inline-flex items-center rounded-md bg-gray-200 px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-300 ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
