import LocationSVG from '@svg/icons/location-brand.svg';
import classNames from 'classnames';
import { titleCase } from '../utils/text';

interface Props {
  city: string;
  background?: 'secondary' | 'white';
}

export function CityIndictor(props: Props) {
  const { city, background = 'primary' } = props;

  return (
    <div className="inline-flex items-center">
      <div className="icon">
        <LocationSVG className="w-5 mr-2" />
      </div>
      <div
        className={classNames(
          'flex content-center h-4 px-4 py-3 font-bold rounded',
          background === 'white' && 'bg-white bg-opacity-50 text-primary',
          background === 'primary' && 'bg-secondary text-black',
        )}
      >
        <p className="self-center text-xs">{titleCase(city)}</p>
      </div>
    </div>
  );
}
