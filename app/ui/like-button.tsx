'use client';

import { incrementLike } from '@/app/lib/actions';
import { useState } from 'react';

export default function LikeButton({ initialLikes }: { initialLikes: number }) {
  const [likes, setLikes] = useState(initialLikes);

  return (
    <>
      <p>Total Likes: {likes}</p>
      <button
        className="rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-green-700"
        onClick={async () => {
          const updatedLikes = await incrementLike(likes);
          setLikes(updatedLikes);
        }}
      >
        Like
      </button>
      <button
        className="hover:bg-black-700 rounded bg-red-500 px-4 py-2 font-bold"
        onClick={() => setLikes(likes > 0 ? likes - 1 : 0)}
      >
        Dislike
      </button>
    </>
  );
}
