import './App.css';
import ParentComponent from './chunks/ParentComponent';
import CustomerList from './components/CustomerList';

// returns JSX
function App() {
  return (
    <div className="App">
      {/* <h1>Customer Application</h1>
      <CustomerList /> */}
      <ParentComponent />
    </div>
  );
}

export default App;
