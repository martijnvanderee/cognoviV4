import React, { FunctionComponent } from 'react';
import Link from 'next/link';
//components
import { PostItem } from '../components/postItem';
//typescript
import { FullPost } from '../typescript';

type LaatsteNieuwsProps = {
  posts: FullPost[];
  title: string;
  LinkNaarMeerPostsText: string;
  LinkNaarMeerPosts: string;
};

export const LaatsteNieuws: FunctionComponent<LaatsteNieuwsProps> = ({
  posts,
  title,
  LinkNaarMeerPostsText,
  LinkNaarMeerPosts,
}) => {
  return (
    <div className="mb-10 md:mb-0">
      <div className="md:h-96 md:overflow-auto">
        <div className="sticky md:static top-72 z-10 border-b-2 border-yellow p-3 md:mx-4 md:pt-0">
          <h1 className="text-center text-2xl text-black font-bold md:text-2xl ">
            {title}
          </h1>
        </div>

        <div className="flex flex-wrap overflow-hidden my-4 sm:mx-4">
          {posts.map((post: FullPost, index: number) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
      </div>

      <Link
        href={LinkNaarMeerPosts}
        className="focus-visible:bg-violet-700 underline"
      >
        <div className="text-2xl md:text-2xl font-semibold leading-tight text-grey hover:text-gray-700 ml-4 cursor-pointer">
          {LinkNaarMeerPostsText}
          <span className="text-2xl md:text-xl font-semibold leading-tight text-purple"></span>
        </div>
      </Link>
    </div>
  );
};
