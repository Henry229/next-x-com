'use client';

import { usePathname } from 'next/navigation';
import SearchForm from './SearchForm';

export default function RightSeachZone() {
  const pathname = usePathname();
  const onChangeAll = () => {};
  const onChangeFollow = () => {};

  if (pathname === '/explore') return null;

  if (pathname === '/search') {
    return (
      <div className='text-black mt-4'>
        <h5 className='text-lg font-bold border border-gray-200 rounded-lg  p-2 px-4'>
          Search Filter
        </h5>
        <div className='mt-4 border border-gray-200 rounded-lg p-4'>
          <div className='flex flex-col justify-start space-y-1'>
            <label className='text-sm font-bold'>User</label>
            <div className='flex items-center justify-between space-x-2'>
              <div>All Users</div>
              <input
                type='radio'
                name='pf'
                defaultChecked
                onChange={onChangeAll}
              />
            </div>
            <div className='flex items-center justify-between space-x-2'>
              <div>People you follow</div>
              <input type='radio' name='pf' onChange={onChangeFollow} />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <SearchForm />;
}
