var angular = require(`angular`)
require(`angular-ui-router`)
require(`angular-sanitize`) // sanitizes HTML strings
require(`angular-material`)
angular.module(`boilerPlate`, [`ui.router`, `ngSanitize`, `ngMaterial`])
  .config(require(`./states`))


require(`./controllers/controllers`)
require(`./services/tournament/tournamentService`)
