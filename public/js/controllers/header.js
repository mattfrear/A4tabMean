angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.menu = [{
        "title": "Tabs",
        "link": "tabs"
    }, {
        "title": "Create New Tab",
        "link": "tabs/create"
    }];
}]);