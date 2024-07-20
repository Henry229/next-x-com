import React from 'react';
import zLogo from '/public/zlogo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function MainPage() {
  return (
    <div className='flex bg-black-900 h-screen'>
      <div className='flex-1 flex items-center justify-center'>
        <Image src={zLogo} alt='logo' className='w-3/4 max-w-md' />
      </div>
      <div className='flex-1 flex flex-col justify-center px-8'>
        <h1 className='text-5xl font-bold mb-12'>What&apos;s happend now</h1>
        <h2 className='text-3xl font-bold mb-8'>Join now</h2>
        <Link
          href='/i/flow/signup'
          className='bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-8 text-center w-72 hover:opacity-80 hover:text-white transition-all'
        >
          SignUp
        </Link>
        <h3 className='mb-4'>Already have an account?</h3>
        <Link
          href='/login'
          className='border border-gray-600 text-blue-600 font-bold py-2 px-4 rounded-full text-center w-72 hover:opacity-80 hover:bg-sky-100 transition-all'
        >
          Login
        </Link>
      </div>
    </div>
  );
}
