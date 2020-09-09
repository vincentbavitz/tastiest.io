import classNames from 'classnames';

interface ICity {
  name: string;
  lat: number;
  lng: number;
}

interface Props {
  dish: string;
  city: ICity;
}

export function RecommendForm(props: Props) {
  const { dish, city } = props;

  return (
    <div className="w-full">
      <span className="text-lg font-bold">
        Do you know a better {dish} in {city.name}?
      </span>
      <div className="flex w-full">
        <input
          className={classNames(
            'bg-white',
            'focus:outline-none',
            'focus:shadow-outline',
            'border-4',
            'border-secondary',
            'rounded-l-lg',
            'py-2',
            'px-4',
            'block',
            'appearance-none',
            'leading-normal',
          )}
          type="text"
          maxLength={50}
          placeholder=""
        ></input>
        <button
          className={classNames(
            'bg-white',
            'border-t-4',
            'border-r-4',
            'border-b-4',
            'border-secondary',
            'bg-secondary',
            'rounded-r-lg',
            'py-2',
            'px-4',
            'block',
            'appearance-none',
            'leading-normal',
            'font-bold',
            'text-white',
          )}
        >
          RECOMMEND
        </button>
      </div>
    </div>
  );
}
