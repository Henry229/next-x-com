'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function Tab() {
  const [current, setCurrent] = useState<'hot' | 'new'>('hot');
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickHot = () => {
    setCurrent('hot');
    router.replace(`/search?${searchParams.get('q')}`);
  };

  const onClickNew = () => {
    setCurrent('new');
    router.replace(`/search?${searchParams.toString()}&f=live`);
  };

  return (
    <div className='flex border-b border-gray-200'>
      <div
        onClick={onClickHot}
        className={`flex-1 text-center py-3 text-sm font-medium cursor-pointer ${
          current === 'hot'
            ? 'text-black border-b-2 border-blue-500'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        Hot
      </div>
      <div
        onClick={onClickNew}
        className={`flex-1 text-center py-3 text-sm font-medium cursor-pointer ${
          current === 'new'
            ? 'text-black border-b-2 border-blue-500'
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        New
      </div>
    </div>
  );
}
