import Tournament from './../models/Tournament'
import {crudCreate, crudReadOne} from './../helpers/crud'
import {generateKey} from './../helpers/utils'

export function createTournament(req, res) {
	req.body.tournamentId = generateKey(Tournament, `tournamentId`)
	crudCreate(Tournament, req.body)
		.then(tournament => {
			return res.status(200).send(tounament)
		})
		.catch(err => {
			return res.status(400).send(err)
		})
}

export function getTournament(req, res) {
	let query = {
		tournamentId: req.params.tournamentId
	}
	crudReadOne(Tournament, query)
		.then(tournament => {
			return res.status(200).send(tournament)
		})
		.catch(err => {
			return res.status(400).send(err)
		})
}
