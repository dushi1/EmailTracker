import { render } from 'react-dom';
import React from 'react'
import App from './components/App.js';
import store from './store/store.js';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
