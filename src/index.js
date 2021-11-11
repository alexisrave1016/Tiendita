import React from 'react';
import ReactDOM from 'react-dom';
import './styles/navbar.css'
import './styles/app.css'
import './styles/login.css'
import './styles/registro.css'
import './styles/carrito.css'
import './styles/listarProductos.css'
import AppRouters from './router/AppRouters';
import {Provider} from 'react-redux'
import {store} from './store/store'
import CarritoNuevo from './components/CarritoNuevo';



ReactDOM.render(
  <Provider store={store}>
  {/* <AppRouters/> */}
  <CarritoNuevo/>
  </Provider>,
  document.getElementById('root')
);
