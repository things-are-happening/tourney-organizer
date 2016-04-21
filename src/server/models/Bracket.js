import _               from 'lodash'
import mongoose        from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

let deepPopulate = require('mongoose-deep-populate')(mongoose)

let Schema = mongoose.Schema

const BracketSchema = new Schema({

},{timestamp: true, versionKey: false})

BracketSchema.plugin(uniqueValidator)
BracketSchema.plugin(deepPopulate)

export default mongoose.model(`Bracket`, BracketSchema)
