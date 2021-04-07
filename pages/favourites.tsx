import FavouritesNoneSVG from '@svg/illustrations/nothing-found.svg';
import FavouritesBackdropSVG from '@svg/page/favourites.svg';
import { Button } from '@tastiest-io/tastiest-components';
import { ArticleCardFavourite } from 'components/cards/ArticleCardFavourite';
import { CardGrid } from 'components/cards/CardGrid';
import { Contained } from 'components/Contained';
import RecommendedPosts from 'components/sections/RecommendedPosts';
import { useArticle } from 'hooks/useArticle';
import { useScreenSize } from 'hooks/useScreenSize';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { CmsApi } from 'services/cms';
import { UserDataApi } from 'services/userData';
import { IPost } from 'types/cms';
import { UserData } from 'types/firebase';
import { dlog } from 'utils/development';
import { IScreen } from '../contexts/screen';
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
  const screen = useScreenSize();
  const { user } = useAuth();
  const { toggleSaveArticle } = useArticle();
  const { userData = {} } = useUserData(user);

  // Initialize favourites with props, then allow firebase to manage in real time.
  const savedPostSlugs = userData?.savedArticles
    ? userData.savedArticles
    : savedPosts.map(p => p.slug) ?? [];

  dlog('favourites ➡️ recommendedPosts:', recommendedPosts);
  dlog('favourites ➡️ savedPosts:', savedPosts);

  return (
    <>
      <div>
        <div className="w-full h-full">
          <div className="relative w-full h-full mt-6 mb-12">
            {savedPosts.length ? (
              <SavedPlacesBackdrop {...screen} />
            ) : (
              <NoSavedPlacesBackdrop {...screen} />
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
        </div>
      </div>

      <div className="mt-20 mb-10">
        <RecommendedPosts
          small
          label="You might also like"
          posts={recommendedPosts}
          rowLimit={1}
        />
      </div>
    </>
  );
}

const SavedPlacesBackdrop = ({ isDesktop }: IScreen) => {
  return (
    <>
      {isDesktop ? (
        <Contained>
          <div className="relative flex justify-center w-full">
            <FavouritesBackdropSVG className="w-10/12" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-3xl text-center font-somatic text-primary">
              Saved Dishes
            </h1>
          </div>
        </Contained>
      ) : (
        <>
          <FavouritesBackdropSVG className="w-10/12" />

          <div className="absolute inset-0 flex items-center justify-center">
            <h1
              style={{
                fontSize: 'calc(1rem + 2vw)',
              }}
              className="text-center font-somatic text-primary"
            >
              Saved Dishes
            </h1>
          </div>
        </>
      )}
    </>
  );
};

const NoSavedPlacesBackdrop = ({ isMobile, isTablet, isDesktop }: IScreen) => {
  return (
    <Contained>
      <div className="relative flex justify-center w-full">
        <FavouritesNoneSVG
          style={{
            width: isDesktop ? '100%' : isTablet ? '70%' : '110%',
            transform: isDesktop
              ? 'translateX(0)'
              : isTablet
              ? 'translateX(5%)'
              : 'translateX(5%)',
            maxWidth: '700px',
          }}
        />
        <div className="absolute inset-0 flex justify-center w-full">
          <div className="flex items-center justify-start w-full h-full mobile:justify-center">
            <div
              style={{
                width: 'max-content',
                marginLeft: isMobile ? '5vw' : 'unset',
              }}
              className="flex flex-col items-center space-y-3 transform mobile:-translate-x-16"
            >
              <h2 className="text-2xl leading-none text-center font-somatic text-primary">
                You haven't saved
                <br />
                any places yet!
              </h2>

              <Link href="/search">
                <a>
                  <Button>Discover</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Contained>
  );
};

export default Favourites;
