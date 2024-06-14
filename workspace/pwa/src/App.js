import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  let [users, setUsers] = useState();
  useEffect(() =>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setUsers(data));
  }, []);

  return (
    <div className="App">
      <h1>Users</h1>
      {
        users && users.map(user => <div key={user.id}>
            <h2>{user.name} , {user.email}</h2>
        </div>)
      }
    </div>
  );
}

export default App;
