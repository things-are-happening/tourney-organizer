// import _ from 'lodash'
// import Bracket from './../models/Bracket'
// import Match from './../models/Match'
// import {crudCreate, crudReadOne} from './../helpers/crud'
// import {generateKey} from './../helpers/utils'

// const generateMatches = (teams, rounds) => {
//   let matches = _.chunk(teams, 2)
//   // NOTE: Create `Match` populate logic here
//   for()
//   crudCreate(Match, )
//   return matches
// }

// export function createBracket (req, res) {
//   req.body.bracketId = generateKey( Bracket, `bracketId` )
//   generateMatches( req.body.teams, req.body.rounds )
//   crudCreate( Bracket, req.body )
//     .then( bracket => {gu

//       *
//         NOTE:
//           -> create rounds based on matches and populate `Match` then update
//           -> `bracket` with set references added to `bracket.rounds`
//       *

//       return res.status(200).send(bracket)
//     })
//     .catch( err => {
//       return res.status(400).send(err)
//     })
// }

// export function getBracket(req, res) {
//   let popObj = {}
//   if(req.query.popStr){
//     popObj.idName = `bracketId`
//     popObj.str = req.query.popStr
//   }
//   let query = {
//     bracketId: req.params.bracketId
//   }
//   crudReadOne( Bracket, query, popObj )
//     .then( bracket => {
//       return res.status(200).send(bracket)
//     })
//     .catch( err => {
//       return res.status(400).send(err)
//     })
// }
