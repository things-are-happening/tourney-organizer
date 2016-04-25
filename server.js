var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var session = require('express-session');
var mongoose = require('mongoose');
var morgan = require('morgan')
var app = express();

//controllers
var tournament = require('./server/controllers/tournamentCtrl')
var match = require('./server/controllers/matchCtrl')
var team = require('./server/controllers/teamCtrl')


//middleware
app.use(express.static(__dirname + '/build/client'));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));




//endpoints
app.get('/api/tournament/:id', tournament.getOne);
app.post('/api/tournament', tournament.post);
app.put('/api/tournament', tournament.put);
//////
app.get('/api/match', match.getAll);
app.get('/api/match', match.getOne);
app.post('/api/match', match.post);
app.put('/api/match', match.put);
app.delete('/api/match/:id', match.delete);
//////
app.get('/api/team', team.getAll);
app.get('/api/team', team.getOne);
app.post('/api/team', team.post);
app.put('/api/team', team.put);
app.delete('/api/team/:id', team.delete);


 //connecting
var port = 8096;
var mongoUri = 'mongodb://localhost:27017/tourney-organizer';

app.listen(port, function() {
	console.log('I got an ear out for port ' + port)
})

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('Connected to mongo at: ' + mongoUri);
})