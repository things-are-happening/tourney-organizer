angular.module(`boilerPlate`)
  .controller(`siteCtrl`, require(`./siteCtrl`))
  .controller(`tournamentCtrl`, require(`./tournament/tournamentCtrl`))
  .controller(`addTourneyCtrl`, require(`./tournament/addTourneyCtrl`))
  .controller(`dashboardCtrl`, require(`./user/dashboardCtrl`))
