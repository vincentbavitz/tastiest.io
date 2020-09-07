import '../assets/style.css';

function SubscribeToEmailList(): JSX.Element {
  return (
    <div className="bg-orange-200 mt-8 justify-around md:rounded-lg md:pb-32">
      <div className="mx-6 md:mx-10">
        <div className="pt-8 md:pt-20 md:justify-center">
          <div className="md:relative md:z-50">
            <h1 className="text-center text-2xl font-black mb-5 md:mb-6 md:text-4xl md:flex md:ml-10">
              Dishes we would only reccomend to family.
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
          <div className="sm:pb-32 h-32 md:absolute md:-m-64 md:w-7/12 lg:w-5/12 md:right-0 lg:mr-16 xl:w-3/12">
            <img
              src="https://svgshare.com/i/NSw.svg"
              alt="tastiest-hero-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubscribeToEmailList;
