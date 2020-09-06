function SubscribeToEmailList(): JSX.Element {
  return (
    <div className="bg-orange-200 mt-8 justify-center">
      <div className="mx-6">
        <div className="pt-8">
          <div>
            <h1 className="text-center text-2xl font-black mb-5">
              Only dishes we&aposd reccomend to family.
            </h1>
            <form>
              <div className="text-center">
                <div className="">
                  <input
                    autoCapitalize="none"
                    className="bg-white border-orange-400 rounded-t-md pl-6 py-4 w-11/12 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                    placeholder="email..."
                  />
                </div>
                <div className="mb-5">
                  <button
                    className="bg-primary hover:bg-orange-400 focus:shadow-outline focus:outline-none text-white font-bold py-4 w-11/12 rounded-b-md shadow-lg text-lg"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
            <p className="text-center text-xs mb-4 font-thin">
              You&aposll get an email when we discover another dish.
            </p>
          </div>
          <div className="h-32 mb-20">
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
