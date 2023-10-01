import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="w-full rounded-2xl bg-teal-900 font-medium text-white flex items-center justify-center gap-1 px-6 h-12 hover:bg-teal-800 active:bg-teal-900 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all"
      {...rest}
    >
      {children}
    </button>
  )
}
