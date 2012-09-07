/*global define, require
 */

require({
  baseUrl:"/app/js",
  paths:{
    "lib":"/app/lib"
  },
  shim:{
    'lib/angular/angular':{
      exports:'angular'
    }
  }
}, ['app', 'bootstrap', 'controllers', 'directives', 'filters', 'services'], function (app) {
  app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: MyCtrl1});
    $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
  return app.run([
    '$rootScope', '$log', function ($rootScope, $log) {
      $rootScope.$on('error:unauthorized', function (event, response) {
      });
      $rootScope.$on('error:forbidden', function (event, response) {
      });
      $rootScope.$on('error:403', function (event, response) {
      });
      $rootScope.$on('success:ok', function (event, response) {
      });
      return $rootScope.$on('$routeChangeSuccess', function (event, currentRoute, priorRoute) {
        return $rootScope.$broadcast("" + currentRoute.controller + "$routeChangeSuccess", currentRoute, priorRoute);
      });
    }
  ]);
});
