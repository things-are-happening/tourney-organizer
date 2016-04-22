var angular = require(`angular`)
require(`angular-ui-router`)
require(`angular-sanitize`) // sanitizes HTML strings

angular.module(`boilerPlate`, [`ui.router`, `ngSanitize`])
  .config(require(`./states`))


require(`./controllers/controllers`)
require(`./services/services`)
