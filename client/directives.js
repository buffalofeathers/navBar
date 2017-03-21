angular.module('NavbarApp.directives', [])
.directive('customNavbar', function() {
    return {
        templateUrl: 'views/directives/navbar.html',
        restrict: 'E',
        controller: ['$scope','$rootScope', function($scope,$rootScope) {
            $rootScope.showingDrawer = false;
            $scope.toggleDrawer = function () {
                $rootScope.showingDrawer = !$rootScope.showingDrawer;
            }
        }]
    }
})
.directive('customDrawer', function() {
    return {
        templateUrl: 'views/directives/drawer.html',
        restrict: 'E'
    }
});