import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import Zlogo from '../../public/zlogo.png';
import NavMenu from './_component/NavMenu';
import LogoutButton from './_component/LogoutButton';
import TrendSection from './_component/TrendSection';
import FollowRecommend from './_component/FollowRecommend';
import RightSearchZone from './_component/RightSearchZone';

export default function AfterLoginLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
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
        <main className='flex-grow min-w-0 w-[600px] border-x border-gray-200 text-black relative '>
          {children}
        </main>
        {/* 오른쪽 사이드바 */}
        <div className='w-[350px] flex-shrink-0 ml-[2%]'>
          <RightSearchZone />
          <div className='mt-16 bg-white rounded-lg shadow'>
            <TrendSection />
            <div className='mt-4'>
              <FollowRecommend />
            </div>
          </div>
        </div>
      </div>
      {modal}
    </div>
  );
}
