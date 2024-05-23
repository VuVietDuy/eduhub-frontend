import React from 'react';

interface IProps {
  children?: React.ReactNode;
  title?: string;
  className?: string;
}

export default function Card(props: IProps) {
  const {children, title, className} = props;
  return (
    <div
      className={`${className} w-full p-6 bg-white border-gray-200 rounded-[8px] shadow-lg dark:bg-gray-800 dark:border-gray-700`}
    >
      {title ? <h2 className="mb-2">{title}</h2> : <></>}
      {children}
    </div>
  );
}
