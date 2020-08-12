import "../assets/style.css";
import Link from 'next/link';
import TastiestFullLogo from '../assets/svgs/TastiestFullLogo';
import MenuIcon from '../assets/svgs/MenuIcon';
import SearchIcon from '../assets/svgs/SearchIcon';

function NavBar() {
    return (
  <div className='antialiased flex justify-between p-2 m-2'>
    <div className='flex mb-2'>
      <Link href="/blog">
            <a className='flex flex-shrink-0'>
                <MenuIcon className="fill-current h-8"/>
            </a>
      </Link>
    </div>
    <div className="flex mb-2">
        <Link href="/">
          <a className='flex flex-shrink-0 text-primary'>
          <TastiestFullLogo className="fill-current h-8 w-48" />
          </a>
        </Link>
     </div>   
      <div className='flex mb-2'>
          <Link href="/blog">
            <a className='flex flex-shrink-0'>
              <SearchIcon className="fill-current h-8"/>
            </a>
          </Link>
      </div>
  </div>
    )
  }
  
  export default NavBar