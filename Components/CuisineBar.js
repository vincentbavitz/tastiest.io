import "../assets/style.css";
import Link from 'next/link';

function CuisineItem ({ text, href }) {
    return (
        <Link href={href}>
            <a className='block font-semibold border-black border-2 border-solid rounded-md p-3 mx-3'>
                {text}
            </a>
        </Link>
    )
}

function CuisineBar() {
    return (
        <div className="flex mt-2 mb-2 w-auto mx-2 px-4 overflow-x-auto scrolling-touch hide_scroll">
            <CuisineItem text="Italian" href="/italian"/>
            <CuisineItem text="French" href="/french"/>
            <CuisineItem text="Japanese" href="/Japanese"/>
            <CuisineItem text="Chinese" href="/chinese"/>
            <CuisineItem text="Indian" href="/Indian"/>
        </div>
    )
  }
  
  export default CuisineBar