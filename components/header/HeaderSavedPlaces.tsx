import { useRouter } from 'next/router';
import { useWindowSize } from 'react-use';
import HeartPrimarySVG from '../../assets/svgs/heart-primary.svg';
import { Title } from '../Title';

export function HeaderSavedPlaces() {
  const router = useRouter();

  // Saved places text should be hidden for tablet to make room
  // for the header search
  const { width: pageWidth } = useWindowSize();
  const shouldDisplayText = pageWidth > 920;

  return (
    <div
      onClick={() => router.push('/favourites')}
      className="flex items-center px-4 cursor-pointer"
    >
      <HeartPrimarySVG className="h-8 mr-1" />
      {shouldDisplayText && (
        <Title level={4} margin={false} className="text-primary font-somatic">
          Saved Places
        </Title>
      )}
    </div>
  );
}
