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
export default function page() {
  const canvasEl = useRef<any>();
  const [chartLabels, setChartLabels] = useState<any>([
    '0.0',
    '0.2',
    '0.4',
    '0.6',
    '0.8',
    '1.0',
    '1.2',
    '1.4',
    '1.6',
    '1.8',
    '2.0',
    '2.2',
    '2.4',
    '2.6',
    '2.8',
    '3.0',
    '3.2',
    '3.4',
    '3.6',
    '3.8',
    '4.0',
    '4.2',
    '4.4',
    '4.6',
    '4.8',
    '5.0',
    '5.2',
    '5.4',
    '5.6',
    '5.8',
    '6.0',
    '6.2',
    '6.4',
    '6.6',
    '6.8',
    '7.0',
    '7.2',
    '7.4',
    '7.6',
    '7.8',
    '8.0',
    '8.2',
    '8.4',
    '8.6',
    '8.8',
    '9.0',
    '9.2',
    '9.4',
    '9.6',
    '9.8',
    '10.0',
  ]);
  const [dataChart, setDataChart] = useState<any>();
  const chartType: ChartType = 'bar';

  let bookingCounter = [
    0, 0, 0, 0, 0, 0, 0, 0, 4, 6, 4, 7, 6, 6, 4, 3, 8, 2, 3, 4, 3, 1, 3, 2, 4,
    5, 3, 5, 3, 4,
  ];

  let bookingSalesInMonth = [
    1, 2, 2, 5, 4, 7, 5, 4, 5, 5, 6, 6, 6, 7, 4, 4, 6, 2, 4, 3, 3, 2, 1, 2, 4,
    4, 4, 6, 3, 3,
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

  return (
    <div className={`min-h-[380px] overflow-x-hidden`}>
      {/* Topbar  */}
      <div className="mt-3 grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4">
        {/* Card  */}
        <div className="bg-white shadow-lg border border-gray-300 dark:border-gray-600 shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 ">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <ProjectOutlined />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
                600
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Lượt làm bài
              </h3>
            </div>
          </div>
        </div>
        {/* Card  */}

        <div className="bg-white shadow-lg border border-gray-300 dark:border-gray-600 shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <LayoutOutlined />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
                70
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Học sinh làm bài
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 dark:border-gray-600 shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <GlobalOutlined />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
                70
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Học sinh làm bài
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-lg border border-gray-300 dark:border-gray-600 shadow-gray-200 rounded-2xl p-4 dark:text-white dark:bg-gray-800 ">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <ProjectOutlined />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
                7.2
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Điểm trung bình
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Card title="Phổ điểm">
        <canvas id="myChart" ref={canvasEl} height={80} />
      </Card>
    </div>
  );
}

// ('use client');
