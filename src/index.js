import React from 'react';
import ReactDOM from 'react-dom';
import './styles/navbar.css'
import './styles/app.css'
import './styles/login.css'
import './styles/registro.css'
import AppRouters from './router/AppRouters';
import {Provider} from 'react-redux'
import {store} from './store/store'
import { App } from './containers/App';


ReactDOM.render(
  <Provider store={store}>
  <AppRouters/>
  </Provider>,
  document.getElementById('root')
);
