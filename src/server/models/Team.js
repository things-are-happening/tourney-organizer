// import mongoose 	   from 'mongoose'
// import uniqueValidator from 'mongoose-unique-validator'

// let deepPopulate = require(`mongoose-deep-populate`)(mongoose)
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var teamSchema = new Schema({
	name: {
		type: String,
	 	required: true
	},
	teamId: {
		type: String,
		required: true,
		unique: true
	},
	players: Array,
	owner: {
		type: Schema.Types.ObjectId,
		ref: `User`
	},
	tournaments: [{
		type: Schema.Types.ObjectId,
		ref: `Tournament`
	}]
}, {timestamp: true, versionKey: false})

module.exports =  mongoose.model('Team', teamSchema)

// TeamSchema.plugin(uniqueValidator)
// TeamSchema.plugin(deepP opulate)


