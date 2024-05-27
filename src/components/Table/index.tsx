import React from 'react';

interface DataItem {
  [key: string]: string | number | string[] | any;
}

interface IProps {
  className?: string;
  dataSource: DataItem[];
  columns: {
    title: string;
    dataIndex: string;
    key: string;
    width?: string;
    render?: (data: DataItem) => React.ReactNode;
  }[];
}

export default function Table(props: IProps) {
  const {dataSource, columns, className} = props;
  return (
    <div className="relative overflow-x-auto">
      <table
        className={` ${className} w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-200`}
      >
        <thead
          className={` text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400`}
        >
          <tr>
            {columns.map((column, index) => (
              <th
                key={column.key || index}
                scope="col"
                className={`px-6 py-3`}
                style={{width: column.width}}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={``}>
          {dataSource?.map((dataItem, index) => (
            <tr
              key={index}
              className="bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-700"
            >
              {columns.map((column) => (
                <td
                  onClick={(e) => console.log(e.target)}
                  key={column.key}
                  className="px-6 py-4"
                >
                  {column.render
                    ? column.render(dataItem)
                    : dataItem[column.dataIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
