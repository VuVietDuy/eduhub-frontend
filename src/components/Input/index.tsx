import React from 'react';

interface IProps {
  value?: string;
  onChange?: any;
  name?: string;
  className?: string;
  placeholder?: string;
  type?: string;
  accept?: string;
  required?: boolean;
}

export default function Input({
  value,
  onChange,
  name,
  className,
  placeholder,
  type,
  accept,
  required,
}: IProps) {
  return (
    <input
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      className={`${className} bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
      placeholder={placeholder}
      accept={accept}
      required={required}
    />
  );
}
