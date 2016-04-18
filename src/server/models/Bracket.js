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
  teamsInfo: [
    {
      name: {
        type:String,
        required: true
      },
      players: Array,
      wonRoundsIds: Array
    }
  ],
  results: Array,
  teams: Array // presave create this from teamsInfo.name
  // NOTE: `tournament` feature still WIP
  // tournament: {
  //   type: Schema.Types.ObjectId,
  //   ref: `Tournament`
  // }
},{timestamp: true, versionKey: false})

BracketSchema.plugin(uniqueValidator)
BracketSchema.plugin(deepPopulate)
BracketSchema.pre(`save`, (next) => {

  return next()
})
export default mongoose.model(`Bracket`, BracketSchema)
