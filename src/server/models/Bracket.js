import _               from 'lodash'
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
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: `Team`,
      required: true
    }
  ],
  // teams: Array,
  results: Array,
  matches: Array
  // NOTE: `tournament` feature still WIP
  // tournament: {
  //   type: Schema.Types.ObjectId,
  //   ref: `Tournament`
  // }
},{timestamp: true, versionKey: false})

BracketSchema.plugin(uniqueValidator)
BracketSchema.plugin(deepPopulate)

export default mongoose.model(`Bracket`, BracketSchema)
