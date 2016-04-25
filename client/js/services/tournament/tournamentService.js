module.exports = [`$http`, `$q`, ($http, $q) => {
	this.generateBracketservice = function(tournament){
		return $http.post('/api/bracket', tournament)
	}
}]