const express = require('express')
const app = express()
PORT = 3000

dbconnect()

app.listen(PORT, () => {
    console.log(`Express esta escuchando en el puerto http://localhost:${PORT}`)
})