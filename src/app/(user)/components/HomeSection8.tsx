import Link from 'next/link';
import React from 'react';

export default function HomeSection8() {
  return (
    <div className="max-w-screen-xl relative mx-auto min-h-[200px] ">
      <div className="-mt-2 top-32 bottom-auto left-0 right-0 w-full absolute h-20">
        <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
          <div className="w-full text-center lg:w-8/12">
            <p className="text-4xl text-center">
              <span role="img" aria-label="love">
                😍
              </span>
            </p>
            <h3 className="font-semibold text-3xl">
              Do you love this Starter Kit?
            </h3>
            <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
              Cause if you do, it can be yours now. Hit the buttons below to
              navigate to get the Free version for your next project. Build a
              new web app or give an old project a new look!
            </p>
            <div className="sm:block flex flex-col mt-10">
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
            <div className="text-center mt-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
