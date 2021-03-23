import FavouritesNoneSVG from '@svg/illustrations/nothing-found.svg';
import FavouritesBackdropSVG from '@svg/page/favourites.svg';
import RecommendedPosts from 'components/sections/RecommendedPosts';
import { useArticle } from 'hooks/useArticle';
import { GetServerSideProps } from 'next';
import React, { useContext } from 'react';
import { CmsApi } from 'services/cms';
import { UserDataApi } from 'services/userData';
import { IPost } from 'types/cms';
import { UserData } from 'types/firebase';
import { ArticleCardFavourite } from '../components/cards/ArticleCardFavourite';
import { CardGrid } from '../components/cards/CardGrid';
import { Contained } from '../components/Contained';
import { ScreenContext } from '../contexts/screen';
import { useAuth } from '../hooks/useAuth';
import { useUserData } from '../hooks/useUserData';
import BigBrain from '../services/brains';

export const getServerSideProps: GetServerSideProps = async context => {
  // Get user ID from cookie.
  const userDataApi = new UserDataApi();
  const { userId } = await userDataApi.init(context);

  // If no user, redirect to home
  if (!userId) {
    return {
      redirect: {
        destination: '/?login=1',
        permanent: false,
      },
    };
  }

  // If user, get saved articles from firestore.
  const savedPostSlugs = await userDataApi.getUserData(UserData.SAVED_ARTICLES);

  // Given ids of saved articles from firestore, get articles of these ids
  const cms = new CmsApi();
  const { posts: savedPosts } = await cms.getPostsOfSlugs(savedPostSlugs);

  // Get recommended posts for the user
  const brain = new BigBrain();
  const recommendedPosts = await brain.inferRecommendedPosts(userId);

  return {
    props: { savedPosts, recommendedPosts },
  };
};

interface Props {
  savedPosts: IPost[];
  recommendedPosts: IPost[];
}

function Favourites(props: Props) {
  const { savedPosts, recommendedPosts } = props;
  const { isDesktop } = useContext(ScreenContext);
  const { user } = useAuth();
  const { toggleSaveArticle } = useArticle();
  const { userData = {} } = useUserData(user);

  // Initialize favourites with props, then allow firebase to manage in real time.
  const savedPostSlugs = userData?.savedArticles
    ? userData.savedArticles
    : savedPosts.map(p => p.slug) ?? [];

  console.log('favourites ➡️ recommendedPosts:', recommendedPosts);

  const BackdropSVG = savedPosts?.length ? (
    <FavouritesBackdropSVG className="w-10/12" />
  ) : (
    <FavouritesNoneSVG
      style={{
        height: isDesktop ? '300px' : 'unset',
        width: isDesktop ? 'unset' : '70%',
        transform: `translateX(${isDesktop ? -25 : -20}%)`,
      }}
    />
  );

  console.log('favourites ➡️ savedPosts:', savedPosts);

  const displayTitle =
    savedPosts.length > 0 ? (
      'Saved Dishes'
    ) : (
      <span>
        You haven't saved any
        <br />
        dishes yet
      </span>
    );

  return (
    <div>
      <div className="relative w-full mt-6 mb-12">
        {isDesktop ? (
          <Contained>
            <div className="relative flex justify-center w-full">
              {BackdropSVG}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl text-center font-somatic text-primary">
                {displayTitle}
              </h1>
            </div>
          </Contained>
        ) : (
          <>
            {BackdropSVG}

            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                style={{
                  fontSize: 'calc(1rem + 2vw)',
                }}
                className="text-center font-somatic text-primary"
              >
                {displayTitle}
              </h1>
            </div>
          </>
        )}
      </div>

      {savedPosts?.length ? (
        <div className="flex flex-col">
          <CardGrid>
            {savedPosts?.map(post => (
              <ArticleCardFavourite
                {...post}
                key={post.id}
                isFavourite={savedPostSlugs?.some(
                  saved => saved === post?.slug,
                )}
                onToggleFavourite={() => toggleSaveArticle(post.slug)}
              />
            ))}
          </CardGrid>
        </div>
      ) : null}

      <div className="mt-20 mb-10">
        <RecommendedPosts
          small
          label="You might also like"
          posts={recommendedPosts}
          rowLimit={1}
        />
      </div>
    </div>
  );
}

export default Favourites;
