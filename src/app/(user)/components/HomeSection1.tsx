import Link from 'next/link';
import React from 'react';

export default function HomeSection1() {
  return (
    <div className="w-full flex flex-start relative">
      <div className="max-w-screen-xl mx-auto flex items-center flex-wrap">
        <div className=" relative items-center h-[600px] flex  max-h-[860px]">
          <div className="mx-auto h-full items-center flex flex-wrap ">
            <div className=" md:w-1/2 px-4">
              <h2 className="font-semibold text-4xl text-textColor">
                Notus React - A beautiful extension for Tailwind CSS
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-textColor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                beatae nihil corrupti magnam assumenda placeat reiciendis non
                dolorum atque amet unde deserunt, quos, fuga accusamus
                accusantium minus sed. Quibusdam, repudiandae!
              </p>
              <div className="flex flex-start">
                <Link
                  href="/"
                  className="text-white font-bold px-4 mt-4 mr-3 py-3 rounded outline-none focus:outline-none  bg-primary-700 active:bg-primary-400 hover:bg-primary-500 hover:shadow-lg ease-linear transition-all duration-150   "
                >
                  GET STARTED
                </Link>
                <Link
                  href="/"
                  className="text-white font-bold px-4 mt-4 py-3 rounded outline-none focus:outline-none  bg-primary-700 active:bg-primary-400 hover:bg-primary-500 hover:shadow-lg ease-linear transition-all duration-150   "
                >
                  GITHUB STAR
                </Link>
              </div>
            </div>
            {/* <div className="md:w-1/3 flex items-center px-4 mx-auto">
              <img
                className="object-contain "
                src="/img/mission_1.webp"
                alt=""
              />
            </div> */}
          </div>
        </div>
      </div>
      <img
        className="md:w-1/2 absolute top-0 right-0 "
        src="/pattern_react.jpg"
        alt=""
      />
    </div>
  );
}
