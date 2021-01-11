import BlockContent from '@sanity/block-content-to-react';
import React, { useContext } from 'react';
import { SANITY_CONSTATNTS } from '../../../client';
import { ScreenContext } from '../../../contexts/screen';
import { IArticle } from '../../../types/article';
import { Contained } from '../../Contained';
import {
  ArticleWidgetOrderNow,
  IOrderDeal,
} from '../widgets/ArticleWidgetOrderNow';
import { ArticleSectionFeatureImage } from './ArticleSectionFeatureImage';

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

const deal: IOrderDeal = {
  restaurantID: 'divine-steaks-market',
  dealName: 'Grizzly Grumble Deal',
  dealDescription: 'Experience the best porterhouse steak in London',
  dealPrefix: "Only £25 and you'll get",
  dealItems: [
    '300g Porterhouse',
    'Fries',
    'Salad',
    'Choice of steak sauces',
    'House wine/beer',
  ],
  pricePerHeadGBP: 25,
};

// TODO
// Really want writers to be able to do {{CALL_TO_ACTION}} sorta things like Wordpress shortcodes
// And that will then conditionally render our components
export function ArticleSectionContent(post: IArticle) {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <Contained>
      {isDesktop ? <DesktopContent {...post} /> : <MobileContent {...post} />}
    </Contained>
  );
}

const MobileContent = (post: IArticle) => (
  <div className="flex flex-col space-y-4">
    <div>{paragraphs[0]}</div>

    <ArticleWidgetOrderNow {...deal} />

    <BlockContent
      blocks={post.body}
      projectId={SANITY_CONSTATNTS.PROJECT_ID}
      dataset={SANITY_CONSTATNTS.DATASET}
    />

    <ArticleSectionFeatureImage featureImage={post.featureImage} />
  </div>
);

const DesktopContent = (post: IArticle) => (
  <div className="flex flex-col">
    <div className="flex space-x-10">
      <div className="w-8/12 mt-16">
        <BlockContent
          blocks={post.body}
          projectId={SANITY_CONSTATNTS.PROJECT_ID}
          dataset={SANITY_CONSTATNTS.DATASET}
        />
      </div>

      <div className="w-4/12 mt-12">
        <ArticleWidgetOrderNow {...deal} />
      </div>
    </div>
    <ArticleSectionFeatureImage featureImage={post.featureImage} />
  </div>
);
