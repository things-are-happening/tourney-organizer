import mongoose 	   from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

let deepPopulate = require(`mongoose-deep-populate`)(mongoose)

let Schema = mongoose.Schema

const TeamSchema = new Schema({
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

TeamSchema.plugin(uniqueValidator)
TeamSchema.plugin(deepPopulate)

export default mongoose.model(`Team`, TeamSchema)
