#  Currency Server

This is a backend companion server app created for [Quick Personal Finance](https://github.com/arbridev/QuickPersonalFinance).

Check the mobile app on the **[App Store](https://apps.apple.com/app/quickpersonalfinance/id6448765356)**.

## Tooling

- Node
- [currencyapi](https://currencyapi.com/)

### Dependencies

- axios
- cron-parser
- dotenv
- express
- node-cron
- cors
- body-parser

### Development dependencies

- chai
- mocha
- nodemon

## Build

Remember to make available the required `API_KEY` environment variable specified in `env-vars.txt` for the app to work as intended. Make `UPDATE_KEY` available only if you want to update manually, this key should match the key property in the request body (JSON): 
```javascript
{
    "key": "replace_with_the_actual_key"
}
```

## License

Currency Server is released under the MIT license. See [LICENSE](https://github.com/arbridev/currency-server/blob/main/LICENSE) for details.
