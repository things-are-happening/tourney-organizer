import Team from './../models/Team'
import {crudCreate, crudReadOne} from './../helpers/crud'
import {generateKey} from './../helpers/utils'

export function createTeam(req, res) {
	req.body.teamId = generateKey(Team, `teamId`)
	crudCreate(Team, req.body)
		.then(team => {
			return res.status(200).send(team)
		})
		.catch(err => {
			return res.status(400).send(err)
		})	
}

export function getTeam(req, res) {
	let query = {
		teamId: req.params.teamId
	}
	crudReadOne(Team, query)
		.then(bracket => {
			return res.status(200).send(team)
		})
		.catch(err => {
			return res.status(400).send(err)
		})
		
}