import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

//Autenticación con Amplify
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

// Para llamar a APIs publicadas con Amplify
import { API } from 'aws-amplify'


function App() {
  const [coins, updateCoins] = useState([])
  async function fetchCoins() {
    const data = await API.get('cryptoapi', '/coins',null)
    updateCoins(data.coins)
  }
  // Call fetchCoins function when component loads
  useEffect(() => {fetchCoins()}, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Hola desde AWS Amplify</h1>
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