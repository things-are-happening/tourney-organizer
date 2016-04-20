import express from 'express'

let app = express()

require(`${__dirname}/config/middleware`)(app)
require(`${__dirname}/routes/bracket.routes`)(app)
require(`${__dirname}/routes/match.routes`)(app)
require(`${__dirname}/routes/team.routes`)(app)
