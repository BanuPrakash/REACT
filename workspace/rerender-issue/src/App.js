import { useCallback, useState } from 'react';
import './App.css';
import AgeComponent from './AgeComponent';
import NameComponent from './NameComponent';
import SomeComponent from './SomeComponent';

function App() {
  let [name, setName] = useState("Roger");
  let [age, setAge] = useState(18);
  console.log("App re-renders!!!");

  function doTask() {
    console.log("callback!!!")
  }

  // memoize the function definition
  // let doTask = useCallback(() => {
  //     console.log("callback!!!" + age);
  // }, [age]);

  // let doTask = useCallback(() => {
  //        console.log("callback!!!" + age);
  //  }, [age]);
  return (
    <div className="App">
      <AgeComponent age={age} /> <br />
      <NameComponent name={name} /> <br />
      <SomeComponent cb={doTask} />
      <button type='button' onClick={() => setAge(age => age + 1)}>Change Age</button>
      <button type='button' onClick={() => setName(name => name + "..")}>Change Name</button>
    </div>
  );
}

export default App;
