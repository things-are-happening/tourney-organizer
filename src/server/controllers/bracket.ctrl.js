import _                         from 'lodash'
import Bracket                   from './../models/Bracket'
import {crudCreate, crudReadOne} from './../helpers/crud'
import {generateKey}             from './../helpers/utils'

const generateMatches = data => {
  let matches
  for(let i = 0; i < data.length; i++){
    matches = _.chunk(data, 2)
  }
  for(let j = 0; j < matches.length; j++){
    for(let k = 0; k < matches[j].length; k++){
      matches[j][k] = data.indexOf(matches[j][k])
    }
  }
  return matches
}

export function createBracket (req, res) {
  req.body.bracketId = generateKey( Bracket, `bracketId` )
  req.body.matches = generateMatches( req.body.teams )
  crudCreate( Bracket, req.body )
    .then( bracket => {
      return res.status(200).send(bracket)
    })
    .catch( err => {
      return res.status(400).send(err)
    })
}

export function getBracket(req, res) {
  let popObj = {}
  if(req.query.popStr){
    popObj.idName = `bracketId`
    popObj.str = req.query.popStr
  }
  let query = {
    bracketId: req.params.bracketId
  }
  crudReadOne( Bracket, query, popObj )
    .then( bracket => {
      return res.status(200).send(bracket)
    })
    .catch( err => {
      return res.status(400).send(err)
    })
}
