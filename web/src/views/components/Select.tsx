import * as RadixSelect from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { cn } from '../../app/utils/cn';
import { FieldError } from 'react-hook-form';
import { useState } from 'react';

interface SelectProps {
  name: string
  hasError?: FieldError
  className?: string;
  placeholder?: string;
  options: {
    value: string;
    label: string;
  }[];
}

export function Select({ hasError, className, placeholder, options }: SelectProps) {
  const [selectedValue, setSelectedValue] = useState<null | string>(null);

  function handleSelectValue(value: string) {
    setSelectedValue(value);
  }

  return (
    <div className='relative'>
      <label
        htmlFor=""
        className={cn(
          'absolute z-10 top-1/2 -translate-y-1/2 left-3 text-gray-700 pointer-events-none',
          selectedValue && 'text-xs left-[13px] top-2 transition-all translate-y-0'
        )}
      >
        {placeholder}
      </label>
      <RadixSelect.Root onValueChange={event => handleSelectValue(event)}>
        <RadixSelect.Trigger
          className={cn(
            'pt-4 relative bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] tex-gray-800 transition-all outline-none text-left',
            hasError && 'border-red-900',
            className
          )}
        >
          <RadixSelect.Value />
          <RadixSelect.Icon className="absolute right-3 top-3.5">
            <ChevronDownIcon className='w-6 h-6 text-gray-800' />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>

        <RadixSelect.Portal>
          <RadixSelect.Content className="overflow-hidden bg-white z-[51] rounded-2xl border shadow-[0px_11px_20px_0px_rgba(0,0,0,0.10)]">

            <RadixSelect.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
              <ChevronUpIcon />
            </RadixSelect.ScrollUpButton>

            <RadixSelect.Viewport className="p-2 space-y-2">

              {options.map((option) => {
                return (
                  <RadixSelect.Item
                    key={option.value}
                    className={cn(
                      'relative p-2 text-gray-800 text-sm data-[highlighted]:bg-gray-100 rounded-2xl data-[state=checked]:bg-gray-200 outline-none transition-colors',
                    )}
                    value={option.value}
                  >
                    <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                    <RadixSelect.ItemIndicator className="absolute right-3 top-3">
                      <CheckIcon />
                    </RadixSelect.ItemIndicator>
                  </RadixSelect.Item>
                );
              })}

            </RadixSelect.Viewport>

            <RadixSelect.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-gray-800 cursor-default">
              <ChevronDownIcon />
            </RadixSelect.ScrollDownButton>

          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
      {hasError && (
        <p className="text-xs text-red-900 flex items-center gap-2 mt-1">
          <CrossCircledIcon className="h-4" />
          {hasError.message}
        </p>
      )}
    </div>
  );
}

