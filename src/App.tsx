import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

//Autenticación con Amplify
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

// Para llamar a APIs publicadas con Amplify
import { API } from 'aws-amplify'

function App() {
  //Guardamos en el estado la información retornada con la API
  const [coins, updateCoins] = useState([])
  //Criterios de búsqueda
  const [input, updateInput] = useState({ limit: 5, start: 0 })

  function updateInputValues(tipo:string, valor:number) {
    updateInput({ ...input, [tipo]: valor })
  }

  //Llama a la lambda
  async function fetchCoins() {
    const { limit, start } = input
    const data = await API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`,null)
    updateCoins(data.coins)
  }

  // Una vez se construye el DOM, hacemos una llamada a la API y lo actualizamos
  useEffect(() => {fetchCoins()}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Información de Monedas</h1>
      <input
        onChange={e => updateInputValues('limit', Number.parseInt(e.target.value))}
        placeholder="limit"
      />
      <input
        placeholder="start"
        onChange={e => updateInputValues('start', Number.parseInt(e.target.value))}
      />
      <button onClick={fetchCoins}>Obtiene Monedas</button>

      {
        coins.map((coin: { name: string, symbol: string, price_usd: string}, index) => (
          <div key={index}>
            <h2>{coin.name} - {coin.symbol}</h2>
            <h5>${coin.price_usd}</h5>
          </div>
        ))
      }
    </div>
  );
}


export default App;
//export default withAuthenticator(App)