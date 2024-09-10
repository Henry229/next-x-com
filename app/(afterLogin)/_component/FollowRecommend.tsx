'use client';

import Image from 'next/image';
import { useState } from 'react';

const generateRandomUser = (id: number) => ({
  id,
  name: `사용자${id}`,
  username: `user${id}`,
  image: `https://randomuser.me/api/portraits/men/${id}.jpg`,
});

const users = Array.from({ length: 3 }, (_, i) => generateRandomUser(i + 1));

export default function FollowRecommend() {
  const [followList, setFollowList] = useState<number[]>([]);

  const onFollow = (id: number) => {
    setFollowList((prev) =>
      prev.includes(id) ? prev.filter((userId) => userId !== id) : [...prev, id]
    );
  };

  return (
    <div className='p-4 bg-gray-100 rounded-xl'>
      <h2 className='text-xl text-black font-bold mb-4'>팔로우 추천</h2>
      {users.map((user) => (
        <div key={user.id} className='flex items-center justify-between mb-4'>
          <div className='flex items-center'>
            <Image
              src={user.image}
              alt={user.name}
              width={40}
              height={40}
              className='rounded-full mr-3'
            />
            <div>
              <div className='font-bold text-black'>{user.name}</div>
              <div className='text-gray-500'>@{user.username}</div>
            </div>
          </div>
          <button
            onClick={() => onFollow(user.id)}
            className={`px-4 py-2 rounded-full text-sm font-bold ${
              followList.includes(user.id)
                ? 'bg-white text-black border border-gray-300'
                : 'bg-black text-white'
            }`}
          >
            {followList.includes(user.id) ? 'following' : 'follow'}
          </button>
        </div>
      ))}
    </div>
  );
}
