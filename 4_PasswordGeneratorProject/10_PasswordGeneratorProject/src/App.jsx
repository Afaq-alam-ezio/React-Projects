import { useCallback, useEffect, useState, useRef} from 'react'
import './App.css'

function App() {
  let [length, setLength] = useState(8);
  let [numberAllowed, setNumberAllowed] = useState(false);
  let [specialCharacterAllowed, setSpecialCharacterAllowed] = useState(false);
  let [password, setPassword] = useState("");

  let passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "0123456789";
    if(specialCharacterAllowed) str += "!#$%&'()*+,-./:;<=>?@[\\]^_\`{|}~`";

    for (let i = 0; i < length; i++) {
      
        let randindex = Math.floor(Math.random()*str.length);
        pass += str[randindex];
    }

    setPassword(pass);

  }
  , [length, numberAllowed, specialCharacterAllowed, setPassword])

  // useRef here
  let passRef = useRef(null);

  useEffect(() => {

      passwordGenerator();
  }, 
  [length, numberAllowed, specialCharacterAllowed, passwordGenerator])

  let copyPassword = () => {

    passRef.current.select();
    window.navigator.clipboard.writeText(password);
  }

  return (
    <>
      <h1 className='border-2 border-gray-500 rounded-lg p-5 text-pink-300'>Password Generator</h1>

      <div className='border-3 border-gray-500  rounded-lg p-5 mt-3'>

        <div className='border-2 border-white p-5 rounded-full'>

          <input type="text" value={password} ref={passRef}/>
        </div>

        <div className='pt-8 flex justify-center' onClick={copyPassword}>

          <button>Copy</button>
        </div>
           
      </div>

      <div>

        <div className='border-2 rounded-lg p-5 mt-3 gap-x-6 flex items-center'>
          
          <input type="range" min={8} max={25} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
          <label > length : {length}</label>

          <input type="checkbox" defaultChecked = {numberAllowed} onChange={() => setNumberAllowed((prev) => !prev)}/>
          <label>Numbers</label>

          <input type="checkbox" defaultChecked ={specialCharacterAllowed} onChange={() => setSpecialCharacterAllowed((prev) => !prev)}/>
          <label> Special Character</label>
        </div>

      </div>
       
    </>
  )
}

export default App
