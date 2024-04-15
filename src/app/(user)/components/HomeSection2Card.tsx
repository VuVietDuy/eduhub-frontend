import React from 'react';

interface IProps {
  icon?: React.ReactNode;
  heading?: string;
  content?: string;
}
export default function (props: IProps) {
  return (
    <div className="max-w-[280px]  padding-top">
      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
        {props.icon}
      </div>
      <div className="">
        <h3 className="text-xl font-semibold text-textColor">
          {props.heading}
        </h3>
        <p className="text-gray-500 mt-2">{props.content}</p>
      </div>
    </div>
  );
}
