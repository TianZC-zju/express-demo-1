const express = require('express')
const app = express()
const port = 3400

app.get('/', (req, res) => {
    res.send('Hello World4!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
