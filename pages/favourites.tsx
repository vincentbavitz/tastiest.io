import FavouritesNoneSVG from '@svg/page/favourites-none.svg';
import FavouritesBackdropSVG from '@svg/page/favourites.svg';
import { useArticle } from 'hooks/useArticle';
import { GetServerSideProps } from 'next';
import React, { useContext } from 'react';
import { CmsApi } from 'services/cms';
import { UserDataApi } from 'services/userData';
import { IPost } from 'types/cms';
import { UserData } from 'types/firebase';
import { ArticleCard } from '../components/cards/ArticleCard';
import { ArticleCardFavourite } from '../components/cards/ArticleCardFavourite';
import { CardGrid } from '../components/cards/CardGrid';
import { Contained } from '../components/Contained';
import { SectionTitle } from '../components/SectionTitle';
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

  const BackdropSVG =
    savedPosts.length === 0 ? (
      <FavouritesNoneSVG
        style={{
          width: isDesktop ? '130%' : '300%',
          transform: `translateX(${isDesktop ? -15 : 34}%)`,
        }}
      />
    ) : (
      <FavouritesBackdropSVG className="w-10/12" />
    );

  return (
    <div>
      <div className="relative w-full mt-6 mb-12">
        {!isDesktop ? (
          <>
            {BackdropSVG}

            <div className="absolute inset-0 flex items-center justify-center">
              <h1
                style={{
                  fontSize: 'calc(1rem + 2vw)',
                }}
                className="font-somatic text-primary"
              >
                Saved Dishes
              </h1>
            </div>
          </>
        ) : (
          <Contained>
            <div className="relative flex justify-center w-full">
              {BackdropSVG}
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-3xl font-somatic text-primary">
                Saved Dishes
              </h1>
            </div>
          </Contained>
        )}
      </div>

      <Contained>
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

        <div className="mt-20 mb-10">
          <SectionTitle>You might also like</SectionTitle>
        </div>

        {/* Recommended Posts */}
        <CardGrid rows={1}>
          {recommendedPosts?.map(post => (
            <ArticleCard compact key={post.id} {...post} />
          ))}
        </CardGrid>
      </Contained>
    </div>
  );
}

export default Favourites;
