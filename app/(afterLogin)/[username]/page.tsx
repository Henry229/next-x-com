import Image from 'next/image';
import BackButtons from '../_component/BackButtons';
import Post from '../_component/Post';

export default function UserNamePage() {
  const user = {
    id: 'zerohch0',
    nickname: '제로초',
    image: '/5Udwvqim.jpg',
  };
  return (
    <main className='flex flex-col w-full border border-gray-200'>
      <div className='flex h-[53px] items-center'>
        <BackButtons />
        <h3 className='text-2xl font-bold ml-5'>{user.nickname}</h3>
      </div>
      <div className='flex items-center border-b border-gray-200 px-4 py-3'>
        <div className='flex items-center'>
          <Image
            src={user.image}
            alt='user'
            width={80}
            height={80}
            className='rounded-full mr-3'
          />
          <div>
            <p className='text-2xl font-bold'>{user.nickname}</p>
            <p className='text-gray-500'>{user.id}</p>
          </div>
        </div>
        <button className='bg-blue-500 text-white px-4 py-2 rounded-md ml-auto'>
          Follow
        </button>
      </div>
      <div className='flex flex-col'>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
