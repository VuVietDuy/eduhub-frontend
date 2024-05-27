import {
  CloseOutlined,
  ExclamationCircleFilled,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import React, {useEffect, useRef, useState} from 'react';

interface IProps {
  children?: React.ReactNode;
  open: boolean | undefined;
  onOk?: () => void;
  onCancel: () => void;
  width?: string | '';
  height?: string | '';
  className?: string;
  okButton?: string;
  cancelButton?: string;
  message?: string;
}

export default function ModalConfirm(props: IProps) {
  const {
    children,
    open,
    onOk,
    onCancel,
    width,
    height,
    cancelButton,
    okButton,
    className,
    message,
  } = props;
  const modalBoxRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      modalBoxRef.current &&
      !modalBoxRef.current.contains(event.target as Node)
    ) {
      onCancel();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div
      className={`${
        open ? '' : 'hidden'
      } overflow-y-auto overflow-x-hidden bg-darkOverlay fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%)] max-h-full`}
    >
      <div className="absolute left-[50%] translate-x-[-50%] top-[50%]  overflow-y-hidden translate-y-[-50%] p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={onCancel}
          >
            <CloseOutlined></CloseOutlined>
          </button>
          <div className="p-4 md:p-5 text-center">
            <ExclamationCircleOutlined
              className="mx-auto mb-4 text-gray-400 text-[50px]
                dark:text-gray-200"
            ></ExclamationCircleOutlined>
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {message}
            </h3>
            <button
              onClick={onOk}
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
            >
              Xác nhận
            </button>
            <button
              onClick={onCancel}
              type="button"
              className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Huỷ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
