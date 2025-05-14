import { useState } from "react"

function App() {

  let [color, setColor] = useState("#ffffff");

  return (
  
  <>

    <div className="text-center mt-10">
        <h1 className="text-4xl font-bold text-indigo-600">Color Picker App</h1>
    </div>

    <div className="text-center mt-4">
        <h3 className="text-lg text-gray-700">Selected Color: {color}</h3>
    </div>

    <div
        style={{ backgroundColor: color }}
        className="mt-4 h-48 w-full rounded-lg border-4 border-gray-200">
        <p className="text-center text-white text-xl mt-20">Selected Color</p>
    </div>
        
    <div>

      <div className="mt-6 text-center">
        <label>
          <input
            type="color"
            onChange={(e) => setColor(e.target.value)}
            className="border-2 p-2 rounded-lg cursor-pointer"/>
        </label>
      </div>

    </div>
  </>
  )
}

export default App
