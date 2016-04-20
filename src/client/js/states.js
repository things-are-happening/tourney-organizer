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
      views: {
        "content" : {
          controller: `siteCtrl`,
          templateUrl : `./../templates/home.html`
        }
      }
    })


    .state(`app`, {
      url: `/app`,
      // resolve: function() {
      //
      // },
      views: {
        "content":{
          controller: `dashboardCtrl`,
          templateUrl: `./../templates/user/dashboard.html`
        }
      }
    })
    /**
      NOTE: Change app states to become child of 'app' for Auth
    **/
    .state(`app.tournament`, {
      url: `/tournament`,
      views: {
        "content@" :{
          controller: `tournamentCtrl`,
          templateUrl: `./../templates/tournament/view.html`
        }
      }
    })
    .state(`app.tournament.add`, {
      url: `/add`,
      views: {
        "content@" : {
          controller: `addTourneyCtrl`,
          templateUrl: `./../templates/tournament/add.html`
        }
      }
    })
}]
