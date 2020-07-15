const express = require('express')
const app = express()
const port = 5000
const name = process.env.NAME

    app.get('/', (req, res) => {
        res.send(`Hello ${name} !`)
    })
app.listen(port, () => {
    console.log(`Server ${name} started on port ${port}`)
})