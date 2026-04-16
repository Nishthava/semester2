import { useState } from 'react'
import StandardEvent from './standardevent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <StandardEvent />
    </div>
  )
}
function Demo(){
  const[query , setQuery] = useState('');
  const [results , setResults] = useState([]);
  const [seconds , setSeconds] = useState(0);
   
  //Mounting
}

export default App