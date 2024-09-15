import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ActionButtons from './ActionButtons';

dayjs.extend(relativeTime);
dayjs.locale('au');

export default function Post() {
  const target = {
    postId: 1,
    User: {
      id: 'elonmusk',
      nickname: 'Elon Musk',
      image: '/yRsRRjGO.jpg',
    },
    content: 'Doing Clone coding is so much fun!',
    createdAt: new Date(),
    Images: [] as any[],
  };
  return (
    <article className='border-b border-gray-200 px-4 py-2 transition-colors duration-300 hover:bg-gray-100'>
      <div className='flex items-start space-x-3'>
        <div className='flex-shrink-0'>
          <Link href={`/${target.User.id}`} className='relative'>
            <Image
              src={target.User.image}
              alt={target.User.nickname}
              width={40}
              height={40}
              className='rounded-full hover:opacity-80'
            />
            <div className='inline-block w-[40px] h-[40px] rounded-md absolute top-0 left-0' />
          </Link>
        </div>
      </div>
      <div className='flex flex-col'>
        <div className='flex items-center space-x-2'>
          <Link href={`/${target.User.id}`}>
            <span className='text-sm font-bold text-gray-900'>
              {target.User.nickname}
            </span>
            &nbsp;
            <span className='text-sm text-gray-500'>@{target.User.id}</span>
            &nbsp; . &nbsp;
          </Link>
          <span className='text-sm text-gray-500'>
            {dayjs(target.createdAt).fromNow()}
          </span>
        </div>
        <div className='text-sm text-gray-900'>{target.content}</div>
        <div className='flex flex-col'>
          {/* {target.Images.length > 0 && (
            <Image
              src={target.Images[0]?.link}
              alt={target.Images[0]?.link}
              width={400}
              height={400}
            />
          )} */}
        </div>
        <ActionButtons />
      </div>
    </article>
  );
}
