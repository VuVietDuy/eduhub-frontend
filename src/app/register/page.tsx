'use client';
import Button from '@/components/Button';
import React from 'react';

export default function Register() {
  const handleOnSubmit = () => {};
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-12">
          <a href="#" className="w-32">
            <img src="/logo.png" alt="" />
          </a>
        </div>

        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Join Us.</p>
          <form
            className="flex flex-col pt-3 md:pt-8"
            onSubmit={handleOnSubmit}
          >
            <div className="flex flex-col pt-4">
              <label className="text-lg">Name</label>
              <input
                type="text"
                id="name"
                placeholder="John Smith"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label className="text-lg">Email</label>
              <input
                type="email"
                id="email"
                placeholder="your@email.com"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label className="text-lg">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex flex-col pt-4">
              <label className="text-lg">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <Button type="primary" className="mt-8">
              Log In
            </Button>
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Already have an account?{' '}
              <a href="login.html" className="underline font-semibold">
                Log in here.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://source.unsplash.com/IXUM4cJynP0"
          alt="Background"
        />
      </div>
    </div>
  );
}
