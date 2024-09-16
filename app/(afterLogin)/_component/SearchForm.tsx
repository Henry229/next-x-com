'use client';

import { useRouter } from 'next/navigation';
import { FormEvent, useRef } from 'react';

interface SearchFormProps {
  q: string;
}

export default function SearchForm({ q }: SearchFormProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      const searchQuery = inputRef.current.value;
      if (searchQuery.trim()) {
        router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      }
    }
  };

  return (
    <form className='h-full' onSubmit={onSubmit}>
      <div className='relative h-full flex items-center'>
        <input
          ref={inputRef}
          type='search'
          className='w-full h-9 bg-gray-100 rounded-full pl-12 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
          placeholder='Search'
          defaultValue={q}
        />
        <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
          <svg
            width={20}
            viewBox='0 0 24 24'
            aria-hidden='true'
            className='text-gray-500'
          >
            <g>
              <path d='M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z'></path>
            </g>
          </svg>
        </div>
      </div>
    </form>
  );
}
