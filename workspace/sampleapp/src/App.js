import logo from './logo.svg';
import './App.css'; // css-loader and style-loader
import { lazy, useState, Suspense } from 'react';
// import MyComponent from './MyComponent';
const MyComponent = lazy(() => import('./MyComponent'));

function App() {
  let [count, setCount] = useState(0);
  return (
    <div className='App'>
      <h1>App Component</h1>
      <Suspense fallback={<h1>Loading mycomponent...</h1>}>
        <MyComponent count={count} /> <br />
      </Suspense>
     
      <button type="button" onClick={() => setCount(count => count + 1)}>Increment</button>
    </div>
  );
}

export default App;
