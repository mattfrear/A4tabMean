//Tabs service used for articles REST endpoint
angular.module('mean.tabs').factory("Tabs", ['$resource', function($resource) {
    return $resource('tabs/:tabId', {
        tabId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);