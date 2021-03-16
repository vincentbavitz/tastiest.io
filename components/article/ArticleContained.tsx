import { Contained } from 'components/Contained';
import React, { ReactNode } from 'react';
import { UI } from '../../constants';

interface Props {
  children: ReactNode;
  backgroundColor?: 'primary' | 'secondary' | 'secondary-1';
}

export default function ArticleContained({ children, backgroundColor }: Props) {
  return (
    <Contained backgroundColor={backgroundColor}>
      <div
        style={{
          width: `calc(100% - ${UI.ARTICLE.DESKTOP_OFFER_WIDGET_WIDTH_PX}px`,
        }}
      >
        {children}
      </div>
    </Contained>
  );
}
