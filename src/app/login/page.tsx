'use client';
import fetcher from '@/api/fetcher';
import {loginUser} from '@/redux/slice/user.slice';
import {RootState, store} from '@/redux/store';
import {Formik} from 'formik';
import {useRouter} from 'next/navigation';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function Login() {
  const dispatch = useDispatch();
  const initialValues = {
    username: '',
    password: '',
  };
  const router = useRouter();
  const handleOnSubmit = (e: any) => {
    fetcher
      .post('/api/auth/login', {username: e.username, password: e.password})
      .then((res) => {
        console.log(res.data.user);
        const a = res?.data.user;
        const b = {
          firstName: a.firstName,
          lastName: a.lastName,
          dateOfBirth: a.dateOfBirth,
        };
        dispatch(loginUser(b));
        // router.push('/class');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="relative m-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
        <div className="w-full">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-gray-900">Đăng nhập</h1>
            <p className="mt-2 text-gray-500">
              Đăng nhập để truy cập vào tài khoản của bạn
            </p>
          </div>
          <div className="mt-5">
            <Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
              {({values, handleChange, handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                  <div className="relative mt-6">
                    <input
                      type="text"
                      value={values.username}
                      onChange={handleChange}
                      name="username"
                      id="username"
                      placeholder="Tên người dùng"
                      className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                      htmlFor="username"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Tên người dùng
                    </label>
                  </div>
                  <div className="relative mt-6">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={values.password}
                      onChange={handleChange}
                      placeholder="Mật khẩu"
                      className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                    />
                    <label
                      htmlFor="password"
                      className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                    >
                      Mật khẩu
                    </label>
                  </div>
                  <div className="my-6">
                    <button
                      type="submit"
                      className="w-full rounded-md bg-blue-700 px-3 py-3 text-white focus:bg-blue-600 focus:outline-none"
                    >
                      Đăng nhập
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
