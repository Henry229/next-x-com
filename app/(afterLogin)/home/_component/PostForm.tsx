'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

export default function PostForm() {
  const imageFilesRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState('');

  const me = {
    id: 'zerohch0',
    image: '/5Udwvqim.jpg',
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleImageUpload = () => {
    imageFilesRef.current?.click();
  };

  return (
    <form className='border-b border-gray-200 px-4 py-2'>
      <div className='flex items-start space-x-3'>
        <div className='flex-shrink-0'>
          <Image
            src={me.image}
            alt={me.id}
            width={40}
            height={40}
            className='rounded-full'
          />
        </div>
        <div className='flex-grow'>
          <textarea
            value={content}
            onChange={handleContentChange}
            placeholder='무슨 일이 일어나고 있나요?'
            className='w-full h-24 resize-none border-none focus:ring-0 text-lg placeholder-gray-400'
          />
          <div className='flex justify-between items-center'>
            <div className='flex space-x-2'>
              <div>
                <input
                  type='file'
                  name='imageFiles'
                  multiple
                  hidden
                  ref={imageFilesRef}
                />
                <button
                  type='button'
                  onClick={handleImageUpload}
                  className='text-blue-400 hover:bg-blue-50 rounded-full p-2'
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <g>
                      <path
                        d='M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z'
                        fill='currentColor'
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
              {/* 여기에 다른 아이콘 버튼들을 추가할 수 있습니다 */}
            </div>
            <button
              disabled={!content}
              className={`bg-blue-500 text-white px-4 py-2 rounded-full font-bold hover:bg-blue-600 transition-colors ${
                !content && 'opacity-50 cursor-not-allowed'
              }`}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
