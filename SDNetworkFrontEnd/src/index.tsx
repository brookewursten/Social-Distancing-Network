import React from 'react';
import ReactDOM from 'react-dom';
import './index.sass';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/reducer';
import { composeWithDevTools  } from 'redux-devtools-extension'
import './bootstrap/bootstrap-modal.css';


const store = createStore(reducer,  composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
