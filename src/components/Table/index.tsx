import React from 'react';

interface DataItem {
  [key: string]: string | number;
}

interface IProps {
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
  const {dataSource, columns} = props;
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
        <tbody>
          {dataSource.map((dataItem, index) => (
            <tr
              key={index}
              className="bg-white border-b hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-600 dark:border-gray-700"
            >
              {columns.map((column) => (
                <td key={column.key} className="px-6 py-4">
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
