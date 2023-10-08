import { ComponentProps, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

import { CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';

interface InputProps extends ComponentProps<'input'> {
  name: string
  hasError?: FieldError
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ id, name, placeholder, hasError, ...rest }, ref) => {
  const inputId = id ?? name;

  return (
    <div className="relative flex flex-col gap-1">
      <input
        id={inputId}
        name={name}
        className={cn(
          'bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] tex-gray-800 pt-4 placeholder-shown:pt-0 peer placeholder:invisible transition-all',
          hasError && 'border-red-900'
        )}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
      <label
        htmlFor={inputId}
        className="absolute left-[13px] text-xs text-gray-700 top-2 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >{placeholder}</label>
      {hasError && (
        <p className="text-xs text-red-900 flex items-center gap-2">
          <CrossCircledIcon className="h-4" />
          {hasError.message}
        </p>
      )}
    </div>
  );
});
