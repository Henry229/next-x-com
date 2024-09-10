import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import Zlogo from '../../public/zlogo.png';
import NavMenu from './_component/NavMenu';
import LogoutButton from './_component/LogoutButton';
import TrendSection from './_component/TrendSection';
import FollowRecommend from './_component/FollowRecommend';

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='flex justify-center bg-white min-h-screen'>
      <div className='flex w-full max-w-[1500px] mx-auto px-8'>
        {/* 왼쪽 사이드바 */}
        <div className='w-[275px] flex-shrink-0'>
          <div className='fixed w-[275px] h-screen flex flex-col'>
            <div className='fixed w-[inherit] h-screen bg-red-500 flex flex-col'>
              <Link href='/home'>
                <div className='flex w-14 h-14 mt-1 justify-center items-center hover:bg-gray-200 rounded-full p-2'>
                  <Image
                    src={Zlogo}
                    alt='logo'
                    width={40}
                    height={40}
                    className='inline-block'
                  />
                </div>
              </Link>
              <nav className='flex-1'>
                <ul>
                  <NavMenu />
                </ul>
                <Link
                  href='/compose/tweet'
                  className='w-full flex justify-center'
                >
                  <div className='w-11/12 py-3 bg-blue-500 text-white text-center font-bold rounded-full hover:bg-blue-600 transition-colors'>
                    Post
                  </div>
                </Link>
              </nav>
              <LogoutButton />
            </div>
          </div>
        </div>
        {/* 메인 컨텐츠 */}
        <main className='flex-grow min-w-0 bg-cyan-500'>{children}</main>
        {/* 오른쪽 사이드바 */}
        <div className='w-[350px] flex-shrink-0 ml-[2%]'>
          <div className='fixed w-[350px]'>
            <form className='h-12 w-full mt-2 mb-3 flex items-center p-2'>
              <div className='h-full w-full flex items-center bg-gray-100 rounded-full'>
                <svg
                  width={20}
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  className='ml-4 text-gray-500'
                >
                  <g>
                    <path d='M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z'></path>
                  </g>
                </svg>
                <input
                  type='search'
                  className='w-full py-2 pl-2 pr-4 bg-transparent text-gray-700'
                  placeholder='Search'
                />
              </div>
            </form>
          </div>
          <div className='mt-16 bg-white rounded-lg shadow'>
            <TrendSection />
            <div className='mt-4'>
              <FollowRecommend />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
