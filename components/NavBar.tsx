import Link from 'next/link';
import TastiestFullLogo from '../assets/svgs/TastiestFullLogo';
import MenuIcon from '../assets/svgs/MenuIcon';
import SearchIcon from '../assets/svgs/SearchIcon';
import { MenuItem } from './MenuItem';

function NavBar() {
  return (
    <div>
      <div className="antialiased flex justify-between p-2 m-2">
        <div className="flex mb-2">
          <div className="lg:hidden">
            <Link href="/blog">
              <a className="flex flex-shrink-0">
                <MenuIcon className="fill-current h-8" />
              </a>
            </Link>
          </div>
        </div>

        <div className="flex mb-2">
          <Link href="/">
            <a className="flex flex-shrink-0 text-primary">
              <TastiestFullLogo className="fill-current h-8 w-48" />
            </a>
          </Link>
        </div>

        <div className="flex mb-2">
          <Link href="/blog">
            <a className="flex flex-shrink-0">
              <SearchIcon className="fill-current h-8" />
            </a>
          </Link>
        </div>
      </div>

      <div className="w-full flex">
        <MenuItem text="Home" selected={false} />
        <MenuItem text="Blog" selected={true} />
        <MenuItem text="" selected={false} />
        <MenuItem text="" selected={false} />
      </div>
    </div>
  );
}

export default NavBar;
