angular.module('NavbarApp', ['ngRoute', 'NavbarApp.controllers', 'NavbarApp.directives'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
    })
    .when('/about', {
        templateUrl: 'views/about.html',
        
    }).when('/contact', {
        templateUrl: 'views/contact.html',
        
    })
    .otherwise({
        redirectTo: '/'
    });
}]);