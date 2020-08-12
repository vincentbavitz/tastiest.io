import "../assets/style.css";
import Link from 'next/link';

function CuisineItem ({ text, href }) {
    return (
        <Link href={href}>
            <a className='block font-normal border-black border border-solid rounded-lg pr-12 pl-4 py-3 mr-4'>
                {text}
            </a>
        </Link>
    )
}

function CuisineBar() {
    return (  
    <div className="flex px-5 overflow-x-auto scrolling-touch hide_scroll">
        <div className="flex">
            <CuisineItem text="Italian" href="/italian"/>
            <CuisineItem text="French" href="/french"/>
            <CuisineItem text="Japanese" href="/Japanese"/>
            <CuisineItem text="Chinese" href="/chinese"/>
            <CuisineItem text="Indian" href="/Indian"/>
        </div>
    </div>  
    )
  }
  
  export default CuisineBar