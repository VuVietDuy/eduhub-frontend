import React from 'react';

interface IProps {
  src?: string;
  isDotIndicator?: boolean;
  className?: string;
  size?: string;
  children?: React.ReactNode;
}

const color = ['red', 'green', 'yellow', 'gray', 'blue', 'purple', 'orange'];

export default function Avatar(props: IProps) {
  const {src, isDotIndicator, className, size, children} = props;
  return (
    <div className={`${className} inline-block relative`}>
      {src || !children ? (
        <img
          className={`w-[40px] h-[40px] bg-gray-400 rounded-full`}
          src={src || '/img/default-avatar.jpg'}
          alt=""
        />
      ) : (
        <></>
      )}
      {children ? (
        <div
          className={`w-[40px] h-[40px] bg-${
            color[Math.floor(Math.random() * 6)]
          }-400 flex justify-center items-center text-white font-medium rounded-full`}
        >
          {children}
        </div>
      ) : (
        <></>
      )}
      {isDotIndicator ? (
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      ) : (
        <></>
      )}
    </div>
  );
}
