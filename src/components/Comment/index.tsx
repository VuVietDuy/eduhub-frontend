import {SendOutlined} from '@ant-design/icons';
import React from 'react';

export default function Comment() {
  return (
    <div className="flex gap-2 mb-4">
      <textarea
        id="comment"
        rows={3}
        className=" py-4 px-6 bg-white rounded-lg rounded-t-lg  border  dark:border-gray-700 w-full text-sm text-gray-900 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
        placeholder="Write a comment..."
        required
      ></textarea>
      <div>
        <button className="px-3 py-2 hover:bg-gray-200 rounded-lg">
          <SendOutlined />
        </button>
      </div>
    </div>
  );
}
