import Button from '@/components/Button';
import Card from '@/components/Card';
import Comment from '@/components/Comment';
import React from 'react';

export default function Asignment() {
  return (
    <div className="p-6 grid grid-cols-12 gap-6">
      <Card className="col-span-12 md:col-span-8">
        <h2>Kiểm tra 15 phút</h2>
        <div>
          <span>Manh Hung Nguyen •</span>
          <span> 8 thg 5 (Đã chỉnh sửa 13 thg 5)</span>
        </div>
        <div>Đến hạn 15:59 11 thg 5</div>
        <hr />
        <p>
          Báo cáo tổng hợp BTL phần cá nhân của từng người, chỉ trình bày diễn
          giải và kết quả của các mục sau (đánh số đúng thứ tự như danh mục
          này): - Trang bìa yêu cầu như các buổi đã nộp. - Tên file yêu cầu như
          các buổi đã nộp. 1. Biểu đồ UC chi tiết + mô tả các UC của modul 2.
          Kịch bản chuẩn 3. Biểu đồ thực thể pha phân tích của modul 4. Biểu đồ
          lớp đầy đủ pha phân tích của modul 5. Biểu đồ tuần tự pha phân tích
          của modul 6. Biểu đồ thiết kế lớp thực thể của modul 7. Biểu đồ thiết
          kế CSDL của modul 8. TK giao diện và biểu đồ lớp thiết kế chi tiết đầy
          đủ của modul 9. Biểu đồ tuần tự pha thiết kế của modul 10. Test plan
          và test case chuẩn cho test hộp đen của modul
        </p>
      </Card>
      <div className="col-span-12 md:col-span-4">
        <Card>
          <h3>Bài kiểm tra</h3>
          <Button>Làm bài</Button>
        </Card>
      </div>
      <div className="col-span-12 md:col-span-8">
        <Comment></Comment>
        <article className="p-6 text-base bg-white rounded-lg dark:bg-gray-900">
          <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                <img
                  className="mr-2 w-6 h-6 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Michael Gough"
                />
                Michael Gough
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                <time title="February 8th, 2022">Feb. 8, 2022</time>
              </p>
            </div>
            <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              type="button"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 3"
              >
                <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
              </svg>
              <span className="sr-only">Comment settings</span>
            </button>
            <div
              id="dropdownComment1"
              className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul
                className="py-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownMenuIconHorizontalButton"
              >
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Edit
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Remove
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Report
                  </a>
                </li>
              </ul>
            </div>
          </footer>
          <p className="text-gray-500 dark:text-gray-400">
            Very straight-to-point article. Really worth time reading. Thank
            you! But tools are just the instruments for the UX designers. The
            knowledge of the design tools are as important as the creation of
            the design strategy.
          </p>
          <div className="flex items-center mt-4 space-x-4">
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
            >
              <svg
                className="mr-1.5 w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Reply
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
