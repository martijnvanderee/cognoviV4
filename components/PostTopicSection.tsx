import React, { FunctionComponent } from "react";
//components
import { PostItem2 } from "../components/postItem";
//typescript
import { FullPost } from "../typescript";
import { RANDOM_BIG_POSTS } from "../public/variables";

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
    </div>
  );
};
