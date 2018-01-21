import React from 'react';
import ReactDom from 'react-dom';
import RouterConfig from '../src/router.config'
import App from './components/App';
// 状态管理
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import state from './store/state';
import reducer from './store/reducer';

const store = createStore(reducer,state);

ReactDom.render(
  <Provider store={store}>
    <RouterConfig />
  </Provider>,
  document.querySelector('#app')
  );