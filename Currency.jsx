import React, { useState } from 'react'
import '../css/currency.css';
import { FaCircleArrowRight } from "react-icons/fa6";
import axios from 'axios'


let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_oKBQkccofa5V7nuL1L0edyK4GKX9GF0tdb1BuOEg";


function Currency() {

  const [amount, setAmount] = useState();
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('TRY');
  const [result, setResult] = useState(0);

  const exchange = async () => {

    const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
    const result = (response.data.data[toCurrency] * amount).toFixed(4);
    setResult(result);

  }



  return (
    <div className='currency-div'>
      <div style={{ fontFamily: 'arial', backgroundColor: 'purple', color: '#fff', width: '100%', textAlign: 'center' }}>
        <h3 >DÖVİZ KURU UYGULAMASI </h3>
      </div >
      <div style={{ marginTop: '25px' }}>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}

          type="number" className='amount' />
        <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>

        <FaCircleArrowRight style={{ fontSize: '20px', marginRight: '10px' }} />

        <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
          <option>TRY</option>
          <option>EUR</option>
          <option>USD</option>
        </select>

        <input value={result} onChange={(e) => setResult(e.target.value)} type="number" className='result' />

      </div>
      <div>
        <button
          onClick={exchange}

          className='exchange-button'>çevir</button>
      </div>

    </div>
  )
}

export default Currency