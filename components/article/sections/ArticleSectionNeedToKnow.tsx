import { Document } from '@contentful/rich-text-types';
import { RichBody } from 'components/RichBody';
import React from 'react';

interface Props {
  body: Document;
}

export default function ArticleSectionNeedToKnow({ body }: Props) {
  return (
    <div>
      <h3 className="mb-3 text-lg font-medium border-b-2 border-opacity-50 border-secondary-1">
        Need To Know
      </h3>
      <RichBody body={body} listColor="secondary" paragraphMargins={false} />
    </div>
  );
}
