'use client';

import { usePathname } from 'next/navigation';
import Trend from './Trend';

export default function TrendSection() {
  const pathname = usePathname();
  if (pathname === '/explore') return null;

  return (
    <div className='text-black'>
      <h2 className='text-xl font-bold'>Trends for you</h2>
      <Trend />
    </div>
  );
}
