const express = require('express')
const app = express()
const port = 3000
const cron = require('node-cron')
const crontabline = "0 0/6 * * *"
// const crontabline = "58 5,11,17,23 * * *"
// const crontabline = "*/15 * * * * *"

cron.schedule(crontabline, async () => {
  console.log("---------------------")
  console.log("running cron task")

  const axios = require('axios')
  const fs = require('fs')
  const config = {
    headers:{
      apikey: process.env.API_KEY
    }
  }
  const response = await axios.get('https://api.currencyapi.com/v3/latest/', config)
  const json = response.data
  console.log(json)
  fs.writeFileSync('./resources/latest.json', JSON.stringify(json))
})

app.get('/', async (req, res) => {
  const Currencies = require('./controllers/currencies-controller')
  const currencies = new Currencies()
  const json = currencies.getCurrencies()
  res.send(json)
})

app.listen(port, () => {
  console.log(`Currency app listening on port ${port}`)

  const parser = require('cron-parser')
  const interval = parser.parseExpression(crontabline)
  for (let i = 0; i < 5; i++) {
    console.log('Next cron job run:', interval.next().toISOString())
  }
})
