import Link from 'next/link';
import React from 'react';
import {Fa42Group} from 'react-icons/fa6';

export default function HomeSection7() {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-around w-full mt-40 items-center pb-64 md:px-3 sm:px-3">
      {/* Content left  */}
      <div className="w-1/2 flex items-start justify-start">
        <div className=" mx- md:min-w-[365px]  padding-top">
          <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <Fa42Group />
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold text-white">Open Source</h2>
            <p className="text-lg text-gray-300 font-light leading-relaxed mt-4 mb-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              aliquid perferendis, error deleniti ex eius corporis
              necessitatibus ducimus totam facilis repellat delectus harum,
              impedit esse, repudiandae provident hic atque a.
            </p>
            <p className="text-lg text-gray-300 font-light leading-relaxed mt-4 mb-4 ">
              Get it free on Github and please help us spread the news with a
              Star!
            </p>

            <Link
              href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
              target="_blank"
              className="mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-slate-800 active:bg-slate-600 uppercase text-sm shadow hover:shadow-xl"
            >
              Github Star
            </Link>
          </div>
        </div>
      </div>
      {/* Content right  */}
      <div className="w-1/2 flex items-end justify-end">
        <div className=" w-full md:w-4/5   flex flex-col gap-y-8 ">
          <img src="/img/documentation.webp" alt="" />
        </div>
      </div>
    </div>
  );
}
