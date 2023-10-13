import { FieldError } from 'react-hook-form';
import { DropdownMenu } from './DropdownMenu';
import { cn } from '../../app/utils/cn';
import { ChevronDownIcon, CrossCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { Color, colors } from '../../app/config/constants';
import { ColorIcon } from '../../assets/icons/ColorIcon';

interface ColorsDropdownInputProps {
  hasError?: FieldError
  className?: string;
  placeholder?: string;
  onChange?: (color: string) => void
  value?: string;
  disabled?: boolean;
}

export function ColorsDropdownInput({ hasError, className, placeholder, onChange, value, disabled }: ColorsDropdownInputProps) {
  const [selectedColor, setSelectedColor] = useState<null | Color>(() => {
    return colors.find(c => c.color === value) ?? null;
  });

  function handleSelectColor(color: Color) {
    setSelectedColor(color);
    onChange?.(color.color);
  }

  return (
    <div className='relative'>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger disabled={disabled} value={value}>
          <button
            disabled={disabled}
            className={cn(
              'relative bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] tex-gray-700 transition-all outline-none text-left  disabled:opacity-50 disabled:bg-gray-100',
              hasError && 'border-red-900',
              className
            )}
          >
            {placeholder}

            <div className='absolute right-3 top-1/2 -translate-y-1/2'>
              {!selectedColor && (
                <ChevronDownIcon
                  className='w-6 h-6 text-gray-800'
                />
              )}
              {selectedColor && (
                <ColorIcon bg={selectedColor.bg} color={selectedColor.color} />
              )}
            </div>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Content
          className='grid grid-cols-4 gap-3'
          side='bottom'
          align='start'
        >
          {colors.map(color => (
            <DropdownMenu.Item
              key={color.color}
              className='min-w-fit'
              onSelect={() => handleSelectColor(color)}
            >
              <ColorIcon bg={color.bg} color={color.color} />
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Root>
      {hasError && (
        <p className="text-xs text-red-900 flex items-center gap-2 mt-1">
          <CrossCircledIcon className="h-4" />
          {hasError.message}
        </p>
      )}
    </div>
  );
}
