import React from 'react';
import ReactDOM from 'react-dom';
import './styles/navbar.css'
import './styles/app.css'
import './styles/login.css'
import './styles/registro.css'
import AppRouters from './router/AppRouters';


ReactDOM.render(
  <React.StrictMode>
  <AppRouters />
  </React.StrictMode>,
  document.getElementById('root')
);
