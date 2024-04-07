import React from 'react';

interface IPops {
  children: React.ReactNode;
}

export default function Paragraph(props: IPops) {
  const {children} = props;
  return <p className="mb-3 text-gray-500 dark:text-gray-300">{children}</p>;
}
