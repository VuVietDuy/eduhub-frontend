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
      className={`${className} flex justify-center items-center gap-2 text-white bg-${
        type || 'blue'
      }-700 hover:bg-${type || 'blue'}-800 focus:ring-4 focus:ring-${
        type || 'blue'
      }-300 font-medium rounded-[4px] text-sm px-3 py-2 dark:bg-${
        type || 'blue'
      }-600 dark:hover:bg-${
        type || 'blue'
      }-700 focus:outline-none dark:focus:ring-${type}-800`}
      onClick={onClick}
      type={htmlType}
    >
      {icon}
      {children}
    </button>
  );
}
