const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const app = express()

// environment variables
app.set('port', process.env.PORT || 4001)

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/transactions',require('./routers/transaction.router'))

module.exports = app;