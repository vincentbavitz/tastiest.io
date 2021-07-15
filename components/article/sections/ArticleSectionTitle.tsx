import clsx from 'clsx';
import { LocationIndictor } from 'components/LocationIndictor';
import { useScreenSize } from 'hooks/useScreenSize';
import React from 'react';
import { UI } from '../../../constants';
import { Contained } from '../../Contained';

interface Props {
  title: string;
  location: string;
}

export function ArticleSectionTitle(props: Props) {
  const { title, location } = props;
  const { isDesktop } = useScreenSize();

  return (
    <Contained>
      <div
        className={clsx(
          'flex flex-col items-center mt-6 mb-4 space-y-4',
          isDesktop && 'pt-10',
        )}
      >
        <div
          className="flex items-center"
          style={{
            minHeight: '7rem',
            maxWidth: `${UI.ARTICLE.TITLE_MAX_WIDTH_REM}rem`,
          }}
        >
          <h1 className="text-5xl leading-tight text-center mobile:text-4xl font-somatic text-primary desktop:text-5xl">
            {title}
          </h1>
        </div>

        <LocationIndictor location={location} />
      </div>
    </Contained>
  );
}
