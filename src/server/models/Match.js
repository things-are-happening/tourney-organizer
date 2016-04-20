import _               from 'lodash'
import mongoose        from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

let deepPopulate = require('mongoose-deep-populate')(mongoose)

let Schema = mongoose.Schema

const MatchSchema = new Schema({
  round: Array,
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: `Team`
    }
  ],
  score: Array,
  date: Date,
  extra: Array
},{timestamp: true, versionKey: false})

MatchSchema.plugin(uniqueValidator)
MatchSchema.plugin(deepPopulate)

export default mongoose.model(`Match`, MatchSchema)
