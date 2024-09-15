'use client';

import { usePathname } from 'next/navigation';

export default function TrendSection() {
  const pathname = usePathname();
  if (pathname === '/explore') return null;
  const trends = Array.from({ length: 10 }, (_, i) => ({
    trendName: `트렌드 ${i + 1}`,
    posts: Math.floor(Math.random() * 10000) + 1,
  }));

  return (
    <div className='text-black'>
      <h2 className='text-xl font-bold'>Trends for you</h2>
      <div className='p-2'>
        {trends.map((trend, index) => (
          <div key={index} className='mt-4'>
            <p>Real time Trend</p>
            <span className='font-bold'>{trend.trendName}</span>
            <p>{trend.posts.toLocaleString()} posts</p>
          </div>
        ))}
      </div>
    </div>
  );
}
