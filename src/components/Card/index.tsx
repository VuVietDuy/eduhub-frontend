import React from 'react';

interface IProps {
  children?: React.ReactNode;
  title?: string;
}

export default function Card(props: IProps) {
  const {children, title} = props;
  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-[4px] shadow dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-2">{title}</h2>
      {children}
    </div>
  );
}
