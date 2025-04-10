import './App.css';
import { lazy, Suspense, useContext } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Default from './components/Default';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Badge } from 'react-bootstrap'
import { useAppSelector } from './redux/store';
import Customers from './components/Customers';
import Posts from './components/Posts';
// FCP issues can be resolved
const Cart = lazy(() => import('./components/Cart'));
const Details = lazy(() => import('./components/Details'));
const ProductForm = lazy(() => import('./components/ProductForm'));


function App() {
  let { quantity } = useAppSelector(state => state.cart)
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Products App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/cart">Cart <Badge>{quantity}</Badge></Nav.Link>
            <Nav.Link as={Link} to="/new_product">Product Form</Nav.Link>
            <Nav.Link as={Link} to="/customers">Customers</Nav.Link>
            <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path='/products' element={<ProductList />} />
        <Route path='/cart' element={
          <Suspense fallback={<div>Loading Cart....</div>}>
            <Cart />
          </Suspense>
        } />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/new_product' element={<ProductForm />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/' element={<ProductList />} />
        <Route path='*' element={<Default />} />
      </Routes>
    </div>
  );
}

export default App;


// connect(mapStateToProps, mapDispatchToProps)(App); --> not required