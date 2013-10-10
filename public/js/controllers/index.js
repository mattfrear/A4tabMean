angular.module('mean.system').controller('IndexController', ['$scope', 'Global', 'Tabs', function ($scope, Global, Tabs) {
    $scope.global = Global;
    Tabs.query(function(tabs) {
        $scope.tabs = tabs;
    });
}]);