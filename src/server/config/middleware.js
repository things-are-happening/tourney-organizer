import cookieParser from 'cookie-parser'
import bodyParser   from 'body-parser'
import mongoose     from 'mongoose'
import passport     from 'passport'
import session      from 'express-session'
import express      from 'express'
import morgan       from 'morgan'
import cors         from 'cors'

import {sessionSecret, mongo} from './secrets'

// import User from './../models/User' // Uncomment / Change this for passport

const port = process.env.PORT || 9999

module.exports = app => {

  app.use(bodyParser.json())
  app.use(cookieParser())
  app.use(cors())
  app.use(express.static(`${__dirname}/../../client`))
  app.use(session(sessionSecret))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(morgan(`dev`))

  // require('./passport')(passport, `MODEL NAME`)

  mongoose.connect(mongo.uri)
  mongoose.connection.once(`open`, () => {
    console.log(`Connected to Mongo ${mongo.uri}`)
  })

  app.listen(port, () => {
    console.log(`Listening on ${port}`)
  })

}
