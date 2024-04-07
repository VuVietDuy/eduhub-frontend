import React from 'react';

interface IProps {
  icon?: React.ReactNode;
  className?: string;
  htmlType?: 'button' | 'submit' | 'reset' | undefined;
  type?: string;
  size?: number;
  onClick?: () => void;
  children?: React.ReactNode;
}

export default function Button(props: IProps) {
  const {icon, className, htmlType, type, size, onClick, children} = props;
  return (
    <button
      className={`${className} text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4px] text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800`}
      onClick={onClick}
      type={htmlType}
    >
      {icon}
      {children}
    </button>
  );
}
