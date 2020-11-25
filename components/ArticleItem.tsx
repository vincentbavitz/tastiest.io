import { useRouter } from 'next/dist/client/router';
import { SyntheticEvent } from 'react';
import { ISanityArticle } from '../types/article';
import { generateURL } from '../utils/routing';
import { titleCase } from '../utils/text';
import { OutlineBlock } from './OutlineBlock';

export function ArticleItem(props: ISanityArticle): JSX.Element {
  const {
    featureImage,
    title,
    paragraph,
    /*tags*/ slug,
    city,
    cuisine,
  } = props;

  const router = useRouter();

  const handleClick = (e: SyntheticEvent) => {
    const { href, as } = generateURL({ city, slug, cuisine });

    e.preventDefault();
    router.push(href, as);
  };

  const tags = ['crepes', 'sweet'];

  return (
    <div
      className="rounded-xl cursor-pointer overflow-hidden w-full pb-3 bg-secondary bg-opacity-75"
      onClick={e => handleClick(e)}
    >
      <div
        style={{ paddingBottom: '60%' }}
        className="w-full h-0 overflow-hidden"
      >
        <img src={featureImage.source} alt={featureImage.altText} />
      </div>

      <div className="px-4">
        <div className="py-3 h-30">
          <div className="text-xl font-somatic mb-2 leading-tight overflow-hidden">
            {title}
          </div>
          <p className="text-gray-700 text-base">{paragraph}</p>
        </div>

        <div className="flex space-x-1">
          {tags
            .filter(tag => Boolean(tag))
            // Maximum of three tags
            .slice(0, 3)
            .map(tag => (
              <OutlineBlock size="tiny" theme="alt" bold key={tag}>
                {titleCase(tag)}
              </OutlineBlock>
            ))}
        </div>
      </div>
    </div>
  );
}
