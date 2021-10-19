import { IFigureImage } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { LocationIndictor } from 'components/LocationIndictor';
import { useScreenSize } from 'hooks/useScreenSize';
import SvgHowItWorksSpriteDesktop from 'public/assets/article/HowItWorksSpriteDesktop';
import SvgHowItWorksSpriteMobile from 'public/assets/article/HowItWorksSpriteMobile';
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleHiwModal } from 'state/navigation';
import { Contained } from '../../Contained';

interface Props {
  title: string;
  location: string;
  svg: IFigureImage;
}

const TITLE_MAX_WIDTH_MOBILE_REM = 20;
const TITLE_MAX_WIDTH_TABLET_REM = 28;
const TITLE_MAX_WIDTH_DESKTOP_REM = 20;
const TITLE_MAX_WIDTH_HUGE_REM = 26;

export function ArticleSectionTitle(props: Props) {
  const { title, location, svg } = props;
  const { isMobile, isTablet, isDesktop, isHuge } = useScreenSize();

  const MAX_TITLE_WIDTH = React.useMemo(
    () =>
      isDesktop
        ? isHuge
          ? TITLE_MAX_WIDTH_HUGE_REM
          : TITLE_MAX_WIDTH_DESKTOP_REM
        : isTablet
        ? TITLE_MAX_WIDTH_TABLET_REM
        : TITLE_MAX_WIDTH_MOBILE_REM,
    [isDesktop, isTablet],
  );

  return (
    <Contained>
      <div className={clsx('flex justify-center md:mt-6 space-y-4')}>
        {isDesktop && <CharcterEatingIllustration svg={svg} />}

        <div
          className={clsx(
            'flex flex-col items-center justify-center space-y-6 mt-6 pb-0 md:pb-4 pt-6',
          )}
        >
          <div
            style={{
              maxWidth: `${MAX_TITLE_WIDTH}rem`,
              minHeight: isDesktop ? '7rem' : 'auto',
            }}
            className="flex items-end"
          >
            <h1 className="text-3xl leading-none text-center sm:text-4xl font-primary text-primary xl:text-4xl">
              {title}
            </h1>
          </div>

          {isTablet && (
            <div className="relative flex justify-end w-screen h-px pt-4">
              <div className="flex-1"></div>
              <LocationIndictor location={location} />
              <div className="flex-1 -mt-4">
                <div style={{ maxWidth: '200px' }}>
                  <HowItWorksSpriteMobile />
                </div>
              </div>
            </div>
          )}

          {isMobile && (
            <>
              <div className="relative flex flex-col items-center">
                <LocationIndictor location={location} />

                <div className="w-56 mt-2 ml-10">
                  <HowItWorksSpriteMobile />
                </div>
              </div>
            </>
          )}

          {(isMobile || isTablet) && <CharcterEatingIllustration svg={svg} />}
        </div>

        {/* To make spacing even on desktop */}
        {isDesktop && (
          <div className="flex items-center flex-1 h-auto">
            <HowItWorksSpriteDesktop />
          </div>
        )}
      </div>
    </Contained>
  );
}

interface ITitleDividerProps {
  svg: IFigureImage;
}

const CharcterEatingIllustration = ({ svg }: ITitleDividerProps) => {
  const { isDesktop, isHuge } = useScreenSize();

  const ASPECT_RATIO = 802 / 676;
  const OFFSET_PERCENTAGE = 5.8;
  const HEIGHT_REM = isDesktop ? (isHuge ? 16 : 14) : 18;
  const CONTAINER_HEIGHT_REM = (1 - OFFSET_PERCENTAGE / 100) * HEIGHT_REM;

  const IllustrationInner = React.useMemo(() => {
    const _IllustrationInner = () => (
      <div
        style={{
          height: `${CONTAINER_HEIGHT_REM / ASPECT_RATIO}rem`,
        }}
        className="z-30 flex justify-end"
      >
        <img
          src={svg?.url}
          style={{
            height: `${HEIGHT_REM}rem`,
            transform: `translateY(${OFFSET_PERCENTAGE}%)`,
            maxWidth: 'unset',
          }}
        />
      </div>
    );

    return _IllustrationInner;
  }, [isDesktop]);

  return isDesktop ? (
    <div className="relative flex-1">
      <div
        style={{
          width: `${HEIGHT_REM * ASPECT_RATIO}rem`,
          right: `4vw`,
        }}
        className="absolute bottom-0 z-30"
      >
        <IllustrationInner />
      </div>
    </div>
  ) : (
    <IllustrationInner />
  );
};

const HowItWorksSpriteDesktop = () => {
  const dispatch = useDispatch();

  return (
    <div style={{ maxWidth: '233px' }} className="relative w-full">
      <SvgHowItWorksSpriteDesktop className="w-full pb-10" />

      <div
        style={{ width: '55%', minWidth: '7rem' }}
        className="absolute right-0 -bottom-2"
      >
        {/* Custom buttom so we can scale the width with the SVG */}
        <div
          role="button"
          tabIndex={0}
          className={clsx(
            'flex justify-center px-2 py-2',
            'font-medium xl:text-lg font-primary text-white duration-300',
            'rounded-md bg-primary hover:bg-primary-1',
            'outline-none',
          )}
          onClick={() => dispatch(toggleHiwModal(true))}
        >
          How it works
        </div>
      </div>
    </div>
  );
};

const HowItWorksSpriteMobile = () => {
  const dispatch = useDispatch();

  return (
    <div className="relative z-50 flex flex-col items-end pr-4 ml-8">
      <SvgHowItWorksSpriteMobile className="w-full" />

      <div
        style={{ width: '72.5%', minWidth: '7.33rem' }}
        className="pt-2 pb-2 pl-2 mr-2 bg-white rounded-xl"
      >
        {/* Custom buttom so we can scale the width with the SVG */}
        <div
          role="button"
          tabIndex={0}
          className={clsx(
            'flex justify-center px-2 py-2',
            'font-medium xl:text-lg font-primary text-white duration-300',
            'rounded-md bg-primary hover:bg-primary-1',
            'outline-none',
          )}
          onClick={() => dispatch(toggleHiwModal(true))}
        >
          How it works
        </div>
      </div>
    </div>
  );
};
