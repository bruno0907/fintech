import { CrossCircledIcon } from '@radix-ui/react-icons';
import { FieldError } from 'react-hook-form';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import { cn } from '../../app/utils/cn';

interface Props {
  hasError?: FieldError;
  onChange?: (value: string) => void;
  disabled?: boolean;
  value?: string | number;
}

export function InputCurrency({ hasError, onChange, value, disabled }: Props & NumericFormatProps) {
  return (
    <div>
      <NumericFormat
        thousandSeparator='.'
        decimalSeparator=','
        allowLeadingZeros={false}
        allowNegative={false}
        thousandsGroupStyle='none'
        defaultValue={0}
        className={cn(
          'w-full text-gray-800 text-3xl font-bold tracking-[-1px] outline-none bg-transparent disabled:text-gray-600',
          hasError && 'text-red-900'
        )}
        onValueChange={(event) => onChange?.(event.value)}
        value={value}
        disabled={disabled}

      />
      {hasError && (
        <p className="text-xs text-red-900 flex items-center gap-2">
          <CrossCircledIcon className="h-4" />
          {hasError.message}
        </p>
      )}
    </div>
  );
}
