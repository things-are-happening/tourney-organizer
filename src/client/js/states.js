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
}]
