import { useState } from 'react';
import './App.css';
import StateExample from './components/StateExample';
import Users from './components/Users';
import UserDetail from './components/UserDetail';

function App() {
  let [id, setUserId] = useState(1);
  return (
    <div className="App">
      <StateExample />
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
