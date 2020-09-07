import '../assets/style.css';
import Link from 'next/link';
import TastiestFullLogo from '../assets/svgs/TastiestFullLogo';
import MenuIcon from '../assets/svgs/MenuIcon';
import SearchIcon from '../assets/svgs/SearchIcon';

function NavBar() {
  return (
    <div className="antialiased flex justify-between p-2 m-2 md:py-2 md:my-2 md:px-0 md:mx-0">
      <div className="mb-2 md:justify-end md:hidden">
        <Link href="/blog">
          <a className="flex-shrink-0">
            <MenuIcon className="fill-current h-8" />
          </a>
        </Link>
      </div>
      <div className="mb-2 md:order-first">
        <Link href="/">
          <a className="flex-shrink-0 text-primary">
            <TastiestFullLogo className="fill-current h-8" />
          </a>
        </Link>
      </div>
      <div className="mb-2">
        <Link href="/blog">
          <a className="flex-shrink-0">
            <SearchIcon className="fill-current h-8" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
