import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import Zlogo from '../../public/zlogo.png';
import NavMenu from './_component/NavMenu';

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className='flex justify-center bg-white min-h-screen'>
      <div className='flex w-full max-w-[1500px] px-4'>
        {/* 275 + 990 */}
        <div className='w-1/5 max-w-[275px] flex-shrink-0 bg-orange-500'>
          <div className='fixed w-[inherit] h-screen flex flex-col'>
            <div className='fixed w-[inherit] h-screen bg-red-500'>
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
              <nav>
                <ul>
                  <NavMenu />
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className='flex-grow flex justify-between'>
          <main className='w-3/5 max-w-[600px] min-h-screen bg-cyan-500'>
            {children}
          </main>
          <div className='w-2/5 max-w-[350px] bg-green-500 ml-[2%]'>
            <form className='fixed h-10 w-[inherit] bg-blue-500 mt-2 mb-3 flex items-center'>
              <svg width={20} viewBox='0 0 24 24' aria-hidden='true'>
                <g>
                  <path d='M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z'></path>
                </g>
              </svg>
              <input type='search' />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
