const { expect } = require('chai')
const constants = require('../constants')

describe('Test /currencies', () => {
  describe('Check USD is being processed', () => {
    it('USD should be available as base (1) currency', () => {
      const Currencies = require('../controllers/currencies-controller')
      const currencies = new Currencies(`./resources/${constants.fileName.example}.json`)
      const json = currencies.getCurrencies()

      expect(json.data.USD.value).to.equal(1)
    })
  })
})