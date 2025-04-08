
import './App.css';
import CustomerList from './components/CustomerList';

import ParentComponent from './examples/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>Customer List!!!</h1>
      <CustomerList />
      <ParentComponent />
    </div>
  );
}

export default App;
