import {createBracket, getBracket} from './../controllers/bracket.ctrl'

module.exports = app => {
  app.post(`/api/bracket`, createBracket)
  app.route(`/api/bracket/:bracketId`)
    .get(getBracket)
}
