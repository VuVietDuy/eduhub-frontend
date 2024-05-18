import React from 'react';

interface IProps {
  content: string;
  onRemove?: () => void;
}
export default function Chips(props: IProps) {
  const {content, onRemove} = props;

  return (
    <div>
      <span
        id="badge-dismiss-dark"
        className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-gray-600 bg-blue-100  rounded dark:bg-gray-700 dark:text-gray-300"
      >
        {content}
        <button
          onClick={onRemove}
          type="button"
          className="inline-flex items-center p-1 ms-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300"
          data-dismiss-target="#badge-dismiss-dark"
          aria-label="Remove"
        >
          <svg
            className="w-2 h-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Remove badge</span>
        </button>
      </span>
    </div>
  );
}
