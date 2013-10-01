angular.module('mean.tabs').controller('TabsController', ['$scope', '$routeParams', '$location', 'Global', 'Tabs', function ($scope, $routeParams, $location, Global, Tabs
    ) {
    $scope.global = Global;

    $scope.create = function() {
        var tab = new Tabs({
            artist: this.artist,
            name: this.name,
            content: this.content
        });
        tab.$save(function(response) {
            $location.path("tabs/" + response._id);
        });

        this.artist = "";
        this.name = "";
        this.content = "";
    };

    $scope.remove = function(tab) {
        tab.$remove();  

        for (var i in $scope.tabs) {
            if ($scope.tabs[i] == tab) {
                $scope.tabs.splice(i, 1);
            }
        }
    };

    $scope.update = function() {
        var tab = $scope.tab;
        if (!tab.updated) {
            tab.updated = [];
        }
        tab.updated.push(new Date().getTime());

        tab.$update(function() {
            $location.path('tabs/' + tab._id);
        });
    };

    $scope.find = function(query) {
        Tabs.query(query, function(tabs) {
            $scope.tabs = tabs;
        });
    };

    $scope.findOne = function() {
        Tabs.get({
            tabId: $routeParams.tabId
        }, function(tab) {
            $scope.tab = tab;
        });
    };
}]);