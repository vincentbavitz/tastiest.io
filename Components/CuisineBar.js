import "../assets/style.css";
import Link from 'next/link';

function CuisineBar() {
    return (
        <div className="flex mt-2 mb-2 w-auto mx-2 px-4 overflow-x-auto scrolling-touch hide_scroll">
            <div className="block font-semibold border-black border-2 border-solid rounded-md p-3 mx-3">Italian</div>
            <div className="block font-semibold border-black border-2 border-solid rounded-md p-3 mx-3">French</div>
            <div className="block font-semibold border-black border-2 border-solid rounded-md p-3 mx-3">Japanese</div>
            <div className="block font-semibold border-black border-2 border-solid rounded-md p-3 mx-3">Chinese</div>
            <div className="block font-semibold border-black border-2 border-solid rounded-md p-3 mx-3">Indian</div>
        </div>
    )
  }
  
  export default CuisineBar