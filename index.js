// - Configuration

const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors")
const bodyParser = require('body-parser')
const cron = require('node-cron')
const crontabline = "0 0/6 * * *"
// const crontabline = "56 5,11,17,23 * * *"
// const crontabline = "*/15 * * * * *"

const Currencies = require('./controllers/currencies-controller')

// - Middleware

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// - Cron jobs

cron.schedule(crontabline, async () => {
  console.log("---------------------")
  console.log("running cron task")

  const currencies = new Currencies()
  currencies.updateCurrencies()
})

// - Routes

app.post('/', async (req, res, next) => {
  if (process.env.UPDATE_KEY !== null) {
    const { key } = req.body
    if (process.env.UPDATE_KEY === key) {
      const currencies = new Currencies()
      await currencies.updateCurrencies()
      res.send('Updated successfully')
    } else {
      next('Wrong key')
    }
  } else {
    console.log('This operation is not configured')
    next('This operation is not configured')
  }
})

app.get('/', async (req, res) => {
  const currencies = new Currencies()
  const json = await currencies.getCurrencies()
  res.send(json)
})

// - Start

app.listen(port, () => {
  console.log(`Currency app listening on port ${port}`)

  const parser = require('cron-parser')
  const interval = parser.parseExpression(crontabline)
  for (let i = 0; i < 5; i++) {
    console.log('Next cron job run:', interval.next().toISOString())
  }
})
