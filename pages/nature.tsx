import React, { FunctionComponent } from "react";
//components
import { Layout } from "../components/layout";
import { HeadPost } from "../components/headPost";
import { LaatsteNieuws } from "../components/laatsteNieuws";
import { RandomBigPosts } from "../components/randomBigPosts";
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
type NatureProps = {
  latestPosts: FullPost[];
  randomPosts: FullPost[];
};
const Nature: FunctionComponent<NatureProps> = ({
  latestPosts,
  randomPosts,
}) => {
  return (
    <Layout>
      <SeoHeader subtitle="ScienceGeek brengt internationaal en binnenlands wetenschappelijk nieuws. | Nature" />
      <main className="bg-white">
        <div>
          <div className="md:grid  md:grid-cols-2 md:mt-10">
            {/* HeadPost */}
            <HeadPost data={getFirstElement(latestPosts)} />
            <div className="md:hidden h-2 w-full bg-almostWhite"></div>

            {/* laatste nieuws */}
            <LaatsteNieuws
              posts={removeFirstEement(latestPosts)}
              title={LAATSTE_NIEUWS.nature.title}
              LinkNaarMeerPostsText={LAATSTE_NIEUWS.nature.linkText}
              LinkNaarMeerPosts={LAATSTE_NIEUWS.nature.link}
            />
          </div>

          <div className="hidden md:block bg-almostWhite h-0.5 w-full mt-8"></div>

          {/* random posts */}
          <RandomBigPosts posts={randomPosts} />
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const latestPosts = await getPosts(AMOUNT_OF_POST_FRONTPAGE, "nature");
  const randomPosts = await getRandomPosts(AMOUNT_OF_RANDOM_POST_FRONTPAGE);
  return { props: { latestPosts, randomPosts } };
}

export default Nature;
