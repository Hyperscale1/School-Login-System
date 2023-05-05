var figlet = require('figlet')
console.log('Starting Electron JS App...')

figlet('Hello World!!', function (err, data) {
    if (err) {
        console.log('Something went wrong...')
        console.dir(err)
        return
    }
    console.log(data)
})
require('./client.js')