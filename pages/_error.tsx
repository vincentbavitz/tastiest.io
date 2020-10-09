import Link from 'next/link';
import { CuisineBar } from '../components/CuisineBar';
import { Footer } from '../components/Footer';
import NavBar from '../components/NavBar';
import FourOhFourSVG from '../assets/svgs/404.svg';

function Error({ statusCode }) {
  return (
    <div>
      <NavBar />
      <CuisineBar />
      <div className="flex">
        <div className="mx-20 z-50">
          <h1 className="font-somantic text-primary text-ninexl text-opacity-25  -mb-4">
            {statusCode}
          </h1>
          <p className="font-somantic text-primary text-fivexl -mb-2">
            Oops, this
          </p>
          <p className="font-somantic text-primary text-fivexl -mb-2">
            page is
          </p>
          <p className="text-secondary font-somantic text-fivexl ">
            eggstinct!
          </p>
          <Link href="/">
            <div
              role="button"
              className="bg-secondary cursor-pointer text-lg mt-2 text-white font-somantic px-4 py-2 w-full select-none rounded-lg text-center"
            >
              Go back home
            </div>
          </Link>
        </div>

        <div className="relative"></div>
        <FourOhFourSVG className="absolute mb-10" />
        <div className="div mr-10">
          <div className="flex-col z-50 my-4">
            <input
              type="text"
              placeholder="Let us know what you were looking for and we'll get back to you soon."
              className="border-secondary border-2 rounded-lg focus:outline-none focus:border-primary placeholder-primary placeholder-opacity-50 w-full h-64 pl-2"
            />
            <input
              type="text"
              placeholder="email address..."
              className="mt-2 border-secondary border-2 rounded-lg focus:outline-none focus:border-primary pl-2 py-2 placeholder-primary placeholder-opacity-50 w-full"
            />
            <div
              role="button"
              className="bg-primary cursor-pointer text-lg mt-2 text-white font-somantic px-4 py-2 select-none rounded-lg text-center w-4/12"
            >
              Send
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
