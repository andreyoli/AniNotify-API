require('dotenv').config()
const express = require('express')
const app = express()
const routes = require('./routes')

app.use(express.json())
app.use(routes)

module.exports = app
