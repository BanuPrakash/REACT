import React, { Suspense, lazy } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css';
import NavbarComp from './components/NavbarComp'; //eAGEr loading
import ProductList from './components/ProductList'; // EAGER loading
import Default from './components/Default';
import Customers from './components/Customers';
// lazy loading should be after regular imports
const CartComp = lazy(() => import('./components/CartComp'));
const ProductForm = lazy(() => import('./components/ProductForm'));
const Details = lazy(() => import('./components/Details'));

function App() {
  return (
     <div>
      <NavbarComp />
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={
          <Suspense fallback={<h1>Loading Cart...</h1>}>
            <CartComp />
          </Suspense>

        } />
        <Route path="/new_product" element={
          <Suspense fallback={<h1>Loading Form...</h1>}>
            <ProductForm />
          </Suspense>
        } />
        <Route path="/details/:id" element={
          <Suspense fallback={<h1>Loading Details...</h1>}>
            <Details />
          </Suspense>
        } />
        <Route path='/customers' element={<Customers />} />
        <Route path="/" element={<ProductList />} />
        <Route path="*" element={<Default />} />
      </Routes>
   </div>
  );
}

export default App;
