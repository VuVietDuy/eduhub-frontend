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

export default function Dashboard(): JSX.Element {
  const canvasEl = useRef<any>();
  const [chartLabels, setChartLabels] = useState<any>([
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
  ]);
  const [dataChart, setDataChart] = useState<any>();
  const chartType: ChartType = 'bar';

  let bookingCounter = [
    1, 2, 2, 5, 4, 7, 5, 4, 4, 6, 4, 7, 6, 6, 4, 3, 8, 2, 3, 4, 3, 6, 3, 2, 4,
    5, 3, 5, 3, 4,
  ];

  let bookingSalesInMonth = [
    1, 2, 2, 5, 4, 7, 5, 4, 5, 5, 6, 6, 6, 7, 4, 4, 6, 2, 4, 3, 3, 2, 6, 2, 4,
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
          label: 'Lường bài làm: lượt',
          data: bookingCounter,
          fill: true,
          borderWidth: 2,
          borderColor: colors.purple.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.purple.default,
          pointRadius: 3,
        },
        {
          backgroundColor: gradient2,
          label: 'Lượng truy cập: lượt',
          data: bookingSalesInMonth,
          fill: true,
          borderWidth: 2,
          borderColor: colors.indigo.default,
          lineTension: 0.2,
          pointBackgroundColor: colors.indigo.default,
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
  }, [dataChart]);

  return (
    <div className="m-6">
      <div className="grid grid-cols-1 gap-6 mb-6 w-full xl:grid-cols-2 2xl:grid-cols-4">
        <div className="bg-white shadow-lg shadow-gray-200 rounded-[8px] p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <ProjectOutlined />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
                600
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Số lượng học sinh
              </h3>
            </div>
            <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
              <ProjectOutlined />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-gray-200 rounded-[8px] p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <LayoutOutlined />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
                50
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Số lượng giáo viên
              </h3>
            </div>
            <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
              <LayoutOutlined />
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-gray-200 rounded-[8px] p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <GlobalOutlined />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
                62
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Lượng đang truy cập
              </h3>
            </div>
            <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
              +2%
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg shadow-gray-200 rounded-[8px] p-4 dark:text-white dark:bg-gray-800 dark:shadow-gray-900">
          <div className="flex items-center">
            <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-primary-500 to-blue-500 rounded-lg shadow-md shadow-gray-300 dark:shadow-gray-900">
              <BarChartOutlined />
            </div>
            <div className="flex-shrink-0 ml-3">
              <span className="text-2xl font-bold leading-none text-gray-900 dark:text-gray-100">
                1,430
              </span>
              <h3 className="text-base font-normal text-gray-500">
                Tổng lượng truy cập tháng này
              </h3>
            </div>
            <div className="flex flex-1 justify-end items-center ml-5 w-0 text-base font-bold text-green-500">
              +5.34%
            </div>
          </div>
        </div>
      </div>
      <Card title="Lượng truy cập">
        <canvas id="myChart" ref={canvasEl} height={80} />
      </Card>
    </div>
  );
}
