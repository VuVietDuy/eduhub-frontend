import Card from '@/components/Card';
import Soft from '@/components/Icons/Soft';
import Select from '@/components/Select';
import {
  CaretDownOutlined,
  FilterOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import React from 'react';

export default function page() {
  return (
    <div className="m-6">
      <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg mb-6">
        <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
          <div className="w-full md:w-1/2">
            <form className="flex items-center">
              <Select
                placeholder="Kỳ học"
                menuItems={[
                  {key: 1, label: 'Kỳ I lớp 10'},
                  {key: 1, label: 'Kỳ II lớp 10'},
                  {key: 1, label: 'Kỳ I lớp 11'},
                ]}
              ></Select>
            </form>
          </div>
          <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
            <button
              type="button"
              className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              <UploadOutlined className="mr-4" />
              Export excel
            </button>
            <div className="flex items-center w-full space-x-3 md:w-auto">
              <button
                id="filterDropdownButton"
                data-dropdown-toggle="filterDropdown"
                className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                type="button"
              >
                <FilterOutlined className="mr-4" />
                Filter
                <CaretDownOutlined className="-mr-1 ml-1.5 w-5 h-5" />
              </button>
              <div
                id="filterDropdown"
                className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
              >
                <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                  Category
                </h6>
                <ul
                  className="space-y-2 text-sm"
                  aria-labelledby="dropdownDefault"
                >
                  <li className="flex items-center">
                    <input
                      id="apple"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                      Apple (56)
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="fitbit"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                      Fitbit (56)
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="dell"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                      Dell (56)
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id="asus"
                      type="checkbox"
                      value=""
                      checked
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                      Asus (97)
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Card className="mb-6">
        <div className="relative overflow-x-auto">
          <table
            className={` ${''} w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400`}
          >
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <th className={`px-6 py-3 w-10 bl`}>
                <div className="flex items-center">
                  Môn học
                  <a href="#">
                    <Soft></Soft>
                  </a>
                </div>
              </th>
              <th className={`px-6 py-3 w-10`}>
                <div className="flex items-center">
                  Điểm giữa kỳ
                  <a href="#">
                    <Soft></Soft>
                  </a>
                </div>
              </th>
              <th className={`px-6 py-3 w-10`}>
                <div className="flex items-center">
                  Điểm cuối kỳ
                  <a href="#">
                    <Soft></Soft>
                  </a>
                </div>
              </th>
            </thead>
            <tbody>
              <tr className="bg-white border-b font-semibold hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-700">
                <td className="px-6 py-4">Điểm trung bình</td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">8</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-700">
                <td className="px-6 py-4">Toán</td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">8</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-700">
                <td className="px-6 py-4">Văn</td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">8</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-700">
                <td className="px-6 py-4">Tiếng anh</td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">8</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-700">
                <td className="px-6 py-4">Vật lý</td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">8</td>
              </tr>
              <tr className="bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-700">
                <td className="px-6 py-4">Hoá học</td>
                <td className="px-6 py-4">8</td>
                <td className="px-6 py-4">8</td>
              </tr>
            </tbody>
          </table>
          <div className="relative overflow-hidden bg-white rounded-b-lg shadow-md dark:bg-gray-800">
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                Showing{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1-10
                </span>{' '}
                of{' '}
                <span className="font-semibold text-gray-900 dark:text-white">
                  1000
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    className="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  >
                    3
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    4
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </Card>
      <Card title="Nhận xét của giáo viên chủ nhiệm">
        <p>Bạn chăm học</p>
      </Card>
    </div>
  );
}
