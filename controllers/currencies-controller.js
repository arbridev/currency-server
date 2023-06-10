class Currencies {
    constructor() {}
    getCurrencies(params) {
        const fs = require('fs');
        const text = fs.readFileSync('./resources/example.json').toString()
        const json = JSON.parse(text)
        return json
    }
}

module.exports = Currencies