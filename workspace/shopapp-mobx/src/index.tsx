import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {enableLogging} from 'mobx-logger'
import cartStore from './mobx/CartStore'; // singleton object

export const CartContext = createContext(cartStore); // global Context to share CartStore
enableLogging(); 


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

