constants = require('../constants')

class Currencies {
  fs = require('fs')

  constructor(filepath = `./resources/${constants.fileName.latest}.json`) {
    this.filepath = filepath
  }

  getCurrencies(params) {
    const text = this.fs.readFileSync(this.filepath).toString()
    let json = JSON.parse(text)
    this.#addCalculatedCurrencies(json)
    return json
  }

  async updateCurrencies(params) {
    const axios = require('axios')
    const config = {
      headers:{
        apikey: process.env.API_KEY
      }
    }
    const response = await axios.get('https://api.currencyapi.com/v3/latest/', config)
    const json = response.data
    console.log(json)
    this.fs.writeFileSync(`./resources/${constants.fileName.latest}.json`, JSON.stringify(json))
  }

  #addCalculatedCurrencies(currenciesJson) {
    currenciesJson.data.VES = {
      code: "VES",
      value: currenciesJson.data.VEF.value / 100000
    }
  }
}

module.exports = Currencies