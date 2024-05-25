'use client';
import React, {useEffect, useRef, useState} from 'react';
import {
  BarChartOutlined,
  GlobalOutlined,
  LayoutOutlined,
  ProjectOutlined,
} from '@ant-design/icons';
import Chart, {ChartType} from 'chart.js/auto';
import Card from '@/components/Card';
import Icon from '@ant-design/icons/lib/components/Icon';
export default function page() {
  const canvasEl = useRef<any>();
  const [chartLabels, setChartLabels] = useState<any>([
    '0.0',
    '0.5',
    '1.0',
    '1.5',
    '2.0',
    '2.5',
    '3.0',
    '3.5',
    '4.0',
    '4.5',
    '5.0',
    '5.5',
    '10.0',
  ]);
  const [dataChart, setDataChart] = useState<any>();
  const chartType: ChartType = 'bar';

  let bookingCounter = [
    0, 0, 0, 0, 4, 6, 4, 7, 6, 6, 4, 3, 8, 2, 3, 4, 3, 1, 3, 2, 4, 5, 3, 5, 3,
    4,
  ];

  useEffect(() => {
    const colors = {
      purple: {
        default: 'rgba(149, 76, 233, 1)',
        half: 'rgba(149, 76, 233, 0.5)',
        quarter: 'rgba(149, 76, 233, 0.25)',
        zero: 'rgba(149, 76, 233, 0)',
      },
      indigo: {
        default: 'rgba(90, 217, 255, 1)',
        half: 'rgba(90, 217, 255, 0.5)',
        quarter: 'rgba(90, 217, 255, 0.25)',
        zero: 'rgba(90, 217, 255, 0)',
      },
    };
    const ctx = canvasEl.current.getContext('2d');
    const gradient1 = ctx.createLinearGradient(0, 16, 0, 600);
    const gradient2 = ctx.createLinearGradient(0, 16, 0, 600);
    gradient1.addColorStop(0, colors.purple.half);
    gradient1.addColorStop(0.65, colors.purple.quarter);
    gradient1.addColorStop(1, colors.purple.zero);
    gradient2.addColorStop(0, colors.indigo.half);
    gradient2.addColorStop(0.65, colors.indigo.quarter);
    gradient2.addColorStop(1, colors.indigo.zero);

    const data = {
      labels: chartLabels,
      datasets: [
        {
          backgroundColor: gradient1,
          label: 'Số lượng học sinh',
          data: bookingCounter,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
      ],
    };

    const config = {
      type: chartType,
      data: data,
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true,
          },
        },
      },
    };

    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  }, []);

  const dashboardCard = [
    {
      icon: <LayoutOutlined />,
      title: 'Lượt làm bài',
      value: '600',
    },
    {
      icon: <GlobalOutlined />,
      title: 'Học sinh làm bài',
      value: '70',
    },
    {
      icon: <ProjectOutlined />,
      title: 'Điểm trung bình',
      value: '7.4',
    },
    {
      icon: <ProjectOutlined />,
      title: 'Điểm trung bình',
      value: '7.4',
    },
  ];
  return (
    <div className={`min-h-[380px] overflow-x-auto w-full`}>
      {/* Topbar  */}
      <div className="mx-4 mt-3 grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 w-full xl:grid-cols-4 ">
        {/* Card  */}

        {dashboardCard.map((item, index) => (
          <div
            key={index}
            className=" col-span-1 px-4 py-3 rounded-lg bg-white  border border-gray-300 dark:border-gray-600  "
          >
            <div className="flex items-center">
              <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg ">
                {item.icon}
              </div>
              <div className="flex-shrink-0 ml-3">
                <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
                  {item.value}
                </span>
                <h3 className="text-base font-normal text-gray-500">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Card title="Phổ điểm">
        <canvas id="myChart" ref={canvasEl} height={80} />
      </Card>
    </div>
  );
}

// ('use client');
