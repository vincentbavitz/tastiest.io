import type { AppProps } from 'next/app';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../state/reducers';

const store = createStore(rootReducer);

function App({ Component, pageProps }: AppProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const password = 'tastiest';

  const handleOnChange = e => {
    if (e.target.value === password) {
      setIsLoggedIn(true);
    }
  };

  return (
    <Provider store={store}>
      {isLoggedIn ? (
        <Component {...pageProps} />
      ) : (
        <div className="flex justify-center items-center">
          <h1>Enter the password to continue</h1>
          <input className="bg-gray-300" onChange={handleOnChange} />
        </div>
      )}
    </Provider>
  );
}

export default App;
