import express from 'express'

let app = express()

require(`${__dirname}/config/middleware`)(app)
require(`${__dirname}/routes/bracket.routes`)(app)
<<<<<<< HEAD
require(`${__dirname}/routes/team.routes`)(app)
require(`${__dirname}/routes/tournament.routes.js`)(app)
=======
require(`${__dirname}/routes/match.routes`)(app)
require(`${__dirname}/routes/team.routes`)(app)
>>>>>>> 92c6b6e0814c28166f9c48fd2662ef68cea645b1
