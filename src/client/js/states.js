module.exports = [`$urlRouterProvider`, `$stateProvider`, `$httpProvider`,
($urlRouterProvider, $stateProvider, $httpProvider) => {
  $httpProvider.interceptors.push( ($q) => {
    return {
      responseError: function(res) {
        switch (res.status) {
            case 400:
              return $q.reject(res)
            case 401:
              return $q.reject(res)
        }
      }
    }
  })
  $urlRouterProvider.otherwise('/')
  return $stateProvider
    .state(`site`, {
      url: `/`,
      controller: `siteCtrl`,
      templateUrl : `./../templates/home.html`
    })
    .state(`viewTournament`, {
      url: `/tournament`,
      controller: `tournamentCtrl`,
      templateUrl: `./../templates/tournament.view.html`
    })
    .state(`newTournamentForm`, {
      url: `/newtournament`,
      controller: `newTournamentFormCtrl`,
      templateUrl: `./../templates/new.tournament.form.html`
    })
    .state(`dashboard`, {
      url: `/dashboard`,
      controller: `userDashboardCtrl`,
      templateUrl: `./../templates/user.dashboard.html`
    })
}]
