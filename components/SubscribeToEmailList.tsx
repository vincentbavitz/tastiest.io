import HomeHero from '../assets/svgs/home-hero.svg';

function SubscribeToEmailList(): JSX.Element {
  return (
    <div className="bg-orange-200 overflow-x-hidden md:mx-8 md:rounded-lg">
      <div className="mx-6">
        <div className="pt-8 md:pt-0 xl:pt-8">
          <div className="">
            <h1 className="text-center text-2xl font-robotolight mb-5 sm:my-2  md:p-5">
              Dishes we'd recommend to family
            </h1>
            <div className="flex justify-center">
              <div className="w-full md:w-7/12 xl:w-5/12">
                <input
                  autoCapitalize="none"
                  className="bg-white border-orange-400 rounded-t-md pl-6 py-4 w-full text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                  placeholder="dumplings, bao, gelato...."
                />
                <div>
                  <button
                    className="bg-primary hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 w-full rounded-b-md shadow-lg text-lg md:pl-6"
                    type="button"
                  >
                    Search a dish
                  </button>
                </div>
              </div>
            </div>
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
