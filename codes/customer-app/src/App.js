import './App.css';
import ParentComponent from './chunks2/ParentComponent';
import CustomerList from './components/CustomerList';
import Parent from './context/Parent';
import StateExample from './hooks/StateExample';
import UsersComponent from './hooks/UsersComponent';
import Counter from './reducer/Counter';

// returns JSX
function App() {
  return (
    <div className="App">
       <h1>Customer Application</h1>
      {/* <CustomerList /> 
      <ParentComponent /> */}
      {/* <StateExample /> */}
      {/* <UsersComponent /> */}
      {/* <Counter /> */}
      <Parent />
    </div>
  );
}

export default App;
