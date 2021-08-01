import { useMemo } from 'react';
import { BASE_URL } from 'utils/redirects';
import { generateStaticURL } from 'utils/routing';

export interface IUseShareArticle {
  title: string;
  city: string;
  slug: string;
  cuisine: string;
  restaurant: string;
}

const useShareArticle = ({
  title,
  city,
  slug,
  cuisine,
  restaurant,
}: IUseShareArticle) => {
  const { as: path } = useMemo(
    () => generateStaticURL({ city, slug, cuisine, restaurant }),
    [],
  );

  // Expand to the format: https://tastiest.io/path/to/format
  const tastiestUrl = new URL(path, BASE_URL);
  tastiestUrl.searchParams.set('utm_source', 'tastiest');
  tastiestUrl.searchParams.set('utm_medium', 'share');
  tastiestUrl.searchParams.set('utm_content', slug);

  /**
   * REFERENCE
   * https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/
   */
  const shareURL = (title: string, url: string) => {
    // Attempt to use native share API
    if (navigator.share) {
      navigator.share({ title, url });
      return;
    }

    // Fallback to in-browser sharing
    window?.open(url, '_blank');
  };

  const shareToFacebook = () => {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${tastiestUrl.toString()}`;
    shareURL(title, shareUrl);
  };

  const shareToWhatsApp = () => {
    const shareUrl = `https://api.whatsapp.com/send?text=${title} ${tastiestUrl.toString()}`;
    shareURL(title, shareUrl);
  };

  const shareToTwitter = () => {
    const shareUrl = `https://twitter.com/share?url=${tastiestUrl.toString()}&text=${title}`;
    //   &via=[via]&hashtags=[hashtags]
    //   https://api.whatsapp.com/send?text=${title} ${tastiestUrl}`;
    shareURL(title, shareUrl);
  };

  const shareToReddit = () => {
    const shareUrl = `https://reddit.com/submit?url=${tastiestUrl.toString()}&title=${title}`;
    shareURL(title, shareUrl);
  };

  return {
    tastiestUrl,
    shareToFacebook,
    shareToTwitter,
    shareToWhatsApp,
    shareToReddit,
  };
};

export default useShareArticle;
