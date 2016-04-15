import express from 'express'

const app = express()

require(`${__dirname}/config/middleware`)(app)
