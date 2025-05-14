import { useState } from "react";


function App(props) {
  let [color, setColor] = useState("navy");

  return (
   
    <div className="w-screen h-screen" style = {{backgroundColor: color}}> 

      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-2 bg-sky-700 rounded-full ">

        <div className="flex flex-wrap justify-center gap-2 shadow-lg px-2 py-2 gap-x-10">

            <button className="text-black px-2" style={{backgroundColor:"red"}} onClick={() => setColor(color = props.shades[0])}>Red</button>
            <button className="text-black px-2" style={{backgroundColor:"white"}} onClick={() => setColor(color = props.shades[1])}>white</button>
            <button className="text-black px-2" style={{backgroundColor:"Pink"}} onClick={() => setColor(color = props.shades[2])}>pink</button>
            <button className="text-black px-2" style={{backgroundColor:"orange"}} onClick={() => setColor(color = props.shades[3])}>orange</button>
            <button className="text-black px-2" style={{backgroundColor:"blue"}} onClick={() => setColor(color = props.shades[4])}>blue</button>
            <button className="text-black px-2" style={{backgroundColor:"green"}} onClick={() => setColor(color = props.shades[5])}>green</button>
        </div>

      </div>

    </div>
   
  )
}

export default App
