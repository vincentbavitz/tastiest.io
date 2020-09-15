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

// Use klaviyo for emails
// https://www.klaviyo.com/docs

export function RecommendForm(props: Props) {
  const { dish, city } = props;

  return (
    <div className="w-full">
      <span className="text-lg font-bold">
        Do you know a better {dish} in {city.name}?
      </span>
      <div
        className={classNames(
          'flex',
          'w-full',
          'focus:outline-none',
          'focus:shadow-outline',
          'border-4',
          'border-secondary',
          'rounded-xl',
        )}
      >
        <input
          className={classNames(
            'flex-1',
            'border-none',
            'outline-none',
            'px-4',
            'self-center',
            'block',
            'appearance-none',
            'leading-normal',
            'bg-transparent',
          )}
          type="text"
          maxLength={50}
          placeholder=""
        ></input>
        <button
          className={classNames(
            'bg-white',
            'border-2',
            'border-white',
            'm-1',
            'px-4',
            'py-2',
            'border-secondary',
            'bg-secondary',
            'rounded-lg',
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
