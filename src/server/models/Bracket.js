import mongoose        from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

let deepPopulate = require('mongoose-deep-populate')(mongoose)

let Schema = mongoose.Schema

const BracketSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  teams: [
    {
      name: {
        type:String,
        required: true
      },
      players: Array,
      wonRounds: Array
      // what will be the best way to do this?
      // array of won round Ids?
    }
  ],
  bracket: [
    {
      round: {
        roundId: Number,
        matches: Array // [[teamId, teamId], [teamId, teamId], [teamId, teamId]]
      }
    }
  ],
  // NOTE: `tournament` feature still WIP
  // tournament: {
  //   type: Schema.Types.ObjectId,
  //   ref: `Tournament`
  // }
},
{
  timestamp: true,
  versionKey: false
})

BracketSchema.plugin(uniqueValidator)
BracketSchema.plugin(deepPopulate)

export default mongoose.model(`Bracket`, BracketSchema)
