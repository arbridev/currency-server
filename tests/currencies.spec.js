const { expect } = require("chai");

describe('Test /currencies', () => {
    describe('Check USD is published', () => {
        it('USD should be there', () => {
            const Currencies = require('../controllers/currencies-controller')
            const currencies = new Currencies()
            const json = currencies.getCurrencies()

            expect(json.data.USD.value).to.equal(1)
        })
    })
})