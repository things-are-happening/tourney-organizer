import {createMatch, getMatch} from './../controllers/match.ctrl'

module.exports = app => {
  app.route(`/api/match`)
    .post(createMatch)
    .get(getMatch)
    // .patch()
    // .put()
    // .delete()
}
