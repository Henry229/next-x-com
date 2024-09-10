'use client';

import Image from 'next/image';

export default function LogoutButton() {
  const me = {
    // 임시로 내 정보 있는것처럼
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg',
  };

  const onLogout = () => {};

  return (
    <button
      className='flex items-center space-x-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow transition duration-200 ease-in-out'
      onClick={onLogout}
    >
      <div className='w-10 h-10 rounded-full overflow-hidden'>
        <Image
          src={me.image}
          alt={me.nickname}
          width={40}
          height={40}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='flex flex-col items-start'>
        <div className='font-bold text-sm'>{me.nickname}</div>
        <div className='text-gray-500 text-xs'>@{me.id}</div>
      </div>
    </button>
  );
}
