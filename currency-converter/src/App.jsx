import { useState } from 'react'
import InputCard from './components/InputCard'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [convertedAmount, setConvertedAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)
  console.log('options', options)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  
  const covert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-screen h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`
        }}
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        covert();
                    }}
                >
                    <div className="w-full mb-1">
                        <InputCard
                            label="From"
                            amount={amount}
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            currencyOption = {options}
                            selectCurrency = {from}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            SWAP
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputCard
                            label="To"
                            amount={convertedAmount}
                            amountDisabled={true}
                            onCurrencyChange={(currency) => setTo(currency)}
                            currencyOption = {options}
                            selectCurrency = {to}
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
