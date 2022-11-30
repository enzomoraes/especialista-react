import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import GlobalStyles from './core/globalStyles';
import './core/imports.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './core/store';

const rootElement = document.getElementById('root') as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
