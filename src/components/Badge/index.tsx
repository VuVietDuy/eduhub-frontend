import React from 'react';

interface IProps {
  content?: string;
}
export default function Badge(props: IProps) {
  const {content} = props;
  return (
    <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2  px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
      {content}
    </span>
  );
}
