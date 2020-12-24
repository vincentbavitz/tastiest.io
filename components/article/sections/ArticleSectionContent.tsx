import BlockContent from '@sanity/block-content-to-react';
import React, { useContext } from 'react';
import { SANITY_CONSTATNTS } from '../../../client';
import { ScreenContext } from '../../../contexts/screen';
import { IFigureImage } from '../../../types/article';
import { Contained } from '../../Contained';
import { ArticleWidgetOrderNow } from '../widgets/ArticleWidgetOrderNow';
import { ArticleSectionFeatureImage } from './ArticleSectionFeatureImage';

interface Props {
  body: string | string[];
  featureImage: IFigureImage;
}

const paragraphs = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore consequatur. Architecto, aperiam impedit. Corrupti inventore eius, exercitationem odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat. Earum, voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore consequatur. Architecto, aperiam impedit. Corrupti inventore eius, exercitationem odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat. Earum, voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore consequatur. Architecto, aperiam impedit. Corrupti inventore eius, exercitationem odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat. Earum, voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore consequatur. Architecto, aperiam impedit.', 'Corrupti inventore eius, exercitationem
odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat.
Earum, voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing
elit. Hic, labore consequatur. Architecto, aperiam impedit. Corrupti
inventore eius, exercitationem odit est fugit, iste aspernatur
incidunt quod iure aliquid fugiat. Earum, voluptate. Lorem ipsum,
dolor sit amet consectetur adipisicing elit. Hic, labore consequatur.
Architecto, aperiam impedit. Corrupti inventore eius, exercitationem
odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat.
Earum, voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing
elit. Hic, labore consequatur. Architecto, aperiam impedit. Corrupti
inventore eius, exercitationem odit est fugit, iste aspernatur
incidunt quod iure aliquid fugiat. Earum, voluptate.`,
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, labore
consequatur. Architecto, aperiam impedit. Corrupti inventore eius,
exercitationem odit est fugit, iste aspernatur incidunt quod iure
aliquid fugiat. Earum, voluptate. Lorem ipsum, dolor sit amet
consectetur adipisicing elit. Hic, labore consequatur. Architecto,
aperiam impedit. Corrupti inventore eius, exercitationem odit est
fugit, iste aspernatur incidunt quod iure aliquid fugiat. Earum,
voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
Hic, labore consequatur. Architecto, aperiam impedit. Corrupti
inventore eius, exercitationem odit est fugit, iste aspernatur
incidunt quod iure aliquid fugiat.`,
  `Earum, voluptate. Lorem ipsum,
dolor sit amet consectetur adipisicing elit. Hic, labore consequatur.
Architecto, aperiam impedit. Corrupti inventore eius, exercitationem
odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat.
Earum, voluptate. Lorem ipsum, dolor sit amet consectetur adipisicing
elit. Hic, labore consequatur. Architecto, aperiam impedit. Corrupti
inventore eius, exercitationem odit est fugit, iste aspernatur
incidunt quod iure aliquid fugiat. Earum, voluptate. Lorem ipsum,
dolor sit amet consectetur adipisicing elit. Hic, labore consequatur.
Architecto, aperiam impedit. Corrupti inventore eius, exercitationem
odit est fugit, iste aspernatur incidunt quod iure aliquid fugiat.`,
];

// TODO
// Really want writers to be able to do {{CALL_TO_ACTION}} sorta things like Wordpress shortcodes
// And that will then conditionally render our components
export function ArticleSectionContent(props: Props) {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <Contained>
      {isDesktop ? <DesktopContent {...props} /> : <MobileContent {...props} />}
    </Contained>
  );
}

const MobileContent = ({ body, featureImage }: Props) => (
  <div className="flex flex-col space-y-4">
    <div>{paragraphs[0]}</div>

    <ArticleWidgetOrderNow />

    <div>{paragraphs[1]}</div>

    <ArticleSectionFeatureImage featureImage={featureImage} />

    <div>{paragraphs[1]}</div>
  </div>
);

const DesktopContent = ({ body, featureImage }: Props) => (
  <div className="flex flex-col">
    <div className="flex space-x-10">
      <div className="w-8/12 mt-16">
        <BlockContent
          blocks={body}
          projectId={SANITY_CONSTATNTS.PROJECT_ID}
          dataset={SANITY_CONSTATNTS.DATASET}
        />
      </div>

      <div className="w-4/12 mt-12">
        <ArticleWidgetOrderNow />
      </div>
    </div>
    <ArticleSectionFeatureImage featureImage={featureImage} />
  </div>
);
