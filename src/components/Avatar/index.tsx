import React from 'react';

interface IProps {
  src?: string;
  isDotIndicator?: boolean;
  className?: string;
  size?: string;
}

export default function Avatar(props: IProps) {
  const {src, isDotIndicator, className, size} = props;
  return (
    <div className={`${className} inline-block relative`}>
      <img
        className={`w-[90px] h-[90px] bg-gray-400 rounded-full`}
        src={src || '/img/default-avatar.jpg'}
        alt=""
      />
      {isDotIndicator ? (
        <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      ) : (
        <></>
      )}
    </div>
  );
}
