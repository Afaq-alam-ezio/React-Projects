import { useState } from 'react'

function App() {

  let [count, setCount] = useState(15);

  let AddCount = () => {

    if(count >= 20){

      alert("Value limit above 20 not allowed");
    }
    else{

      setCount(count + 1);
    } 
  }

  let removeCount = () => {

    if(count <= 0){

      alert("Value limit below 0 not allowed");
    }
    else{

      setCount(count - 1);
    } 
  }

  return (
    <>
      <h1>Current Value = {count}</h1>

      <button onClick={AddCount}>Add</button>

      <button onClick={removeCount}>Remove</button>
    </>
  )
}

export default App
