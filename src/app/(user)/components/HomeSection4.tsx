import React from 'react';
import {PiMathOperationsFill} from 'react-icons/pi';
import HomeSection4Card from './HomeSection4Card';
import {IoLanguage} from 'react-icons/io5';
import {Fa42Group, FaBookOpen} from 'react-icons/fa6';
import Link from 'next/link';

export default function HomeSection4() {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-around gap-3 w-full mt-52 items-center">
      <div className="md:w-1/2 flex items-center justify-center">
        <div className=" w-full  md:w-1/2 flex flex-col  gap-y-8">
          <HomeSection4Card
            icon={<PiMathOperationsFill className="text-xl" />}
            title="Toán"
            color="bg-red-500"
          />
          <HomeSection4Card
            icon={<IoLanguage className="text-xl" />}
            title="Anh"
            color="bg-blue-500"
          />
          <HomeSection4Card
            icon={<FaBookOpen className="text-xl" />}
            title="Văn"
            color="bg-yellow-500"
          />
        </div>

        <div className=" w-full md:w-1/2 md:mt-16 flex flex-col gap-y-8 ">
          <HomeSection4Card
            icon={<PiMathOperationsFill className="text-xl" />}
            title="Hóa học"
            color="bg-green-500"
          />
          <HomeSection4Card
            icon={<IoLanguage className="text-xl" />}
            title="Vật lý"
            color="bg-orange-500"
          />
          <HomeSection4Card
            icon={<FaBookOpen className="font-xl" />}
            title="Văn"
            color="bg-blue-300"
          />
        </div>
      </div>
      <div className="w-1/2 flex ">
        <div className=" mx- md:min-w-[365px]  padding-top ml-20">
          <div className=" p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
            <Fa42Group />
          </div>
          <div className="">
            <h2 className="text-3xl font-semibold text-textColor">
              Javascript Components
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
    </div>
  );
}
