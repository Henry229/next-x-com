'use client';

import { useState } from 'react';

export default function Tab() {
  const [tab, setTab] = useState<'recommend' | 'following'>('recommend');
  return (
    <div className='sticky top-0 z-10 bg-white/50 backdrop-blur-md border-b border-gray-200'>
      <div className='text-xl font-bold py-3 px-4'>Home</div>
      <div className='flex text-gray-500 justify-center items-center gap-10 mb-4'>
        {['recommend', 'following'].map((tabName) => (
          <div
            key={tabName}
            className={`cursor-pointer px-4 py-2  ${
              tab === tabName ? 'font-semibold border-b-2 border-blue-500' : ''
            }`}
            onClick={() => setTab(tabName as 'recommend' | 'following')}
          >
            {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
          </div>
        ))}
      </div>
    </div>
  );
}
