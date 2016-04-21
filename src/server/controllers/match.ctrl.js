import Match from './../models/Match'
import {crudCreate, crudReadOne} from './../helpers/crud'
import {generateKey} from './../helpers/utils'

/**
  Generate amount of matchs from start to final depending on amount of teams
**/

export function createMatch(req, res) {
	crudCreate(Match, req.body)
		.then(match => {
			return res.status(200).send(match)
		})
		.catch(err => {
			return res.status(400).send(err)
		})
}

export function getMatch(req, res) {
	let query = {
		_id: req.query._id
	}
	crudReadOne( Match, query )
		.then(match => {
			return res.status(200).send(match)
		})
		.catch(err => {
			return res.status(400).send(err)
		})
}
