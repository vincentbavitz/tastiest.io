import { IFigureImage } from '@tastiest-io/tastiest-utils';
import clsx from 'clsx';
import { LocationIndictor } from 'components/LocationIndictor';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
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
  const { isTablet, isHuge, isDesktop } = useScreenSize();

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
      <div className={clsx('flex items-end justify-center space-y-4')}>
        {isDesktop && <CharcterEatingIllustration svg={svg} />}

        <div
          className={clsx(
            'flex flex-col items-center justify-center space-y-6 mt-6 pb-0 tablet:pb-4 pt-6',
          )}
        >
          <div
            style={{
              maxWidth: `${MAX_TITLE_WIDTH}rem`,
              minHeight: isDesktop ? '7rem' : 'auto',
            }}
          >
            <h1 className="text-3xl leading-none text-center mobile:text-4xl font-somatic text-primary desktop:text-4xl">
              {title}
            </h1>
          </div>

          <LocationIndictor location={location} />
          {!isDesktop && <CharcterEatingIllustration svg={svg} />}
        </div>

        {/* To make spacing even on desktop */}
        {isDesktop && <div className="flex-1"></div>}
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
  const OFFSET_PERCENTAGE = 5.9;
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
