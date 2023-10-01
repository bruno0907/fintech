import { ComponentProps } from "react";

interface InputProps extends ComponentProps<'input'> {
  name: string
}

export function Input({ id, name, placeholder, ...rest }: InputProps) {
  const inputId = id ?? name;

  return (
    <div className="relative">
      <input
        id={inputId}
        name={name}
        className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[52px] tex-gray-800 pt-4 placeholder-shown:pt-0 peer placeholder:invisible transition-all"
        placeholder={placeholder}
        {...rest}
      />
      <label
        htmlFor={inputId}
        className="absolute left-[13px] text-xs text-gray-700 top-2 peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >{placeholder}</label>
    </div>
  )
}
