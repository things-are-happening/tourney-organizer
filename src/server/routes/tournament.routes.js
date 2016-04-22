import {createTournament, getTournament} from './../controllers/tournament.ctrl'

module.exports = app => {
	app.post(`api/tournament`, createTournament)
	app.route(`api/tournament/:tournamentId`)
	.get(getTournament)
}