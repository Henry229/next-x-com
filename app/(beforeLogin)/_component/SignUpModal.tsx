'use client';

import { useState } from 'react';

export default function SignUpModal() {
  const [id, setID] = useState();
  const [password, setPassword] = useState();
  const [nickname, setNickname] = useState();
  const [image, setImage] = useState();
  const [message, setMessage] = useState();

  const onSubmit = () => {};

  const onClickClose = () => {};

  const onChangeId = () => {};

  const onChangeNickname = () => {};

  const onChangePassword = () => {};

  const onChangeImage = () => {};

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <div className='bg-white text-black rounded-lg w-96 p-6'>
        <div className='flex justify-between items-center mb-4'>
          <button
            onClick={onClickClose}
            className='text-gray-500 hover:text-gray-700'
          >
            <svg
              width={24}
              viewBox='0 0 24 24'
              aria-hidden='true'
              className='r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03'
            >
              <g>
                <path d='M10.59 12L4.54 5.96l1.42-1.42L12 10.59l6.04-6.05 1.42 1.42L13.41 12l6.05 6.04-1.42 1.42L12 13.41l-6.04 6.05-1.42-1.42L10.59 12z'></path>
              </g>
            </svg>
          </button>
          <div className='text-black text-xl font-bold mx-auto'>SignUp</div>
          <div className='w-6'></div>
        </div>
        <form onSubmit={onSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <div>
              <label
                className='block text-sm font-medium text-gray-700'
                htmlFor='id'
              >
                ID
              </label>
              <input
                id='id'
                className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                value={id}
                onChange={onChangeId}
                type='text'
                placeholder=''
              />
            </div>
            <div>
              <label
                className='block text-sm font-medium text-gray-700'
                htmlFor='name'
              >
                NickName
              </label>
              <input
                id='name'
                className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                value={nickname}
                onChange={onChangeNickname}
                type='text'
                placeholder=''
              />
            </div>
            <div>
              <label
                className='block text-sm font-medium text-gray-700'
                htmlFor='password'
              >
                Password
              </label>
              <input
                id='password'
                className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                value={password}
                onChange={onChangePassword}
                type='password'
                placeholder=''
              />
            </div>
            <div>
              <label
                className='block text-sm font-medium text-gray-700'
                htmlFor='image'
              >
                Profile
              </label>
              <input
                id='image'
                className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                value={image}
                onChange={onChangeImage}
                type='file'
                accept='image/*'
                placeholder=''
              />
            </div>
          </div>
          <div className='text-red-500 text-sm'>{message}</div>
          <div>
            <button
              className='w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={!id && !password}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
