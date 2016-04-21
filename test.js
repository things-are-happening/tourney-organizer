/**
Write a function(data) that will take data.teams and generate matches with
`https://lodash.com/docs#chunk`, followed by using the service to add
the matches, then, add match reference to tournament data inside
tournament.bracket.
(NOTE: data.teams SHOUD NOT be passed to the database)
Example:

// 4 matches (8 teams)
bracket: [
  {
    round_1: ["match._id","match._id","match._id","match._id"],
    // round_2 will be populated as match winners are being decided
    // write logic for knowing which index in round_2 to send the winner
    round_2: ["",""],
    bracketWinner: "" // _id of winner
  },
  // if the tournament is double elimination an extra {} will be created
  // adding round_1, round_2, etc, depending on how many rounds are left
  // in the bracket
  {}
]
**/

(function() {
  var tourneyData = {
     "name" : "Tournament",
     "sport" : "Some Sport",
     "teams" : ["a1","b2","c3","d4","e5","f6","g7","h8"],
     "amountTeam" : 5,
     "bracketType": "single",
     "date" : {
       "start" : {
         "dd" : "04",
         "mm" : "20",
         "yy" : "2016"
       },
       "end" : {
         "dd" : "05",
         "mm" : "21",
         "yy" : "2016"
       }
     },
     "time" : {
       "hh" : "04",
       "mm" : "20"
     },
     "bracket" : []
   };

  var _ = require('lodash')
  var createBracketsAndFirstRound = function(data) {
    // Verify even amount of teams
    if(data.length % 2 !== 0){
      throw new Error('Data\'s length has to be even.')
    }
    var returnObj = {}
    var roundAlgo = data.length / 2 // make this better 
    // Creates and adds round_x property to returnObj
    for(var i = 1; i <= roundAlgo; i ++){
      var key = 'round_' + i
      returnObj[key] = []
    }
    /**
      NOTE: create matches based on data and add the matches to the round_1
    **/

    // this is not the real return, matches need to be added
    returnObj.round_1 = _.chunk(data, 2)
    return returnObj
  }
  return console.log(createBracketsAndFirstRound(tourneyData.teams))
})()
