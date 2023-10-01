import { ComponentProps } from "react";
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'> {
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
}

export function Button({ children, className, disabled, isLoading, ...rest }: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        "w-full rounded-2xl bg-teal-900 font-medium text-white flex items-center justify-center gap-1 px-6 h-12 hover:bg-teal-800 active:bg-teal-900 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all",
        className
      )}
      {...rest}
    >
      {!isLoading ? children : <Spinner className="h-6" />}

    </button>
  )
}
