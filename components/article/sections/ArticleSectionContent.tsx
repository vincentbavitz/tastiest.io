import { RichBody } from 'components/RichBody';
import React, { useContext } from 'react';
import { IDeal, IPost } from 'types/cms';
import { ScreenContext } from '../../../contexts/screen';
import { Contained } from '../../Contained';
import { ArticleWidgetOrderNow } from '../widgets/ArticleWidgetOrderNow';
import { ArticleSectionFeatureImage } from './ArticleSectionFeatureImage';

const deal: IDeal = {
  id: '3240234324032432432-4-324324324-23',
  tagline: 'Experience the best porterhouse steak in London',
  includes: [
    '300g Porterhouse',
    'Fries',
    'Salad',
    'Choice of steak sauces',
    'House wine/beer',
  ],
  pricePerHeadGBP: 25,
  image: {
    imageUrl:
      'https://www.homewetbar.com/blog/wp-content/uploads/2014/04/how-to-grill-steak.jpg?x48627',
    title: '',
    description: '',
  },
};

// TODO
// Really want writers to be able to do {{CALL_TO_ACTION}} sorta things like Wordpress shortcodes
// And that will then conditionally render our components
export function ArticleSectionContent(post: IPost) {
  const { isDesktop } = useContext(ScreenContext);

  return (
    <Contained>
      {isDesktop ? <DesktopContent {...post} /> : <MobileContent {...post} />}
    </Contained>
  );
}

const MobileContent = (post: IPost) => (
  <div className="flex flex-col space-y-4">
    <div>{post.description}</div>

    <ArticleWidgetOrderNow {...deal} />

    <RichBody body={post.body} />

    <ArticleSectionFeatureImage featureImage={post.featureImage} />
  </div>
);

const DesktopContent = (post: IPost) => (
  <div className="flex flex-col">
    <div className="flex space-x-10">
      <div className="w-8/12 mt-16">
        <RichBody body={post.body} />
      </div>

      <div className="w-4/12 mt-12">
        <ArticleWidgetOrderNow {...deal} />
      </div>
    </div>
    <ArticleSectionFeatureImage featureImage={post.featureImage} />
  </div>
);
