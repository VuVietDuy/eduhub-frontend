import React from 'react';

interface IProps {
  title?: string;
  imgSrc: string;
}
export default function HomeSection6Card(props: IProps) {
  const {title, imgSrc} = props;
  return (
    <div className="w-full lg:w-4/12 px-4">
      <h5 className="text-xl font-semibold pb-4 text-center">{title}</h5>
      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
        <img
          className="   align-middle
                border-none
                max-w-full
                h-auto
                rounded-lg"
          src={imgSrc}
          alt=""
        />
      </div>
    </div>
  );
}
