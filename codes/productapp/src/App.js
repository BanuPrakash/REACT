import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import NavbarComponent from './components/NavbarComponent'
import { Route, Routes } from 'react-router-dom';

import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'
import CartComponent from './components/CartComponent'
import Default from './components/Default'
import Details from './components/Details'

function App() {
  return (
    <Container>
      <NavbarComponent />
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={<CartComponent />} />
        <Route path='/form' element={<ProductForm />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </Container>
  );
}

export default App;
