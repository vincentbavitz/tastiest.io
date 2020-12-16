import { useArticle } from '../../../hooks/article';
import { useScreenSize } from '../../../hooks/screen';
import { Contained } from '../../Contained';

interface Props {
  subtitle: string;
}

export function ArticleSubtitleSection({ subtitle }: Props) {
  const { isMobile, isDesktop } = useScreenSize();

  return (
    <Contained>
      <div className="flex justify-center w-full">
        <span
          style={{
            maxWidth: isDesktop ? '700px' : 'unset',
          }}
          className="text-lg w-full desktop:text-xl text-center font-medium font-roboto text-gray-900"
        >
          {subtitle}
        </span>
      </div>
    </Contained>
  );
}
