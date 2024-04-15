import React from 'react';
import {Fa0, Fa1, Fa3, Fa4} from 'react-icons/fa6';
import HomeSection2Card from './HomeSection2Card';

export default function HomeSection2() {
  return (
    <>
      <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 ">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-blue-50 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="max-w-screen-xl mx-auto flex relative ">
        {/* content left  */}
        <div className="w-1/2 flex items-center justify-center ">
          <div className="bg-white md:w-[400px] min-h-[400px] flex flex-col rounded-md absolute top-[-64px]">
            <div className="w-full h-1/2">
              <img
                src="/img/photo-home-1.avif"
                alt=""
                className="object-cover rounded-t-md"
              />
            </div>
            <div className="w-full h-1/2 p-8 bg-primary-500 rounded-b-md relative">
              <div className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20 ">
                <svg
                  className="absolute bottom-[-1px] overflow-hidden"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="text-primary-500 fill-current"
                    points="2560 0 2560 100 0 100"
                  ></polygon>
                </svg>
              </div>
              <h2 className="font-semibold text-xl text-white theme-dar">
                Sử mệnh mang lại hiệu quả ôn thi, học tập tốt nhất dành cho các bạn học sinh, sinh viên
              </h2>
              <p className=" text-white text-lg mt-3">
                Cộng đồng sinh viên, học sinh trên khắp cả nước cùng tham gia học tập
              </p>
            </div>
          </div>
        </div>

        {/* Content right  */}
        <div className="grid grid-rows-2 grid-flow-col gap-x-8 gap-y-12 w-1/2 ml-8">
          <HomeSection2Card
            icon={<Fa0 />}
            heading="Thân thiện, dễ sử dụng"
            content="Giao diện được thiết kế thông minh, dễ nhìn, giúp bạn dễ dàng sử dụng thành thạo và ôn thi hiệu quả."
          />
          <HomeSection2Card
            icon={<Fa1 />}
            heading="Học tập mọi lúc mọi nơi"
            content="Ôn thi ở bất cứ đâu, tại bất kỳ thời điểm nào chỉ cần có máy tính, điện thoại, máy tính bảng và kết nối Internet."
          />
          <HomeSection2Card
            icon={<Fa3 />}
            heading="Kho đề thi khổng lồ"
            content="Nguồn đề thi lớn, đa dạng đến từ nhiều trường học khác nhau mang đến tài liệu ôn thi không giới hạn."
          />
          <HomeSection2Card
            icon={<Fa4 />}
            heading="Chia sẻ tri thức"
            content="Tạo đề thi hay và chia sẻ kiến thức bổ ích đến mọi người, để tất cả cùng học tập, ôn thi tốt."
          />
        </div>
      </div>
    </>
  );
}
