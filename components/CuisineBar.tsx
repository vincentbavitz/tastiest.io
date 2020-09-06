import Link from 'next/link';
import { cuisines } from '../constants';

interface Props {
  text: string;
  href: string;
}

function CuisineItem(props: Props): JSX.Element {
  const { text, href } = props;

  return (
    <Link href={href}>
      <a className="block font-normal border-black border border-solid rounded-lg pr-12 pl-4 py-3 mr-4">
        {text}
      </a>
    </Link>
  );
}

function CuisineBar() {
  return (
    <div className="flex px-5 overflow-x-auto scrolling-touch hide_scroll">
      <div className="flex">
        {cuisines.map(cuisine => (
          <CuisineItem
            key={cuisine.name}
            text={cuisine.name}
            href={cuisine.href}
          />
        ))}
      </div>
    </div>
  );
}

export default CuisineBar;
