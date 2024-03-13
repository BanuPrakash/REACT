import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'; // Css-loader and style-loader takes care
import ProductContextProvider from './context/ProductContext';
import CartContextProvider from './context/CartContext';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ProductContextProvider >
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
