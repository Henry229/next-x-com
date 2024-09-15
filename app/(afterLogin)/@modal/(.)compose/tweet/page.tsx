'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function ComposeTweetModal() {
  const [content, setContent] = useState('');
  const imageRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {};
  const onClickClose = () => {};
  const onClickButton = () => {};
  const onChangeContent = () => {};

  const me = {
    id: 'zerohch0',
    image: '/5Udwvqim.jpg',
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-start z-50'>
      <div className='bg-white w-[600px] rounded-2xl relative top-8 max-w-[90%]'>
        <div className='flex flex-col'>
          <div className='flex justify-between items-center p-4 border-b'>
            <button
              className='w-8 h-8 rounded-full hover:bg-gray-200 flex items-center justify-center'
              onClick={onClickClose}
            >
              <svg width={20} viewBox='0 0 24 24' aria-hidden='true'>
                <g>
                  <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
                </g>
              </svg>
            </button>
          </div>
          <form onSubmit={onSubmit} className='flex-1 p-4'>
            <div className='flex flex-col'>
              <Image
                src={me.image}
                alt='profile'
                width={40}
                height={40}
                className='rounded-full mr-4'
              />
              <textarea
                value={content}
                onChange={onChangeContent}
                placeholder='What is happening?'
                className='flex-1 resize-none overflow-hidden focus:outline-none text-xl min-h-[120px] mt-2'
              />
            </div>
            <div className='flex justify-between items-center mt-4'>
              <div className='flex space-x-2'>
                <button
                  type='button'
                  className='text-blue-500 hover:bg-blue-100 rounded-full p-2'
                >
                  <svg width={20} viewBox='0 0 24 24' aria-hidden='true'>
                    <g>
                      <path d='M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z'></path>
                    </g>
                  </svg>
                </button>
                <input type='file' ref={imageRef} className='hidden' />
              </div>
              <button
                type='submit'
                disabled={content.length === 0}
                className='bg-blue-500 text-white px-4 py-2 rounded-full font-bold disabled:opacity-50'
              >
                게시하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
