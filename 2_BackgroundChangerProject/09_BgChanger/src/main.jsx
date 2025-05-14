import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

let arr = ["red", "white", "pink", "orange", "blue", "green"];

createRoot(document.getElementById('root')).render(
  
  <div>

    <App shades = {arr}/>
  </div>
    

)
