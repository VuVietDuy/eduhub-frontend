import React from 'react';

interface IProps {
    dataSource: Object[];
    columns: {
        title: string;
        dataIndex: string;
        key: string;
        render?: (data: any) => React.ReactNode;
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
                                key={column.key}
                                scope="col"
                                className="px-6 py-3"
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
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            {columns.map((column) => (
                                <td key={column.key} className="px-6 py-4">
                                    {/* {column.render ? column.render(dataItem[column.dataIndex]) : dataItem[column.dataIndex]} */}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}