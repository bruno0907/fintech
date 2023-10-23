import { FieldError } from 'react-hook-form';

import { cn } from '../../app/utils/cn';
import { CrossCircledIcon } from '@radix-ui/react-icons';
import { useState } from 'react';
import { formatDate } from '../../app/utils/formatDate';
import { Popover } from './Popover';
import { DatePicker } from './DatePicker';

interface DatePickerInputProps {
  name: string
  hasError?: FieldError
  className?: string;
  placeholder?: string;
  value?: Date;
  onChange?: (date: Date) => void;
}

export function DatePickerInput({ hasError, className, placeholder, value, onChange }: DatePickerInputProps) {
  const [selectedDate, setSelectedDate] = useState(value ?? new Date());

  function handleSelectDate(date: Date) {
    setSelectedDate(date);
    onChange?.(date);
  }

  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <button
            type='button'
            className={cn(
              'relative bg-white w-full rounded-lg border border-gray-500 px-3 pt-4 h-[52px] tex-gray-700 transition-all outline-none text-left',
              hasError && 'border-red-900',
              className
            )}
          >
            <span className='absolute text-gray-700 text-xs left-[13px] top-2 pointer-events-none'>{placeholder}</span>
            <span>{formatDate(selectedDate)}</span>

          </button>
        </Popover.Trigger>

        <Popover.Content
          align='start'
          className={cn(
            'p-4 bg-white rounded-2xl space-y-2 shadow-[0px_11px_20px_0px_rgba(0,0,0,.10)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[51]',
          )}
        >
          <DatePicker
            value={selectedDate}
            onChange={handleSelectDate}
          />
        </Popover.Content>
      </Popover.Root>
      {hasError && (
        <p className="text-xs text-red-900 flex items-center gap-2 mt-1">
          <CrossCircledIcon className="h-4" />
          {hasError.message}
        </p>
      )}
    </div>
  );
}
