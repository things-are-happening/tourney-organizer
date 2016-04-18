import express from 'express'

let app = express()

require(`${__dirname}/config/middleware`)(app)
