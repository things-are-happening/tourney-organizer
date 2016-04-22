import mongoose 	   from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

let deepPopulate = require(`mongoose-deep-populate`)(mongoose)

let Schema = mongoose.Schema

const TournamentSchema = new Schema({
	sport: {
		type: String,
		required: true
	}
	name: {
		type: String,
		required: true
	},
	tournamentId: {
		type: String,
		required: true,
		unique: true
	},
	owner: {
		type: Schema.Types.ObjectId,
		ref: `User`
	},
	teams: Number,
	bracket: Array
}, {timestamp: true, versionKey: false})

TeamSchema.plugin(uniqueValidator)
TeamSchema.plugin(deepPopulate)

export default mongoose.model(`Tournament`, TournamentSchema)
