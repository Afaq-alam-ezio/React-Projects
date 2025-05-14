import { useState } from 'react';
import InputBox from './Component/Input.jsx'
import CurrencyApi from './Hooks/CurrencyApi.js'



function App() {
    
  let [From, setFrom] = useState('usd');
  let [To, setTo] = useState('inr');
  let [amount, setAmount] = useState(0);
  let [convertedAmount, setConvertedAmount] = useState(0);

  let allCurrency = CurrencyApi(From);
  let allCurrencyKeys = Object.keys(allCurrency);


  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('https://images.pexels.com/photos/5458393/pexels-photo-5458393.jpeg')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          setConvertedAmount( amount * allCurrency[To].toFixed(2))

                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              onAmountChange={(amount) => setAmount(amount)}
                              chosenCurrency={From}
                              currencyList={allCurrencyKeys}
                              onChangeChosenCurrency={(currency) => setFrom(currency)}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={convertedAmount}
                              onAmountChange={(amount) => setAmount(amount)}
                              chosenCurrency={To}
                              currencyList={allCurrencyKeys}
                              onChangeChosenCurrency={(currency) => setTo(currency)}
                              
                              
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {From.toUpperCase()} to {To.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );
}

export default App
