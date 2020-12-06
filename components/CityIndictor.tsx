import LocationSVG from '../assets/svgs/location-brand.svg';
import { titleCase } from '../utils/text';

interface Props {
  city: string;
}

export function CityIndictor(props: Props) {
  return (
    <div className="inline-flex items-center">
      <div className="icon">
        <LocationSVG className="w-5 mr-2" />
      </div>
      <div className="flex content-center h-4 px-4 py-3 bg-white bg-opacity-50 font-bold rounded">
        <p className="self-center text-primary text-xs">
          {titleCase(props.city)}
        </p>
      </div>
    </div>
  );
}
