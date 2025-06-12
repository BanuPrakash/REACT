import logo from './logo.svg';
import React, { lazy, Suspense } from 'react'

import './App.css';
import { Container } from 'react-bootstrap'
import NavbarComponent from './components/NavbarComponent'
import { Route, Routes } from 'react-router-dom';

import ProductList from './components/ProductList'
import Default from './components/Default'
import ProductForm from './components/ProductForm'

// Lazy loaded 
const CartComponent = React.lazy(() => import('./components/CartComponent'));

// const Details = React.lazy(() => import('./components/Details'));

function App() {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<div>Loading Cart...</div>}>
            <CartComponent />
          </Suspense>
        } />
        <Route path='/form' element={<ProductForm />} />
         {/* <Route path='/details/:id' element={<Details />} />  */}
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Container>
  );
}

export default App;
