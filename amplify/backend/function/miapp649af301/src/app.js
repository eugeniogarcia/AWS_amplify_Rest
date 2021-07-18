var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

//Importamos Axios
// Import axios
const axios = require('axios')

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
  // Url
  let apiUrl = `https://api.coinlore.com/api/tickers?start=0&limit=10`

  // Check if there are any query string parameters
  // If so, reset the base url to include them
  if (req.apiGateway && req.apiGateway.event.queryStringParameters) {
    const { start = 0, limit = 10 } = req.apiGateway.event.queryStringParameters
    apiUrl = `https://api.coinlore.com/api/tickers/?start=${start}&limit=${limit}`
  }
  
  // Hacemos la llamada
  axios.get(apiUrl)
    .then(response => {
      res.json({ coins: response.data.data })
    })
    .catch(err => res.json({ error: err }))

})

app.listen(3000, function() {
    console.log("App started")
});

module.exports = app
