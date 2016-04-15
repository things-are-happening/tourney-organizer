'use strict';

module.exports = ['$urlRouterProvider', '$stateProvider', '$httpProvider', function ($urlRouterProvider, $stateProvider, $httpProvider) {
  $httpProvider.interceptors.push(function ($q) {
    return {
      responseError: function responseError(res) {
        switch (res.status) {
          case 400:
            return $q.reject(res);
          case 401:
            return $q.reject(res);
        }
      }
    };
  });
  $urlRouterProvider.otherwise('/');
  return $stateProvider.state('site', {
    url: '/',
    controller: 'siteCtrl',
    templateUrl: './../templates/home.html'
  });
}];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC9qcy9zdGF0ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxPQUFPLE9BQVAsR0FBaUIsMERBQ2pCLFVBQUMsa0JBQUQsRUFBcUIsY0FBckIsRUFBcUMsYUFBckMsRUFBdUQ7QUFDckQsZ0JBQWMsWUFBZCxDQUEyQixJQUEzQixDQUFpQyxVQUFDLEVBQUQsRUFBUTtBQUN2QyxXQUFPO0FBQ0wscUJBQWUsdUJBQVMsR0FBVCxFQUFjO0FBQzNCLGdCQUFRLElBQUksTUFBSjtBQUNKLGVBQUssR0FBTDtBQUNFLG1CQUFPLEdBQUcsTUFBSCxDQUFVLEdBQVYsQ0FBUCxDQURGO0FBREosZUFHUyxHQUFMO0FBQ0UsbUJBQU8sR0FBRyxNQUFILENBQVUsR0FBVixDQUFQLENBREY7QUFISixTQUQyQjtPQUFkO0tBRGpCLENBRHVDO0dBQVIsQ0FBakMsQ0FEcUQ7QUFhckQscUJBQW1CLFNBQW5CLENBQTZCLEdBQTdCLEVBYnFEO0FBY3JELFNBQU8sZUFDSixLQURJLFNBQ1U7QUFDYixZQURhO0FBRWIsMEJBRmE7QUFHYiwyQ0FIYTtHQURWLENBQVAsQ0FkcUQ7Q0FBdkQsQ0FEQSIsImZpbGUiOiJjbGllbnQvanMvc3RhdGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBbYCR1cmxSb3V0ZXJQcm92aWRlcmAsIGAkc3RhdGVQcm92aWRlcmAsIGAkaHR0cFByb3ZpZGVyYCxcbigkdXJsUm91dGVyUHJvdmlkZXIsICRzdGF0ZVByb3ZpZGVyLCAkaHR0cFByb3ZpZGVyKSA9PiB7XG4gICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goICgkcSkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICByZXNwb25zZUVycm9yOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc3dpdGNoIChyZXMuc3RhdHVzKSB7XG4gICAgICAgICAgICBjYXNlIDQwMDpcbiAgICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXMpXG4gICAgICAgICAgICBjYXNlIDQwMTpcbiAgICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXMpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKVxuICByZXR1cm4gJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoYHNpdGVgLCB7XG4gICAgICB1cmw6IGAvYCxcbiAgICAgIGNvbnRyb2xsZXI6IGBzaXRlQ3RybGAsXG4gICAgICB0ZW1wbGF0ZVVybCA6IGAuLy4uL3RlbXBsYXRlcy9ob21lLmh0bWxgXG4gICAgfSlcbn1dXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
