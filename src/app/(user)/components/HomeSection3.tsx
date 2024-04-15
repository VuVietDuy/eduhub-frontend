import Link from 'next/link';
import React from 'react';
import {Fa42Group} from 'react-icons/fa6';

export default function () {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-around w-full mt-52 items-center">
      <div className="w-1/2 flex items-center justify-start">
        <div className=" mx- md:min-w-[365px]  padding-top">
          <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <Fa42Group />
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold text-textColor">
              CSS Components
            </h2>
            <p className="text-lg font-light leading-relaxed mt-4 mb-4 ">
              Every element that you need in a product comes built in as a
              component. All components fit perfectly with each other and can
              have different colours.
            </p>
            <div className="block pb-6">
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2">
                Buttons
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2">
                Inputs
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2">
                Labels
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2">
                Menus
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2">
                Navbars
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2">
                Pagination
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2">
                Progressbars
              </span>
              <span className="text-xs font-semibold inline-block py-1 px-2 rounded-full  bg-white uppercase last:mr-0 mr-2 mt-2">
                Typography
              </span>
            </div>
            <Link
              href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
              target="_blank"
              className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
            >
              View All{' '}
              <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img className="w-2/3 " src="/img/mission_1.webp" alt="" />
      </div>
    </div>
  );
}
