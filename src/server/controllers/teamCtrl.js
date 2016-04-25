// import Team from './../models/Team'
// import {crudCreate, crudReadOne} from './../helpers/crud'
// import {generateKey} from './../helpers/utils'

// export function createTeam(req, res) {
// 	req.body.teamId = generateKey(Team, `teamId`)
// 	crudCreate(Team, req.body)
// 		.then(team => {
// 			return res.status(200).send(team)
// 		})
// 		.catch(err => {
// 			return res.status(400).send(err)
// 		})
// }

// export function getTeam(req, res) {
// 	let query = {
// 		teamId: req.params.teamId
// 	}
// 	crudReadOne(Team, query)
// 		.then(team => {
// 			return res.status(200).send(team)
// 		})
// 		.catch(err => {
// 			return res.status(400).send(err)
// 		})
// }

var Team = require('./../models/Team');

//find many query:
var handleGetAll = function(req, res) {
	Team.find(req.query, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
};
/////
//find one query:
var handleGetOne = function(req, res) {
	Team.findById(req.params.id, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
//post query:
var handlePost = function(req, res) {
	new Team(req.body).save(function(error, response) {
		console.log("response", response);
		if(error) {
			res.status(500).json(error)
		} else {
			res.send(response)
		}     
	})
}
/////
//update query:
var handlePut = function(req, res) {
	Team.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////
//remove update query:
var handleDelete = function(req, res) {
	Team.findByIdAndRemove(req.params.id, function(error, response) {
		if(error) {
			res.status(500).json(error)
		} else {
			res.json(response)
		}
	})
}
/////

module.exports = {
	getAll: handleGetAll,
	getOne: handleGetOne,
	post: handlePost,
	put: handlePut,
	delete: handleDelete
};
