import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import LanguageContext from 'context/LanguageContext';
import StoreContextProvider from 'context/StoreContext';
import Router from './router';
import store from './store';
import './styles/index.scss';

ReactDOM.render(
  <LanguageContext.Provider value={navigator.language}>
    <StoreContextProvider>
      <ReduxProvider store={store}>
        <Router />
      </ReduxProvider>
    </StoreContextProvider>
  </LanguageContext.Provider>,
  document.getElementById('root')
);
