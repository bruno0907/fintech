import { NumericFormat, NumericFormatProps } from 'react-number-format';

interface Props extends NumericFormatProps {}

export function InputCurrency({ ...rest }: Props) {
  return (
    <NumericFormat
      thousandSeparator='.'
      decimalSeparator=','
      className='w-full text-gray-800 text-3xl font-bold tracking-[-1px] outline-none'
      defaultValue={0}
      {...rest}
    />
  );
}
