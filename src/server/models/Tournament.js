import mongoose 	   from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

let deepPopulate = require(`mongoose-deep-populate`)(mongoose)

let Schema = mongoose.Schema

const TournamentSchema = new Schema({
	name: {
		type: String,
	 	required: true
	},
	tournamentId: {
		type: String,
		required: true,
		unique: true
	},
	players: Array,
	owner: {
		type: Schema.Types.ObjectId,
		ref: `User`
	},
	teams: [{
		type: Schema.Types.ObjectId,
		ref: `Team`
	}]
}, {timestamp: true, versionKey: false})

TeamSchema.plugin(uniqueValidator)
TeamSchema.plugin(deepPopulate)

export default mongoose.model(`Tournament`, TournamentSchema)
