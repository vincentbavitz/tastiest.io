import { LayoutProps } from './LayoutHandler';
import LayoutWrapper from './LayoutWrapper';

export default function LayoutAssociatesInfluencers({
  router,
  pageProps,
  children: Component,
}: LayoutProps) {
  const isAffiliatePage = router.pathname.startsWith('/affiliate-program');
  const isInfluencerPage = router.pathname.startsWith('/influencer-program');

  return (
    <LayoutWrapper
      router={router}
      headerProps={{
        theme: 'dark',
        children: (
          <div className="flex items-center h-auto border-l border-secondary border-opacity-75 select-none">
            <div className="ml-4 text-light text-2xl font-primary">
              {isAffiliatePage ? 'associates' : null}
              {isInfluencerPage ? 'influencers' : null}
            </div>
          </div>
        ),
      }}
      pageProps={pageProps}
    >
      <div className="relative flex flex-col justify-between flex-grow bg-light text-dark font-secondary">
        <Component {...pageProps} />
      </div>
    </LayoutWrapper>
  );
}
