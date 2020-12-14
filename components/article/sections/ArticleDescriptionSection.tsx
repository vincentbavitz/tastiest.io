import { useScreenSize } from '../../../hooks/screen';
import { Contained } from '../../Contained';

interface Props {
  children: string;
}

export function ArticleDescriptionSection(props: Props) {
  const { children } = props;

  const { isMobile, isDesktop } = useScreenSize();

  return (
    <Contained>
      <div className="flex justify-center w-full">
        <span
          style={{
            maxWidth: isDesktop ? '700px' : 'unset',
          }}
          className="text-lg w-full desktop:text-twoxl bold text-center font-robotoblack text-gray-800"
        >
          {children}
        </span>
      </div>
    </Contained>
  );
}
