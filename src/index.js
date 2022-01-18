import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createSagaMiddleware from '@redux-saga/core';
import { applyMiddleware, createStore } from 'redux';

import './index.css';
import App from './App';
import setupSocket from './sockets';
import username from './utils/name';
import rootReducer from './reducers/root';
import logger from 'redux-logger';
import { handleNewMessage } from './sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
