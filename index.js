const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const Currencies = require('./controllers/currencies-controller')
  const currencies = new Currencies()
  const json = currencies.getCurrencies()
  res.send(json)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
