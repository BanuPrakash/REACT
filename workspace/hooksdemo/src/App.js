import { useState } from 'react';
import './App.css';
import StateExample from './components/StateExample';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import PersonProvider from './context/PersonProvider';
import First from './context/First';
import Counter from './components/Counter';

function App() {
  let [id, setUserId] = useState(1);
  return (
    <div className="App">
      Reducer Example
      <Counter />
      <hr />
      <StateExample />
      <hr />
      <PersonProvider>
        <First />
      </PersonProvider>
      <hr />
      <div className='row'>
        <div className='col-md-6'>
          <Users setNewUser={setUserId} />
        </div>
        <div className='col-md-6'>
          <UserDetail id={id}/>
        </div>
      </div>
    </div>
  );
}

export default App;
