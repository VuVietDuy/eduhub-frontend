'use client';
import Button from '@/components/Button';
import React from 'react';
import {FcGoogle} from 'react-icons/fc';

export default function Login() {
  const handleOnSubmit = () => {};

  const loginWithGoogle = () => {};
  return (
    <div className="w-full flex flex-wrap">
      <div className="w-full md:w-1/2 flex flex-col">
        <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
          <p className="text-center text-3xl">Welcome.</p>
          <form
            className="flex flex-col pt-3 md:pt-8"
            onSubmit={handleOnSubmit}
          >
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

            <Button type="primary" className="mt-8">
              Log In
            </Button>
          </form>
          <div className="text-center pt-12 pb-12">
            <p>
              Don't have an account?{' '}
              <a href="register.html" className="underline font-semibold">
                Register here.
              </a>
            </p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <button
              onClick={loginWithGoogle}
              className="flex items-center justify-center gap-3 px-4 py-2 rounded-md bg-cardOverlay cursor-pointer hover:shadow-md duration-100 ease-in-out transition-all border"
            >
              <FcGoogle className="text-xl" /> Sign up with Google
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/2 shadow-2xl">
        <img
          className="object-cover w-full h-screen hidden md:block"
          src="https://source.unsplash.com/IXUM4cJynP0"
        />
      </div>
    </div>
  );
}
