import { titleCase } from '../utils/text';

interface Props {
  city: string;
}

export function CityIndictor(props: Props) {
  return (
    <div className="inline-flex">
      <div className="icon">o</div>
      <div className="flex content-center bg-white px-2 font-bold rounded-md">
        <p className="self-center text-black text-xs">
          {titleCase(props.city)}
        </p>
      </div>
    </div>
  );
}
