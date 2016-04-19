import {createTeam, getTeam} from './../controllers/team.ctrl'

module.exports = app => {
  app.post(`/api/team`, createTeam)
  app.route(`/api/team/:teamId`)
    .get(getTeam)
}
