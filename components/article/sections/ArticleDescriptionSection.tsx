import { useScreenSize } from 'hooks/useScreenSize';
import { Contained } from '../../Contained';

interface Props {
  description: string;
}

export function ArticleDescriptionSection({ description }: Props) {
  const { isDesktop } = useScreenSize();

  return (
    <Contained>
      <div className="flex justify-center w-full">
        <span
          style={{
            maxWidth: isDesktop ? '700px' : 'unset',
          }}
          className="w-full text-lg font-medium text-center text-gray-900 desktop:text-xl font-roboto"
        >
          {description}
        </span>
      </div>
    </Contained>
  );
}
