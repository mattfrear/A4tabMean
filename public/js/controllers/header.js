angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Create New Tab",
        "link": "tabs/create"
    }];
    
    $scope.isCollapsed = false;
}]);