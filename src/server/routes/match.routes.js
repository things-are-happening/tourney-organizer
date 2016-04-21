import {createRound, getRound} from './../controllers/round.ctrl'

module.exports = app => {
  app.route(`/api/round`)
    .post(createRound)
    .get(getRound)
    // .patch()
    // .put()
    // .delete()
}
