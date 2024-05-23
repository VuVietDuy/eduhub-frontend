import {CloseOutlined} from '@ant-design/icons';
import React from 'react';

interface IProps {
  children?: React.ReactNode;
  title?: React.ReactNode;
  open: boolean | undefined;
  onOk?: () => void;
  onCancel?: () => void;
  width?: string | '';
  className?: string;
  footer?: React.ReactNode[];
}

export default function ModalFullScreen(props: IProps) {
  const {children, title, open, onOk, onCancel, width, className, footer} =
    props;
  return (
    <>
      {open ? (
        <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center bg-white">
          <div className="bg-white flex flex-col h-full shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center">
                {title}
              </h3>
              <button
                onClick={onCancel}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <CloseOutlined />
                <span className="sr-only text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                  Close modal
                </span>
              </button>
            </div>
            <div className="w-full h-[100%]">{children}</div>
            {footer ? (
              <>{footer?.map((item, index) => item)}</>
            ) : (
              <>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={onCancel}
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Ok
                  </button>
                  <button
                    onClick={onCancel}
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
