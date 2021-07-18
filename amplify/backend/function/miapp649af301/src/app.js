var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "*")
  next()
});

//Devuelve la lista de criptomonedas
app.get('/coins', function (req, res) {
  const coins = [
    { name: 'Bitcoin', symbol: 'BTC', price_usd: "10000" },
    { name: 'Ethereum', symbol: 'ETH', price_usd: "400" },
    { name: 'Litecoin', symbol: 'LTC', price_usd: "150" }
  ]
  res.json({
    coins
  })
})

app.listen(3000, function() {
    console.log("App started")
});

module.exports = app
