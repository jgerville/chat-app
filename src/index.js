import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/root';
import App from './App';
import logger from 'redux-logger';
import { addUser } from './actions';

const store = createStore(rootReducer, applyMiddleware(logger));

store.dispatch(addUser('Me'));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
