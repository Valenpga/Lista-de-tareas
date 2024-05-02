const express = require('express')
const dbConnection = require('./config/config')
const app = express()
require('dotenv').config
const PORT = process.env.PORT || 3000;
const routes = require('./routes/taskRoutes')

app.use('/', routes)
app.get('/favicon.ico', (req, res) => {
    res.status(204).end(); 
  });

dbConnection()

app.listen(PORT, () => {
    console.log(`Express esta escuchando en el puerto http://localhost:${PORT}`)
})