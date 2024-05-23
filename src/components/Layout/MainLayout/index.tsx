'use client';
import React, {useState} from 'react';
import {usePathname} from 'next/navigation';
import {
  AppstoreAddOutlined,
  BellFilled,
  CloseOutlined,
  MenuOutlined,
  SearchOutlined,
  SettingFilled,
  TranslationOutlined,
} from '@ant-design/icons';
import {IRoute} from '@/routes/listRoutes';
import Link from 'next/link';
import {MdArrowForwardIos} from 'react-icons/md';
import Image from 'next/image';
import Avatar from '@/components/Avatar';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import Dropdown from '@/components/Dropdown';
import {useSelector} from 'react-redux';
import {RootState} from '@/redux/store';

export default function MainLayout({
  children,
  listRoutes,
}: Readonly<{children: React.ReactNode; listRoutes: IRoute[]}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExtend, setIsExtend] = useState(true);
  const [isHover, setIsHover] = useState(false);
  const pathName = usePathname();
  const routesSegs = pathName.split('/');
  const user = useSelector((state: RootState) => state.user);

  function check(rootRoute: string[]): boolean {
    for (var i = 0; i < rootRoute.length; i++) {
      if (rootRoute[i] !== routesSegs[i + 1]) {
        return false;
      }
    }
    return true;
  }

  const openSidebar = () => {
    setIsOpen(!isOpen);
  };

  const extendSidebar = (a: boolean) => {
    setIsExtend(a);
  };

  return (
    <main className="bg-gray-50 min-h-[100vh] w-full dark:bg-gray-700">
      <nav className="fixed z-30 bg-white w-full border dark:bg-gray-800 dark:border-gray-700">
        <div className={'flex justify-between'}>
          <div className="flex items-center py-3 px-3 lg:px-5 lg:pl-3">
            {isOpen ? (
              <button
                className="p-2 mr-4 flex justify-center text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100"
                onClick={openSidebar}
              >
                <CloseOutlined
                  className={'flex justify-center items-center w-6 h-6'}
                />
              </button>
            ) : (
              <button
                className="p-2 mr-4 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100"
                onClick={openSidebar}
              >
                <MenuOutlined
                  className={'flex justify-center items-center w-6 h-6'}
                ></MenuOutlined>
              </button>
            )}
            <button
              className="hidden lg:inline p-2 mr-4 text-gray-600 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
              onClick={() => {
                extendSidebar(!isExtend);
              }}
            >
              <MenuOutlined
                className={'flex justify-center items-center text-xl w-6 h-6'}
              ></MenuOutlined>
            </button>
            <div
              className={`w-10 h-full flex justify-center items-center rounded-lg`}
            >
              <Image
                src="/logo.png"
                width={32}
                height={32}
                alt="eduhub"
              ></Image>
            </div>
            <div className="flex items-center">
              <MdArrowForwardIos className="ml-2"></MdArrowForwardIos>
              <h1 className="text-xl font-semibold ml-2">
                {listRoutes.find((route) => check(route.rootRoute))?.titlePage}
              </h1>
            </div>
          </div>
          <div className={'flex items-center pr-3 lg:pr-5'}>
            <div className="flex items-center">
              <ToggleThemeButton></ToggleThemeButton>
              <button className="p-2 mr-2 text-gray-500 rounded-2xl hover:text-gray-900 hover:bg-gray-100">
                <BellFilled></BellFilled>
              </button>
              <Dropdown
                menu={[
                  {
                    key: 1,
                    label: (
                      <Link
                        href={'/profile'}
                      >{`${user?.lastName} ${user?.firstName}`}</Link>
                    ),
                  },
                  {
                    key: 2,
                    label: <Link href={'/logout'}>Đăng xuất</Link>,
                  },
                ]}
              >
                <Avatar />
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex pt-16 h-full">
        <aside
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`flex fixed top-0 left-0 z-20 flex-col flex-shrink-0 bg-white border pt-16 w-64 h-full duration-200 lg:flex transition-width dark:bg-gray-800 dark:border-gray-700 ${
            isOpen ? '' : 'hidden'
          } ${isExtend || isHover ? 'lg:w-64' : 'lg:w-20'}`}
        >
          <div
            className={
              'flex flex-col flex-1 bg-gray-50 px-2 pt-6 dark:bg-gray-800 dark:border-gray-700'
            }
          >
            <ul>
              {listRoutes.map((item, index) => (
                <li className="" key={index}>
                  <Link href={item.path} onClick={openSidebar}>
                    <div
                      className={`flex items-center py-2.5 px-4 text-dark-500 rounded-lg transition-all duration-200 ${
                        check(item.rootRoute) && (isExtend || isHover)
                          ? 'bg-white shadow-lg shadow-gray-200 dark:text-white dark:bg-gray-700 dark:shadow-gray-900'
                          : 'hover:bg-gray-200 dark:text-white dark:hover:bg-gray-900 dark:hover:shadow-gray-900'
                      }`}
                    >
                      <div
                        className={`flex items-center justify-center shadow-md shadow-gray-300 text-dark-700 w-8 h-8 p-2.5 mr-1 rounded-lg ${
                          check(item.rootRoute)
                            ? 'bg-gradient-to-br from-primary-500 to-blue-500 dark:to-blue-700 text-white dark:text-white dark:bg-gray-700 dark:shadow-gray-900'
                            : 'dark:bg-gray-600 dark:shadow-gray-900 dark:text-white'
                        }`}
                      >
                        {item.icon}
                      </div>
                      <span
                        className={`ml-3 text-dark-500 text-sm font-light transition-all whitespace-nowrap duration-200 dark:text-gray-50 dark:hover:text-white ${
                          isExtend || isHover ? '' : 'lg:hidden'
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`${
              isExtend || isHover ? '' : 'hidden'
            } absolute bottom-0 left-0 right-0`}
          >
            <div className="px-6 py-6 flex justify-center gap-6 ">
              <Link href={'/'} className="">
                <AppstoreAddOutlined className="text-xl text-gray-400"></AppstoreAddOutlined>
              </Link>
              <Link href={'/'} className="">
                <SettingFilled className="text-xl text-gray-400"></SettingFilled>
              </Link>
              <Link href={'/'} className="">
                <TranslationOutlined className="text-xl text-gray-400"></TranslationOutlined>
              </Link>
            </div>
          </div>
        </aside>
        <div
          className={`fixed inset-0 z-10 bg-gray-900 opacity-50 lg:hidden ${
            isOpen ? '' : 'hidden'
          }`}
          onClick={openSidebar}
        ></div>
        <div
          className={`content h-full w-full overflow-y-auto  ${
            isExtend || isHover ? 'lg:ml-64' : 'lg:ml-20'
          }`}
        >
          {children}
          {/* <Footer></Footer> */}
        </div>
      </div>
    </main>
  );
}
