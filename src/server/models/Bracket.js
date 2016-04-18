import mongoose        from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

let deepPopulate = require('mongoose-deep-populate')(mongoose)

let Schema = mongoose.Schema

const BracketSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  bracketId: {
    type: String,
    required: true,
    unique: true
  },
  // teamsInfo could be a reference to `Team` Schema
  teamsInfo: [
    {
      type: Schema.Types.ObjectId,
      ref: `Team`
    }
  ],
  results: Array,
  teams: Array
  // NOTE: `tournament` feature still WIP
  // tournament: {
  //   type: Schema.Types.ObjectId,
  //   ref: `Tournament`
  // }
},{timestamp: true, versionKey: false})

BracketSchema.plugin(uniqueValidator)
BracketSchema.plugin(deepPopulate)

export default mongoose.model(`Bracket`, BracketSchema)
