import React from 'react';

export default function SearchInput() {
  return (
    <div>
      <div className="group relative flex min-h-10">
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          className="pointer-events-none absolute left-4 top-0 h-full w-5 fill-slate-400 dark:fill-slate-500"
        >
          <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z"></path>
        </svg>
        <input
          data-autofocus="true"
          className="flex-auto border border-gray-300 rounded appearance-none bg-transparent pl-12 text-slate-900 outline-none placeholder:text-slate-400 focus:flex-none sm:text-sm dark:text-white pr-4"
          placeholder="Tìm kiếm..."
          type="search"
          value=""
        />
      </div>
    </div>
  );
}
