import './App.css';
import CustomerList from './components/CustomerList';

// returns JSX
function App() {
  return (
    <div className="App">
      <h1>Customer Application</h1>
      <CustomerList />
    </div>
  );
}

export default App;
