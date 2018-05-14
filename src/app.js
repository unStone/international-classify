import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RouteConfig from './route';
import store from './redux/store';

import './index.less'

ReactDOM.render(
  <div className="full">
    <Provider store={store}>
      {RouteConfig}
    </Provider>
  </div>,
  document.getElementById('app')
); 