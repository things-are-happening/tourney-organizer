// import Tournament from './../models/Tournament'
// import {crudCreate, crudReadOne} from './../helpers/crud'
// import {generateKey} from './../helpers/utils'
//new

//new

// export function createTournament(req, res) {
// 	req.body.tournamentId = generateKey(Tournament, `tournamentId`)
// 	crudCreate(Tournament, req.body)
// 		.then(tournament => {
// 			return res.status(200).send(tounament)
// 		})
// 		.catch(err => {
// 			return res.status(400).send(err)
// 		})
// }

// export function getTournament(req, res) {
// 	let query = {
// 		tournamentId: req.params.tournamentId
// 	}
// 	crudReadOne(Tournament, query)
// 		.then(tournament => {
// 			return res.status(200).send(tournament)
// 		})
// 		.catch(err => {
// 			return res.status(400).send(err)
// 		})
// }
//
var Tournament = require('./../models/Tournament')
//post query:
var handlePost = function(req, res) {
	Tournament.create(req.body, function(error, response) {
		console.log("response", response);
		if(error) {
			res.status(500).json(error)
		} else {
			res.send(response)
		}
	})
}

/////
//find one query:
var handleGetOne = function(req, res) {
	Tournament.findById(req.params.id, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
//update query:
var handlePut = function(req, res) {
	Tournament.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////


module.exports = {
	getOne: handleGetOne,
	post: handlePost,
	put: handlePut
};