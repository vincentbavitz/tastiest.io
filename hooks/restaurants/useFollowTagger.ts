import { useAuth } from 'hooks/auth/useAuth';
import useFollow from 'hooks/useFollow';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/**
 * Tag users as followers when they arrive on the restaurant's page with
 * the `?restaurateur` query parameter.
 *
 * This implies that they have come from an ad or that they are in some way
 * a pre-existing customer of the restaurant.
 *
 * It will ensure that at checkout, the restaurant recieves their 95% rather
 * than 90%.
 */
export const useFollowTagger = (restaurantId: string) => {
  const router = useRouter();
  const { follow, followImplicitly } = useFollow(restaurantId);
  const { isSignedIn } = useAuth();

  useEffect(() => {
    // If they coming from `?restaureteur`, tag them as a follower of the restaurant so
    // the restaurant gets 95% rather than 90%.
    if (router.query.restaurateur !== undefined) {
      alert('restaurateur!');

      // If they're logged in, save it to their account.
      // Otherwise, if they're not logged in, follow implicitly
      if (isSignedIn) {
        follow();
        return;
      }

      followImplicitly();
    }
  }, [router.query]);
};
