'use strict';

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _secrets = require('./secrets');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import User from './../models/User' // Uncomment / Change this for passport

var port = process.env.PORT || 9999;

module.exports = function (app) {

  app.use(_bodyParser2.default.json());
  app.use((0, _cookieParser2.default)());
  app.use((0, _cors2.default)());
  app.use(_express2.default.static(__dirname + '/../../client'));
  app.use((0, _expressSession2.default)(_secrets.sessionSecret));
  app.use(_passport2.default.initialize());
  app.use(_passport2.default.session());
  app.use((0, _morgan2.default)('dev'));

  // require('./passport')(passport, `MODEL NAME`)

  _mongoose2.default.connect(_secrets.mongo.uri);
  _mongoose2.default.connection.once('open', function () {
    console.log('Connected to Mongo ' + _secrets.mongo.uri);
  });

  app.listen(port, function () {
    console.log('Listening on ' + port);
  });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9jb25maWcvbWlkZGxld2FyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7Ozs7O0FBSUEsSUFBTSxPQUFPLFFBQVEsR0FBUixDQUFZLElBQVosSUFBb0IsSUFBcEI7O0FBRWIsT0FBTyxPQUFQLEdBQWlCLGVBQU87O0FBRXRCLE1BQUksR0FBSixDQUFRLHFCQUFXLElBQVgsRUFBUixFQUZzQjtBQUd0QixNQUFJLEdBQUosQ0FBUSw2QkFBUixFQUhzQjtBQUl0QixNQUFJLEdBQUosQ0FBUSxxQkFBUixFQUpzQjtBQUt0QixNQUFJLEdBQUosQ0FBUSxrQkFBUSxNQUFSLENBQWtCLDJCQUFsQixDQUFSLEVBTHNCO0FBTXRCLE1BQUksR0FBSixDQUFRLHFEQUFSLEVBTnNCO0FBT3RCLE1BQUksR0FBSixDQUFRLG1CQUFTLFVBQVQsRUFBUixFQVBzQjtBQVF0QixNQUFJLEdBQUosQ0FBUSxtQkFBUyxPQUFULEVBQVIsRUFSc0I7QUFTdEIsTUFBSSxHQUFKLENBQVEsNEJBQVI7Ozs7QUFUc0Isb0JBYXRCLENBQVMsT0FBVCxDQUFpQixlQUFNLEdBQU4sQ0FBakIsQ0Fic0I7QUFjdEIscUJBQVMsVUFBVCxDQUFvQixJQUFwQixTQUFpQyxZQUFNO0FBQ3JDLFlBQVEsR0FBUix5QkFBa0MsZUFBTSxHQUFOLENBQWxDLENBRHFDO0dBQU4sQ0FBakMsQ0Fkc0I7O0FBa0J0QixNQUFJLE1BQUosQ0FBVyxJQUFYLEVBQWlCLFlBQU07QUFDckIsWUFBUSxHQUFSLG1CQUE0QixJQUE1QixFQURxQjtHQUFOLENBQWpCLENBbEJzQjtDQUFQIiwiZmlsZSI6InNlcnZlci9jb25maWcvbWlkZGxld2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcidcbmltcG9ydCBib2R5UGFyc2VyICAgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgbW9uZ29vc2UgICAgIGZyb20gJ21vbmdvb3NlJ1xuaW1wb3J0IHBhc3Nwb3J0ICAgICBmcm9tICdwYXNzcG9ydCdcbmltcG9ydCBzZXNzaW9uICAgICAgZnJvbSAnZXhwcmVzcy1zZXNzaW9uJ1xuaW1wb3J0IGV4cHJlc3MgICAgICBmcm9tICdleHByZXNzJ1xuaW1wb3J0IG1vcmdhbiAgICAgICBmcm9tICdtb3JnYW4nXG5pbXBvcnQgY29ycyAgICAgICAgIGZyb20gJ2NvcnMnXG5cbmltcG9ydCB7c2Vzc2lvblNlY3JldCwgbW9uZ299IGZyb20gJy4vc2VjcmV0cydcblxuLy8gaW1wb3J0IFVzZXIgZnJvbSAnLi8uLi9tb2RlbHMvVXNlcicgLy8gVW5jb21tZW50IC8gQ2hhbmdlIHRoaXMgZm9yIHBhc3Nwb3J0XG5cbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDk5OTlcblxubW9kdWxlLmV4cG9ydHMgPSBhcHAgPT4ge1xuXG4gIGFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXG4gIGFwcC51c2UoY29va2llUGFyc2VyKCkpXG4gIGFwcC51c2UoY29ycygpKVxuICBhcHAudXNlKGV4cHJlc3Muc3RhdGljKGAke19fZGlybmFtZX0vLi4vLi4vY2xpZW50YCkpXG4gIGFwcC51c2Uoc2Vzc2lvbihzZXNzaW9uU2VjcmV0KSlcbiAgYXBwLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpXG4gIGFwcC51c2UocGFzc3BvcnQuc2Vzc2lvbigpKVxuICBhcHAudXNlKG1vcmdhbihgZGV2YCkpXG5cbiAgLy8gcmVxdWlyZSgnLi9wYXNzcG9ydCcpKHBhc3Nwb3J0LCBgTU9ERUwgTkFNRWApXG5cbiAgbW9uZ29vc2UuY29ubmVjdChtb25nby51cmkpXG4gIG1vbmdvb3NlLmNvbm5lY3Rpb24ub25jZShgb3BlbmAsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhgQ29ubmVjdGVkIHRvIE1vbmdvICR7bW9uZ28udXJpfWApXG4gIH0pXG5cbiAgYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiAke3BvcnR9YClcbiAgfSlcblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
