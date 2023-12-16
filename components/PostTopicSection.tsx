import React, { FunctionComponent } from "react";
//components
import { PostItem2 } from "../components/postItem";
//typescript
import { FullPost } from "../typescript";
import { RANDOM_BIG_POSTS } from "../public/variables";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

type RandomProps = {
  posts: FullPost[];
  title: string;
};

export const PostTopicSection: FunctionComponent<RandomProps> = ({
  posts,
  title,
}) => {
  return (
    <div>
      <div className="text-2xl mt-10 ml-4 font-bold text-black">
        <h2 className="inline border-b-2 border-almostWhite text-3xl">
          {title}
        </h2>
      </div>

      <div className="hidde md:grid  md:grid-cols-3 pb-10 mt-2">
        {posts.map((post: FullPost, id: number) => (
          <PostItem2 post={post} key={id} />
        ))}
      </div>

      <div className="flex justify-end mr-4">
        <Link href={`/${title.toLocaleLowerCase()}`}>
          <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border-b-2 border-gray-100 flex shadow items-center">
            <span className="mr-2 text-2xl">Meer {title}</span>
            <FaArrowRightLong size={20} />
          </button>
        </Link>
      </div>
    </div>
  );
};
