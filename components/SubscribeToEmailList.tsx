import HomeHero from '../assets/svgs/home-hero.svg';

function SubscribeToEmailList(): JSX.Element {
  return (
    <div className="bg-orange-200 justify-center overflow-x-hidden">
      <div className="mx-6">
        <div className="pt-8">
          <div>
            <h1 className="text-center text-2xl font-robotoblack mb-5">
              Only dishes we'd recommend to family.
            </h1>
            <form className="md:ml-1">
              <div className="text-center md:w-3/4">
                <div>
                  <input
                    autoCapitalize="none"
                    className="bg-white border-orange-400 rounded-t-md pl-6 py-4 w-11/12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                    placeholder="dumplings, bao, gelato...."
                  />
                </div>
                <div>
                  <button
                    className="bg-primary hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 w-11/12 rounded-b-md shadow-lg text-lg md:text-left md:pl-6"
                    type="button"
                  >
                    Search a dish
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="mobile-hero">
            <HomeHero />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeToEmailList;
