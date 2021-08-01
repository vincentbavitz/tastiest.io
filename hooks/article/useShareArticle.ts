import { useMemo } from 'react';
import { BASE_URL } from 'utils/redirects';
import { generateStaticURL } from 'utils/routing';

export interface IUseShareArticleParams {
  title: string;
  city: string;
  slug: string;
  cuisine: string;
  restaurant: string;
}

export interface IUseShareArticleOptions {
  // When there is no native sharing functionality (usually desktop)
  onNoNativeShare?: (url: URL) => void;
}

const useShareArticle = (
  params: IUseShareArticleParams,
  options?: IUseShareArticleOptions,
) => {
  const { title, city, slug, cuisine, restaurant } = params;
  const { onNoNativeShare } = options ?? {};

  const { as: path } = useMemo(
    () => generateStaticURL({ city, slug, cuisine, restaurant }),
    [],
  );

  // Expand to the format: https://tastiest.io/path/to/format
  const tastiestUrl = new URL(path, BASE_URL);
  tastiestUrl.searchParams.set('utm_source', 'tastiest');
  tastiestUrl.searchParams.set('utm_medium', 'share');
  tastiestUrl.searchParams.set('utm_content', slug);

  const share = (open?: boolean) => {
    shareURL(title, tastiestUrl.toString(), { open });
  };

  /**
   * REFERENCE
   * https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/
   */
  const shareURL = (
    title: string,
    url: string,
    options?: { open?: boolean },
  ) => {
    // Attempt to use native share API
    if (navigator?.share) {
      navigator.share?.({ title, url });
      return;
    }

    // No native sharing, probably on desktop.
    onNoNativeShare?.(tastiestUrl);

    // Fallback to in-browser sharing
    if (options?.open) {
      window?.open(url, '_blank');
    }
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
    share,
    tastiestUrl,
    shareToFacebook,
    shareToTwitter,
    shareToWhatsApp,
    shareToReddit,
  };
};

export default useShareArticle;
