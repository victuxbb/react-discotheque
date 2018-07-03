import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import reducers from './components/infrastructure/reducers'

const store = createStore(reducers)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
