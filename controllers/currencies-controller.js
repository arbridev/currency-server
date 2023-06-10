class Currencies {
    constructor(filepath = './resources/latest.json') {
        this.filepath = filepath
    }
    getCurrencies(params) {
        const fs = require('fs');
        const text = fs.readFileSync(this.filepath).toString()
        const json = JSON.parse(text)
        return json
    }
}

module.exports = Currencies