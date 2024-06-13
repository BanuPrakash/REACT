import React, { Suspense, lazy } from 'react';

import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import UserComponent from './components/UserComponent';

const CartComponent = lazy(() => import('./components/CartComponent'));
const ProductForm = lazy(() => import('./components/ProductForm'));


function App() {
  return (
    
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<h1>Loading Cart...</h1>}>
            <CartComponent />
          </Suspense>
        } />
        <Route path='/new_product' element={
          <Suspense fallback={<h1>Loading Form...</h1>}>
            <ProductForm />
          </Suspense>} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/users' element={<UserComponent />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;
