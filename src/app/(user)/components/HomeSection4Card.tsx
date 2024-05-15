import React from 'react';

interface IProps {
  icon?: React.ReactNode;
  title?: string;
  color?: string;
}
export default function HomeSection4Card(props: IProps) {
  const {icon, title, color} = props;
  return (
    <div
      className={`flex flex-col items-center justify-center md:max-w-[272px] md:min-h-44 ${color} cursor-pointer  rounded-lg`}
    >
      <div className="shadow-md rounded-full max-w-full w-16 h-16 mx-auto p-2 bg-white flex items-center justify-center">
        {icon}
      </div>
      <p className="text-lg text-white mt-4 font-semibold">{title}</p>
    </div>
  );
}
