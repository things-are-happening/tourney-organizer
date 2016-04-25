// import Match from './../models/Match'
// import {crudCreate, crudReadOne} from './../helpers/crud'
// import {generateKey} from './../helpers/utils'

// /**
//   Generate amount of matchs from start to final depending on amount of teams
// **/

// export function createMatch(req, res) {
// 	crudCreate(Match, req.body)
// 		.then(match => {
// 			return res.status(200).send(match)
// 		})
// 		.catch(err => {
// 			return res.status(400).send(err)
// 		})
// }

// export function getMatch(req, res) {
// 	let query = {
// 		_id: req.query._id
// 	}
// 	crudReadOne( Match, query )
// 		.then(match => {
// 			return res.status(200).send(match)
// 		})
// 		.catch(err => {
// 			return res.status(400).send(err)
// 		})
// }

var Match = require('./../models/Match');

//find many query:
var handleGetAll = function(req, res) {
	Client.find(req.query, function(error, response) {
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
	Client.findById(req.params.id, function(error, response) {
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
	new Client(req.body).save(function(error, response) {
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
	Client.findByIdAndUpdate(req.params.id, req.body, function(error, response) {
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
	Client.findByIdAndRemove(req.params.id, function(error, response) {
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
