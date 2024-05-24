import {CloseOutlined} from '@ant-design/icons';
import React, {useEffect, useRef, useState} from 'react';

interface IProps {
  children?: React.ReactNode;
  title?: string;
  open: boolean | undefined;
  onOk?: () => void;
  onCancel: () => void;
  width?: string | '';
  height?: string | '';
  className?: string;
}

export default function Modal(props: IProps) {
  const {children, title, open, onOk, onCancel, width, height, className} =
    props;
  const modalRef = useRef<HTMLDivElement>(null);
  const modalBoxRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    <>
      {open ? (
        <div className=" bg-darkOverlay overflow-y-hidden overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-50 justify-center items-center w-full md:inset-0  max-h-full">
          <div
            className={`${className} absolute left-[50%] translate-x-[-50%] top-[50%]  overflow-y-hidden translate-y-[-50%] p-4 max-h-full ${
              width !== '' ? `${width} ` : 'w-full h-full'
            } `}
          >
            <div className="relative bg-white rounded-sm shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-2 md:p-3 border-b rounded-t dark:border-gray-600">
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
              <div
                className={`p-4 md:p-5 space-y-4  max-h-[calc(100vh-100px)] overflow-y-auto`}
              >
                {children}
              </div>
              <div>
                <div className="flex items-center justify-end p-2 md:p-3 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={onCancel}
                    type="button"
                    className="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onCancel}
                    data-modal-hide="default-modal"
                    type="button"
                    className="text-white  ms-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Ok
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
