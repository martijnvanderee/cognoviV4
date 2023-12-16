import React, { FunctionComponent } from "react";
//components
import { Layout } from "../components/layout";
import { HeadPost } from "../components/headPost";
import { LaatsteNieuws } from "../components/laatsteNieuws";
import { RandomBigPosts } from "../components/randomBigPosts";
import { PostTopicSection } from "../components/PostTopicSection";
import { SeoHeader } from "../components/seoHeader";

//functions
import { getPosts, getRandomPosts } from "../localFunctions/importPosts";
import {
  getFirstElement,
  removeFirstEement,
} from "../localFunctions/helperFunc";
//typescript
import { FullPost } from "../typescript";
//variables
import {
  AMOUNT_OF_POST_FRONTPAGE,
  AMOUNT_OF_RANDOM_POST_FRONTPAGE,
  LAATSTE_NIEUWS,
} from "../public/variables";

type HomeProps = {
  latestPosts: FullPost[];
  randomPosts: FullPost[];
  LatestNaturePost: FullPost[];
  LatestHumanPost: FullPost[];
  LatestHistoryPost: FullPost[];
  LatestQuirkyPost: FullPost[];
  LatestSpacePost: FullPost[];
  LatestTechPost: FullPost[];
};
const Home: FunctionComponent<HomeProps> = ({
  latestPosts,
  randomPosts,
  LatestNaturePost,
  LatestHumanPost,
  LatestHistoryPost,
  LatestQuirkyPost,
  LatestSpacePost,
  LatestTechPost,
}) => {
  return (
    <Layout>
      <SeoHeader subtitle="ScienceGeek brengt internationaal en binnenlands wetenschappelijk nieuws." />
      <main className="bg-white">
        <div>
          <div className="md:grid md:grid-cols-2 md:pt-10">
            {/* HeadPost */}
            <HeadPost data={getFirstElement(latestPosts)} />
            <div className="md:hidden h-2 w-full bg-almostWhite"></div>

            {/* laatste nieuws */}
            <LaatsteNieuws
              posts={removeFirstEement(latestPosts)}
              title={LAATSTE_NIEUWS.title}
              LinkNaarMeerPostsText={LAATSTE_NIEUWS.linkText}
              LinkNaarMeerPosts={LAATSTE_NIEUWS.link}
            />
          </div>

          <div className="bg-almostWhite h-1 w-full mt-8"></div>

          {/* random posts */}
          <RandomBigPosts posts={randomPosts} />
          <div className="bg-almostWhite h-1 w-full mt-8"></div>
          {/* latest nature posts */}
          <PostTopicSection posts={LatestNaturePost} title="Nature" />
          <div className="bg-almostWhite h-1 w-full mt-8"></div>
          <PostTopicSection posts={LatestHumanPost} title="Human" />
          <div className="bg-almostWhite h-1 w-full mt-8"></div>
          {/* <PostTopicSection posts={LatestHistoryPost} title="History" /> */}
          <PostTopicSection posts={LatestQuirkyPost} title="Quirky" />
          <div className="bg-almostWhite h-1 w-full mt-8"></div>
          <PostTopicSection posts={LatestSpacePost} title="Space" />
          <div className="bg-almostWhite h-1 w-full mt-8"></div>
          <PostTopicSection posts={LatestTechPost} title="Tech" />
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const latestPosts = await getPosts(AMOUNT_OF_POST_FRONTPAGE);
  const LatestNaturePost = await getPosts(3, "nature");
  const LatestHumanPost = await getPosts(3, "human");
  // const LatestHistoryPost = await getPosts(3, "History");
  const LatestQuirkyPost = await getPosts(3, "quirky");
  const LatestSpacePost = await getPosts(3, "space");
  const LatestTechPost = await getPosts(3, "tech");
  const randomPosts = await getRandomPosts(AMOUNT_OF_RANDOM_POST_FRONTPAGE);
  return {
    props: {
      latestPosts,
      randomPosts,
      LatestNaturePost,
      LatestHumanPost,
      LatestQuirkyPost,
      LatestSpacePost,
      LatestTechPost,
    },
  };
}

export default Home;
