import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '../assets/style.scss';
import TastiestLogo from '../assets/svgs/brand.svg';
import { CuisineBar } from '../components/CuisineBar/CuisineBar';
import NavBar from '../components/NavBar';
import { SearchOverlay } from '../components/search/SearchOverlay';
import { rootReducer } from '../state/reducers';

const store = createStore(rootReducer);

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  console.log(router);

  const inputRef = useRef(null);
  const password = 'tastiest';

  // Focus input on load
  useEffect(() => {
    setTimeout(() => {
      inputRef?.current?.focus();
    }, 0);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleOnChange = e => {
    if (e?.target?.value?.toLowerCase() === password) {
      setIsLoggedIn(true);
    }
  };

  console.log(`[env]`, process);

  return (
    <Provider store={store}>
      {isLoggedIn ? (
        <>
          <NavBar />
          <CuisineBar />
          <SearchOverlay />
          <Component {...pageProps} />
        </>
      ) : (
        <div className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0">
          <div className="flex flex-col justify-center -m-8 items-center">
            <TastiestLogo className="h-12 my-6" />
            <p className="font-robotolight text-base">
              Enter the password to continue
            </p>
            <input
              ref={inputRef}
              className="my-2 border-secondary border-2 rounded-lg focus:outline-none focus:border-primary pl-2 py-1 text-center"
              onChange={handleOnChange}
            />
            <h1 className="font-somantic text-secondary text-twoxl pt-8">
              Discover. Eat. Smile.
            </h1>
          </div>
        </div>
      )}
    </Provider>
  );
}

export default App;
