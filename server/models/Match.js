// import _               from 'lodash'
// import mongoose        from 'mongoose'
// import uniqueValidator from 'mongoose-unique-validator'

// let deepPopulate = require('mongoose-deep-populate')(mongoose)
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var match = new Schema({
  round: Array,
  teams: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Team'
    }
  ],
  score: Array,
  date: Date,
  extra: Array
},{timestamp: true, versionKey: false})


module.exports = mongoose.model(`Match`, match)
// MatchSchema.plugin(uniqueValidator)
// MatchSchema.plugin(deepPopulate)


