import { useArticle } from '../../../hooks/article';
import { useScreenSize } from '../../../hooks/screen';
import { Contained } from '../../Contained';

export function ArticleDescriptionSection() {
  const { subtitle } = useArticle();

  const { isMobile, isDesktop } = useScreenSize();

  return (
    <Contained>
      <div className="flex justify-center w-full">
        <span
          style={{
            maxWidth: isDesktop ? '700px' : 'unset',
          }}
          className="text-lg w-full desktop:text-xl text-center font-roboto text-gray-900"
        >
          {subtitle}
        </span>
      </div>
    </Contained>
  );
}
