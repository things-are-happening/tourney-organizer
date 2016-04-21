module.exports = [`$scope`, ($scope) => {

	let fakeTrounamentData =
	{
	   "_id" : "5719128d55eccdca822ca4bb",
	   "name" : "Tournament",
	   "sport" : "Some Sport",
	   "amountTeams" : 8,
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
	   "bracket" :
	   [
	    {
	       "round_1":
	       [
	        [{
	          "team_1": {
	            "name": "Team 1",
	              "score": 3
	            },
	            "team_2": {
	              "name": "Team 2",
	              "score": 2
	            }
	          },
	          {
	            "team_1": {
	             "name": "Team 3",
	             "score": 2
	           },
	           "team_2": {
	             "name": "Team 4",
	             "score": 3
	           }
	         }],
	         [
	           {
	             "team_1": {
	               "name": "Team 5",
	               "score": 3
	             },
	             "team_2": {
	               "name": "Team 6",
	               "score": 0
	             }
	           },
	           {

	             "team_1": {
	               "name": "Team 7",
	               "score": 1
	             },
	             "team_2": {
	               "name": "Team 8",
	               "score": 3
	             }
	           }
	         ]
	       ],
	       "round_2" :[
	         ["TBA","TBA"]
	       ]
	     }
	   ]
	 }

 $scope.roundChange = (round) => {
	 
 }
 $scope.matches = fakeTrounamentData
 $scope.test = true
}]
