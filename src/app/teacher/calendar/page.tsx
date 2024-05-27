import React from 'react';

export default function Calendar() {
  return (
    <div className="p-1 sm:p-6">
      <div className="container mx-auto mt-10">
        <div className="wrapper bg-white rounded shadow w-full ">
          <div className="header flex justify-between border-b p-2">
            <span className="text-lg font-bold">2020 July</span>
            <div className="buttons">
              <button className="p-1">v</button>
              <button className="p-1">v</button>
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="border-r"></th>
                <th className="p-2 border-r h-12 lg:h-12 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Monday
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Mon
                  </span>
                </th>
                <th className="p-2 border-r h-12 lg:h-12 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Tuesday
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Tue
                  </span>
                </th>
                <th className="p-2 border-r h-12 lg:h-12 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Wednesday
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Wed
                  </span>
                </th>
                <th className="p-2 border-r h-12 lg:h-12 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Thursday
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Thu
                  </span>
                </th>
                <th className="p-2 border-r h-12 lg:h-12 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Friday
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Fri
                  </span>
                </th>
                <th className="p-2 border-r h-12 lg:h-12 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Saturday
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Sat
                  </span>
                </th>
                <th className="p-2 border-r h-12 lg:h-12 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">
                    Sunday
                  </span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Sun
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center h-12 lg:h-20">
                <td className="h-12 lg:h-20 w-10 transition cursor-pointer duration-500 ease">
                  <div className="flex flex-col h-12 lg:h-20 w-10">
                    <div className="bottom h-30 w-full cursor-pointer">
                      <div className="relative event h-full rounded text-sm mb-1 ">
                        <span className="absolute top-[-14px] time z-10 left-1">
                          7:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                        <span className="event-name">10A1</span>
                        <span className="time hidden lg:block">Phòng 303</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                        <span className="event-name">10A2</span>
                        <span className="time hidden lg:block">Phòng 304</span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr>
              <tr className="text-center h-12 lg:h-20">
                <td className="h-12 lg:h-20 w-10 transition cursor-pointer duration-500 ease">
                  <div className="flex flex-col h-12 lg:h-20 w-10">
                    <div className="bottom h-30 w-full cursor-pointer">
                      <div className="relative event h-full rounded text-sm mb-1 ">
                        <span className="absolute top-[-14px] time z-10 left-1">
                          8:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                        <span className="event-name">Toán</span>
                        <span className="time hidden lg:block">
                          12:00~14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                        <span className="event-name">Toán</span>
                        <span className="time hidden lg:block">
                          12:00~14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr>
              <tr className="text-center h-12 lg:h-20">
                <td className="h-12 lg:h-20 w-10 transition cursor-pointer duration-500 ease">
                  <div className="flex flex-col h-12 lg:h-20 w-10">
                    <div className="bottom h-30 w-full cursor-pointer">
                      <div className="relative event h-full rounded text-sm mb-1 ">
                        <span className="absolute top-[-14px] time z-10 left-1">
                          9:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                        <span className="event-name">Toán</span>
                        <span className="time hidden lg:block">
                          12:00~14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                        <span className="event-name">Toán</span>
                        <span className="time hidden lg:block">
                          12:00~14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                        <span className="event-name">Toán</span>
                        <span className="time hidden lg:block">
                          12:00~14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="text-center h-12 lg:h-20">
                <td className="h-12 lg:h-20 w-10 transition cursor-pointer duration-500 ease">
                  <div className="flex flex-col h-12 lg:h-20 w-10">
                    <div className="bottom h-30 w-full cursor-pointer">
                      <div className="relative event h-full rounded text-sm mb-1 ">
                        <span className="absolute top-[-14px] time z-10 left-1">
                          10:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                        <span className="event-name">Toán</span>
                        <span className="time hidden lg:block">
                          12:00~14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                        <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                          <span className="event-name">10A1</span>
                          <span className="time hidden lg:block">
                            Phòng 303
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                      <span className="event-name">Toán</span>
                      <span className="time hidden lg:block">12:00~14:00</span>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr>
              <tr className="text-center h-12 lg:h-20">
                <td className="h-12 lg:h-20 w-10 transition cursor-pointer duration-500 ease">
                  <div className="flex flex-col h-12 lg:h-20 w-10">
                    <div className="bottom h-30 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      <div className="event h-full bg-purple-400 text-white rounded p-1 text-sm mb-1 flex flex-col items-center justify-center ">
                        <span className="event-name">Toán</span>
                        <span className="time hidden lg:block">
                          12:00~14:00
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
                <td className="border p-1 h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
                  <div className="flex flex-col h-12 lg:h-20 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
