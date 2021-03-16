import { Contained } from 'components/Contained';
import React, { ReactNode } from 'react';
import { UI } from '../../constants';

interface Props {
  children: ReactNode;
}

export default function ArticleContained({ children }: Props) {
  return (
    <Contained>
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
