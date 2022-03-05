
import './App.css';
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  function clickHandler(e) {
    switch (e.target.className) {
      case "inc":
        setCounter(prev => prev + 1)
        break;
      case "dec":
        setCounter(prev => prev - 1)
        break;
      default:
        break;
    }
  }
  return (
    <div className="App">
      <div className='container'>
        <button className='dec' onClick={clickHandler}>decrease</button>
        <div className='display'>{counter}</div>
        <button className='inc' onClick={clickHandler}>Increase</button>
      </div>
    </div>
  );
}

export default App;
