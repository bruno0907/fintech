import { ComponentProps } from 'react';
import { cn } from '../../app/utils/cn';
import { Spinner } from './Spinner';

type ButtonVariants = 'DANGER' | 'GHOST'
interface ButtonProps extends ComponentProps<'button'> {
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  variant?: ButtonVariants;
}

export function Button({ children, className, disabled, isLoading, variant, ...rest }: ButtonProps) {
  return (
    <button
      disabled={disabled || isLoading}
      className={cn(
        'w-full rounded-2xl bg-teal-900 font-medium text-white flex items-center justify-center gap-1 px-6 h-12 hover:bg-teal-800 active:bg-teal-900 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all',
        className,
        variant === 'DANGER' && 'bg-red-900',
        variant === 'GHOST' && 'bg-inherit border-2 border-gray-800 text-gray-800 hover:text-white hover:border-teal-800'

      )}
      {...rest}
    >
      {!isLoading ? children : <Spinner className="h-6" />}

    </button>
  );
}
