import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [name, setName] = useState("Aish");
  const[counter, setCounter] = useState(0);
  

  useEffect(() => {
    console.log("hello");
  }, [counter]);

  return (
    <div className="App">
      <button onClick={() => setCounter(n=> n+1)}> Click Me</button>
    
      <input onChange={ e => setName(e.target.value)} 
    
      value = {name} />
    </div>
  );
}

export default App;
