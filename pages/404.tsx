import classNames from 'classnames';
import Link from 'next/link';
import { useEffect } from 'react';
import { useMedia } from 'react-use';
import _404 from '../assets/svgs/404.svg';
import { CuisineBar } from '../components/CuisineBar';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';
import { UI } from '../constants';

function Tastiest404({ statusCode }) {
  // Responsive
  let isMobile = true;
  let isTablet = false;
  let isDesktop = false;
  let isHuge = false;
  if (typeof window !== 'undefined') {
    isMobile = useMedia(`(max-width: ${UI.MOBILE_BREAKPOINT}px)`);
    isTablet = useMedia(
      `(min-width: ${UI.MOBILE_BREAKPOINT}px) and  (max-width: ${UI.TABLET_BREAKPOINT}px)`,
    );
    isDesktop = useMedia(`(min-width: ${UI.TABLET_BREAKPOINT}px)`);
    isHuge = useMedia(`(min-width: ${UI.DESKTOP_BREAKPOINT}px)`);
  }

  useEffect(() => {
    console.log('isMobile:', isMobile);
    console.log('isTablet:', isTablet);
    console.log('isDesktop:', isDesktop);
  }, [isMobile, isTablet, isDesktop]);

  const wrapperStyles = {
    width: '100%',
    maxWidth: '760px',
    margin: isDesktop ? '50px auto 100px' : '-10px auto',
    paddingLeft: isHuge ? '0' : '5vw',
    paddingRight: isHuge ? '0' : '5vw',
    paddingBottom: !isDesktop ? '33px' : '0px',
  };

  const svgStyles = {
    top: isDesktop ? '125px' : isTablet ? '20px' : '85px',
    left: isDesktop ? '-50px' : isTablet ? '30vw' : '-65px',
    width: isDesktop ? '810px' : isTablet ? '833px' : '933px',
  };

  const _404SectionStyles = {
    top: isDesktop ? '45px' : isTablet ? '35px' : '25px',
  };

  const _404TitleStyles = {
    lineHeight: '0px',
    paddingTop: '2.3rem',
    paddingBottom: '3.3rem',
  };

  const _404TextStyles = {
    lineHeight: '1.15em',
  };

  const absoluteBoxStyles = {
    marginTop: isTablet ? '20px' : '0px',
    minHeight: isTablet ? '330px' : '450px',
  };

  const goBackHomeStyles = {
    width: '9rem',
  };

  return (
    <div>
      <NavBar />
      <CuisineBar />
      <div style={wrapperStyles} className="flex items-center">
        <div
          className={classNames(
            'flex w-full justify-between',
            !isDesktop && 'flex-col',
          )}
        >
          <div style={absoluteBoxStyles} className="relative w-full flex">
            <_404 style={svgStyles} className="absolute top-0 z-0" />
            <div style={_404SectionStyles} className="absolute left-0 z-50">
              <h1
                style={_404TitleStyles}
                className="font-somantic text-primary text-sevenxl text-opacity-25 -mb-4"
              >
                404
              </h1>
              <p
                style={_404TextStyles}
                className="font-somantic text-primary text-fourxl tracking-tight"
              >
                Oops, this
                <br />
                page is
                <br />
                <span className="text-secondary">eggstinct!</span>
              </p>

              <Link href="/">
                <div
                  role="button"
                  style={goBackHomeStyles}
                  className={classNames(
                    'bg-secondary',
                    'cursor-pointer',
                    'mt-3',
                    'text-white',
                    'font-somantic',
                    'px-3',
                    'py-1',
                    'w-32',
                    'select-none',
                    'rounded-lg',
                    'text-center',
                    'tracking-tight',
                    isMobile ? 'text-lg' : 'text-sm',
                  )}
                >
                  Go back home
                </div>
              </Link>
            </div>
          </div>

          <div
            className={classNames(
              'z-10 flex items-start',
              isMobile ? '-mt-10' : 'mt-0',
            )}
          >
            <div className="flex-col flex-grow z-50 my-4">
              <h2
                className={classNames(
                  'text-primary font-roboto font-semibold ml-1 font-somatic mt-6 text-twoxl whitespace-no-wrap',
                )}
              >
                Something went wrong?
              </h2>

              <textarea
                maxLength={UI.USER_QUERY_404_MAX_LEN}
                placeholder="Let us know what you were looking for and we'll get back to you soon."
                className="border-secondary border-2 rounded-xl focus:outline-none focus:border-primary placeholder-primary placeholder-opacity-50 w-full h-48 px-3 py-3 resize-none"
              />
              <input
                type="text"
                placeholder="Email address..."
                className="mt-2 border-secondary border-2 rounded-xl focus:outline-none focus:border-primary py-2 placeholder-primary placeholder-opacity-50 w-full pl-3 pt-3 pr-1"
              />

              <div
                role="button"
                className={classNames(
                  'bg-primary cursor-pointer mt-4 text-white font-somantic px-4 py-2 select-none rounded-lg text-center',
                  isMobile ? 'text-lg' : 'text-sm',
                  isMobile ? 'w-full' : 'w-4/12',
                )}
              >
                Send
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Tastiest404;
