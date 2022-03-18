import { dlog } from '@tastiest-io/tastiest-utils';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

export const getServerSideProps: GetServerSideProps = async context => {
  // Automatically give them access
  // const res = NextResponse.rewrite(redirect + request.nextUrl.search);
  nookies.set(context, 'hasAccess', 'true', {});

  dlog('numa ➡️ context.req.url:', context.req.url);

  // Don't worry about the base for development or staging urls;
  // we're just using the base because the URL constructor wants one.
  // We're just using URL.searchParams ;)
  const url = new URL(context.req.url, 'https://tastiest.io');

  return {
    props: {},
    redirect: {
      destination: '/london/middle_eastern/numa-cafe-mill-hill' + url.search,
      permanent: false,
    },
  };
};

function NumaRedirect() {
  return <></>;
}

export default NumaRedirect;
