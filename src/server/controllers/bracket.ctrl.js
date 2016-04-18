import Bracket from './../models/Bracket'
import {crudCreate, crudReadOne} from './../helpers/crud'
import {generateKey} from './../helpers/utils'

export function createBracket (req, res) {
  req.body.bracketId = generateKey( Bracket, `bracketId` )
  console.log(req.body);
  crudCreate( Bracket, req.body )
    .then( bracket => {
      return res.status(200).send(bracket)
    })
    .catch( err => {
      return res.status(400).send(err)
    })
}

export function getBracket(req, res) {
  let query = {
    // change this to key id
    bracketId: req.params.bracketId
  }
  crudReadOne( Bracket, query )
    .then( bracket => {
      return res.status(200).send(bracket)
    })
    .catch( err => {
      return res.status(400).send(err)
    })
}
