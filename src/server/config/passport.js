let LocalStrategy = require('passport-local').Strategy

module.exports = (passport, model) => {
    passport.serializeUser((user, done) => {
      done(null, user._id)
    })

    passport.deserializeUser((username, done) => {
      model.find({username: username}, (err, user) => {
        done(err, user)
      })
    })

    passport.use( 'localLogin', new LocalStrategy(
      // {
      //
      // },
    (username, password, done) => {
      model.findOne({username: username}, (err, user) => {
        if(err)
          return done(err)
        if(!user)
          return done(null, false, {message: `Wrong username`})
        if(!user.validPassword(password))
          return done(null, false, {message: `Bad Password`})
        return done(null, user)
      })
    }) )
}
